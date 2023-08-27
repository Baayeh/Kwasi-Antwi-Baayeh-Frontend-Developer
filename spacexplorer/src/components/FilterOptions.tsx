import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Nullable } from 'primereact/ts-helpers';
import { BiFilter } from 'react-icons/bi';

interface FilterProps {
  selectedStatus: Status[] | [];
  setSelectedStatus: (status: Status[] | []) => void;
  selectedType: CapsuleType[] | [];
  setSelectedType: (type: CapsuleType[] | []) => void;
  handleFilter: () => void;
  date: Nullable<string | Date | Date[] | null>;
  setDate: (date: Nullable<string | Date | Date[] | null>) => void;
}

const FilterOptions: React.FC<FilterProps> = ({
  selectedStatus,
  setSelectedStatus,
  selectedType,
  setSelectedType,
  handleFilter,
  date,
  setDate,
}) => {
  const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Retired', value: 'retired' },
    { label: 'Unknown', value: 'unknown' },
    { label: 'Destroyed', value: 'destroyed' },
  ];

  const typeOptions = [
    { label: 'Dragon 1.0', value: 'Dragon 1.0' },
    { label: 'Dragon 1.1', value: 'Dragon 1.1' },
    { label: 'Dragon 2.0', value: 'Dragon 2.0' },
  ];

  return (
    <div className="sm:flex items-center gap-x-4 w-full sm:justify-between lg:justify-end">
      <div id="filter" className="flex items-center gap-x-4">
        <MultiSelect
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.value)}
          options={statusOptions}
          optionLabel="label"
          display="chip"
          placeholder="Select Status"
          maxSelectedLabels={3}
          className="w-full bg-transparent "
          id="multiselect"
          data-testid="status-multiselect"
        />
        <MultiSelect
          value={selectedType}
          onChange={(e) => setSelectedType(e.value)}
          options={typeOptions}
          optionLabel="label"
          display="chip"
          placeholder="Select Type"
          maxSelectedLabels={3}
          className="w-full bg-transparent "
          id="multiselect"
          data-testid="type-multiselect"
        />
      </div>
      <div className="flex items-center mt-4 sm:mt-0 gap-x-4">
        <div>
          <Calendar
            inputId="original_launch"
            value={date}
            onChange={(e: CalendarChangeEvent) => setDate(e.value)}
            placeholder="Select Date"
            className="bg-transparent w-full"
            data-testid="calendar"
          />
        </div>
        <div>
          <button
            type="button"
            className="bg-teal-400 p-3 rounded-md flex items-center gap-x-2 text-gray-900 font-bold"
            onClick={handleFilter}
          >
            <span>
              <BiFilter size={24} />
            </span>
            <span>Filter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
