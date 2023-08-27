import { fireEvent, render, screen } from '@testing-library/react';
import Paginator from '../../components/Paginator';

test('renders Paginator component with previous and next buttons', () => {
  // set up initial state
  const totalPages = 5;
  const currentPage = 3;
  const setCurrentPage = jest.fn();

  // render the Paginator component
  render(
    <Paginator
      totalPages={totalPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );

  // assert previous button is available and enabled
  const previousButton = screen.getByTitle('Previous');
  expect(previousButton).toBeInTheDocument();
  expect(previousButton).toBeEnabled();

  // assert next button is available and enabled
  const nextButton = screen.getByTitle('Next');
  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toBeEnabled();
});

test('clicking previous button should call setCurrentPage with the correct value', () => {
  // set up initial state
  const totalPages = 5;
  const currentPage = 3;
  const setCurrentPage = jest.fn();

  // render the Paginator component
  render(
    <Paginator
      totalPages={totalPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );

  // simulate a click on previous button
  const previousButton = screen.getByTitle('Previous');
  fireEvent.click(previousButton);

  // assert setCurrentPage has been called with the correct value
  expect(setCurrentPage).toHaveBeenCalledWith(currentPage - 1);
});

test('clicking next button should call setCurrentPage with the correct value', () => {
  // set up initial state
  const totalPages = 5;
  const currentPage = 3;
  const setCurrentPage = jest.fn();

  // render the Paginator component
  render(
    <Paginator
      totalPages={totalPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );

  // simulate a click on next button
  const nextButton = screen.getByTitle('Next');
  fireEvent.click(nextButton);

  // assert setCurrentPage has been called with the correct value
  expect(setCurrentPage).toHaveBeenCalledWith(currentPage + 1);
});
