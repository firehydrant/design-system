import React from 'react';
import { render } from '@testing-library/react';
import { PopoverDialog } from './PopoverDialog';

describe('Popover Dialog', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <PopoverDialog
        footerButtonText="Learn more"
        body="Here is some descriptive text"
        footerButtonAction={jest.fn()}
        headerText="Title"
      />,
    );
    expect(getByTestId('help-icon')).toBeInTheDocument();
  });
});
