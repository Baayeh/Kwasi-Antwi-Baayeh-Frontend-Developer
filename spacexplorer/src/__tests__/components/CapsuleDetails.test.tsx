import { fireEvent, render, screen } from '@testing-library/react';
import CapsuleDetails from '../../components/CapsuleDetails';
import { data } from '../../sampleData';

describe('CapsuleDetails', () => {
  it('renders the capsule details correctly', () => {
    render(
      <CapsuleDetails visible={true} setVisible={jest.fn()} capsule={data[0]} />
    );

    expect(screen.getByText('Capsule Details')).toBeInTheDocument();
    expect(screen.getByText('Capsule ID')).toBeInTheDocument();
    expect(screen.getByText('dragon1')).toBeInTheDocument();
    expect(screen.getByText('Capsule Serial Number')).toBeInTheDocument();
    expect(screen.getByText('C101')).toBeInTheDocument();
    expect(screen.getByText('Capsule type')).toBeInTheDocument();
    expect(screen.getByText('Dragon 1.0')).toBeInTheDocument();
    expect(screen.getByText('retired')).toBeInTheDocument();
    expect(
      screen.getByText('Reentered after three weeks in orbit')
    ).toBeInTheDocument();
    expect(screen.getByText('Capsule Original Launch')).toBeInTheDocument();
    expect(screen.getByText('Capsule Landings')).toBeInTheDocument();
    // expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Capsule Reuse Count')).toBeInTheDocument();
    // expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Capsule Missions')).toBeInTheDocument();
    expect(screen.getByText('COTS 1')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  // it('hides the dialog when "Close" button is clicked', () => {
  //   const setVisible = jest.fn();
  //   render(
  //     <CapsuleDetails
  //       visible={true}
  //       setVisible={setVisible}
  //       capsule={data[0]}
  //     />
  //   );

  //   fireEvent.click(screen.getByLabelText('Close'));

  //   expect(setVisible).toHaveBeenCalledWith(false);
  // });
});
