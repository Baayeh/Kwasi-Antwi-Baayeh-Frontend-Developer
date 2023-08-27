import { useEffect, useRef } from 'react';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

interface SearchBarProps {
  capsules: Capsule[] | null;
  setFilteredCapsules: (filteredCapsules: Capsule[] | null) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  capsules,
  setFilteredCapsules,
}) => {
  const searchRef = useRef<HTMLInputElement | any>();

  useEffect(() => {
    if (searchRef) {
      fromEvent(searchRef.current, 'keyup')
        .pipe(
          map((event: any) => (event.target as HTMLInputElement)?.value),
          debounceTime(500),
          distinctUntilChanged()
        )
        .subscribe((value) => {
          const data = capsules?.filter(
            (capsule) =>
              capsule.capsule_id.toLowerCase().includes(value.toLowerCase()) ||
              capsule.capsule_serial.toLowerCase().includes(value.toLowerCase())
          );

          data && setFilteredCapsules(data);
        });
    }
  }, [capsules]);

  return (
    <div className="w-full">
      <label htmlFor="searchBar"></label>
      <input
        ref={searchRef}
        type="search"
        name="searchBar"
        id="searchBar"
        placeholder="Search by Capsule ID or serial number"
        className="w-full lg:w-[20rem] p-3 rounded-md bg-transparent outline-none border"
      />
    </div>
  );
};

export default SearchBar;
