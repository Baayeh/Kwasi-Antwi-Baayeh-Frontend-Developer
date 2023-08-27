import { fireEvent, render, screen } from '@testing-library/react';
import { Nullable } from 'primereact/ts-helpers';
import { FilterOptions } from '../../components';

describe('FilterOptions component', () => {
  test('renders multi-select dropdowns', () => {
    render(
      <FilterOptions
        selectedStatus={[]}
        setSelectedStatus={() => {}}
        selectedType={[]}
        setSelectedType={() => {}}
        handleFilter={() => {}}
        date={null}
        setDate={() => {}}
      />
    );

    const multipleDropdowns = screen.getAllByRole('listbox');

    expect(multipleDropdowns.length).toEqual(2);
  });

  test('renders calendar input', () => {
    render(
      <FilterOptions
        selectedStatus={[]}
        setSelectedStatus={() => {}}
        selectedType={[]}
        setSelectedType={() => {}}
        handleFilter={() => {}}
        date={null}
        setDate={() => {}}
      />
    );

    const calendarInput = screen.getByPlaceholderText('Select Date');

    expect(calendarInput).toBeInTheDocument();
  });

  test('renders filter button', () => {
    render(
      <FilterOptions
        selectedStatus={[]}
        setSelectedStatus={() => {}}
        selectedType={[]}
        setSelectedType={() => {}}
        handleFilter={() => {}}
        date={null}
        setDate={() => {}}
      />
    );

    const filterButton = screen.getByRole('button', { name: 'Filter' });

    expect(filterButton).toBeInTheDocument();
  });

  test('calls handleFilter when filter button is clicked', () => {
    const handleFilterMock = jest.fn();
    render(
      <FilterOptions
        selectedStatus={[]}
        setSelectedStatus={() => {}}
        selectedType={[]}
        setSelectedType={() => {}}
        handleFilter={handleFilterMock}
        date={null}
        setDate={() => {}}
      />
    );

    const filterButton = screen.getByRole('button', { name: 'Filter' });
    fireEvent.click(filterButton);

    expect(handleFilterMock).toHaveBeenCalled();
  });

  test('updates selectedStatus when status is selected', () => {
    let selectedStatus: Status[] | [] = [];
    const setSelectedStatusMock = jest.fn((status: Status[] | []) => {
      selectedStatus = status;
    });
    render(
      <FilterOptions
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatusMock}
        selectedType={[]}
        setSelectedType={() => {}}
        handleFilter={() => {}}
        date={null}
        setDate={() => {}}
      />
    );

    const statusDropdown = screen.getByTestId('status-multiselect');

    expect(statusDropdown).toBeInTheDocument();
  });

  test('updates selectedType when type is selected', () => {
    let selectedType: CapsuleType[] | [] = [];
    const setSelectedTypeMock = jest.fn((type: CapsuleType[] | []) => {
      selectedType = type;
    });
    render(
      <FilterOptions
        selectedStatus={[]}
        setSelectedStatus={() => {}}
        selectedType={selectedType}
        setSelectedType={setSelectedTypeMock}
        handleFilter={() => {}}
        date={null}
        setDate={() => {}}
      />
    );

    const typeDropdown = screen.getByTestId('type-multiselect');

    expect(typeDropdown).toBeInTheDocument();
  });

  test('updates date when calendar value is selected', () => {
    let date: Nullable<string | Date | Date[] | null> = null;
    const setDateMock = jest.fn(
      (newDate: Nullable<string | Date | Date[] | null>) => {
        date = newDate;
      }
    );
    render(
      <FilterOptions
        selectedStatus={[]}
        setSelectedStatus={() => {}}
        selectedType={[]}
        setSelectedType={() => {}}
        handleFilter={() => {}}
        date={date}
        setDate={setDateMock}
      />
    );

    const calendarInput = screen.getByTestId('calendar');

    expect(calendarInput).toBeInTheDocument();
  });
});
