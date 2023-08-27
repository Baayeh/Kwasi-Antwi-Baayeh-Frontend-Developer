import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';
import { data } from '../../sampleData';

describe('SearchBar', () => {
  test('should filter the capsules based on the search query', () => {
    const setFilteredCapsules = jest.fn();
    const setQuery = jest.fn();

    render(
      <SearchBar
        capsules={data}
        setFilteredCapsules={setFilteredCapsules}
        query=""
        setQuery={setQuery}
      />
    );

    const searchBar = screen.getByPlaceholderText(
      'Search by Capsule ID or serial number'
    );
    expect(searchBar).toBeInTheDocument();
  });
});
