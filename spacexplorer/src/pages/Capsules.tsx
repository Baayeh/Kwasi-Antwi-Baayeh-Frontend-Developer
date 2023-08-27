import { Nullable } from 'primereact/ts-helpers';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { selectCapsules, setCapsules } from '../app/capsuleSlice';
import {
  CapsuleCard,
  CapsuleDetails,
  FilterOptions,
  Loader,
  Paginator,
  SearchBar,
} from '../components';
import { useAppSelector, useFetch } from '../hooks';

const Capsules = () => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [capsulesPerPage] = useState(6);

  // get single capsule
  const [singleCapsule, setSingleCapsule] = useState<Capsule | null>(null);
  const [visible, setVisible] = useState(false);
  const showCapsuleDialog = (item: Capsule) => {
    setVisible(true);
    setSingleCapsule(item);
  };

  // Fetching capsules
  const { capsules } = useAppSelector(selectCapsules);
  const { loading, fetchData, error } = useFetch(`/capsules`, setCapsules);

  // Filter states, types and original launch date
  const [query, setQuery] = useState('');
  const [filteredCapsules, setFilteredCapsules] = useState<Capsule[] | null>(
    null
  );
  const [selectedStatus, setSelectedStatus] = useState<Status[] | []>([]);
  const [selectedType, setSelectedType] = useState<CapsuleType[] | []>([]);
  const [date, setDate] =
    useState<Nullable<string | Date | Date[] | null>>(null);

  const getFilteredCapsules = () => {
    let queryObj: any = {};

    if (selectedStatus.length) {
      queryObj = {
        ...queryObj,
        status: selectedStatus,
      };
    }

    if (selectedType.length) {
      queryObj = {
        ...queryObj,
        type: selectedType,
      };
    }

    if (date) {
      queryObj = {
        ...queryObj,
        original_launch: date.toLocaleString(),
      };
    }

    let queryKeys: any = Object.keys(queryObj);
    let result: any = [];
    if (queryKeys.length === 1) {
      result = capsules?.filter((capsule) =>
        queryObj[queryKeys[0]].includes(capsule[queryKeys[0] as keyof Capsule])
      );
    } else if (queryKeys.length === 2) {
      result = capsules?.filter(
        (capsule) =>
          queryObj[queryKeys[0]].includes(
            capsule[queryKeys[0] as keyof Capsule]
          ) &&
          queryObj[queryKeys[1]].includes(
            capsule[queryKeys[1] as keyof Capsule]
          )
      );
      queryObj = {};
    }

    return result;
  };

  useEffect(() => {
    if (!selectedStatus.length && !selectedType.length && !date) {
      setFilteredCapsules(capsules);
    }
  }, [selectedStatus, selectedType, date]);

  const handleFilter = () => {
    const data: Capsule[] = getFilteredCapsules();

    if (data) {
      setFilteredCapsules(data);
    }

    if (data.length === 0) {
      setFilteredCapsules(capsules);
      toast.error('No results found');
    }
  };

  // Get current capsules per page
  const getCurrentCapsules = (data: Capsule[]) => {
    const indexOfLastCapsule = currentPage * capsulesPerPage;
    const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
    const currentCapsules = data.slice(indexOfFirstCapsule, indexOfLastCapsule);

    return currentCapsules;
  };

  // calculate total pages
  const totalPages = filteredCapsules
    ? Math.ceil(filteredCapsules.length / capsulesPerPage)
    : 0;

  const getContent = () => {
    if (loading) {
      return <Loader />;
    } else if (error) {
      return (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 font-semibold text-red-500 text-xl text-center">
          {error}
        </div>
      );
    } else {
      return (
        <>
          {filteredCapsules && filteredCapsules?.length > 0
            ? getCurrentCapsules(filteredCapsules).map((capsule) => (
                <CapsuleCard
                  key={capsule.capsule_serial}
                  capsule={capsule}
                  showCapsuleDialog={showCapsuleDialog}
                />
              ))
            : null}
        </>
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    capsules && setFilteredCapsules(capsules);
  }, [capsules]);

  return (
    <section className="min-h-screen pt-[8rem] px-4 bg-main-img bg-cover bg-no-repeat bg-fixed pb-10">
      <div className="wrapper mt-12">
        <div className="sm:border border-gray-700 sm:mb-10 py-5 sm:p-5 rounded-md flex flex-col items-center sm:items-start gap-y-4 lg:flex-row lg:justify-between lg:items-center">
          <SearchBar
            capsules={capsules}
            query={query}
            setQuery={setQuery}
            setFilteredCapsules={setFilteredCapsules}
          />
          <FilterOptions
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            handleFilter={handleFilter}
            date={date}
            setDate={setDate}
          />
        </div>
        <hr className="border-gray-600 mb-5 sm:hidden" />
        <Paginator
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[60rem] mx-auto">
          {getContent()}
        </div>
      </div>

      {visible && (
        <CapsuleDetails
          visible={visible}
          setVisible={setVisible}
          capsule={singleCapsule}
        />
      )}
    </section>
  );
};

export default Capsules;
