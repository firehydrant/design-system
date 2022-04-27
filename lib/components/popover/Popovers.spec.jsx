import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';
import { PopoverDialog } from './PopoverDialog';
import { Button } from '../button';
import { Dropdown } from '../../main';
import { PopoverInput } from './PopoverInput';

describe('Popover input', () => {
  const defaultOptions = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
  ];
  it('should render trigger', () => {
    const { getByText } = render(
      <PopoverInput
        body={<Dropdown options={defaultOptions} />}
        footerButtonText="Done"
        footerButtonAction={vi.fn()}
        headerText="Title"
        trigger={<Button>Click me</Button>}
      />,
    );
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('should render popover', () => {
    const { getByText } = render(
      <PopoverInput
        body={<Dropdown options={defaultOptions} />}
        footerButtonText="Done"
        footerButtonAction={vi.fn()}
        headerText="Title"
        trigger={<Button>Click me</Button>}
      />,
    );
    const trigger = getByText('Click me');
    fireEvent.click(trigger);
    expect(getByText('Title')).toBeInTheDocument();
  });
});

describe('Popover Dialog', () => {
  it('should render trigger', () => {
    const { getByTestId } = render(
      <PopoverDialog
        footerButtonText="Learn more"
        body="Here is some descriptive text"
        footerButtonAction={vi.fn()}
        headerText="Title"
      />,
    );
    expect(getByTestId('help-icon')).toBeInTheDocument();
  });

  it('should render popover', () => {
    const { getByTestId, getByText } = render(
      <PopoverDialog
        footerButtonText="Learn more"
        body="Here is some descriptive text"
        footerButtonAction={vi.fn()}
        headerText="Title"
      />,
    );
    const trigger = getByTestId('help-icon');
    fireEvent.click(trigger);
    expect(getByText('Title')).toBeInTheDocument();
  });
});
