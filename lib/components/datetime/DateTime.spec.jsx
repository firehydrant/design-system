import React from 'react';
import { render } from '@testing-library/react';
import DateTime from './DateTime';
import { DATETIME_FORMAT } from './constants';

describe('DateTime', () => {
  const iso = '2022-12-25T12:30+0000';

  test('renders', () => {
    const { container } = render(<DateTime timestamp={iso} />);
    expect(container.textContent).toContain('Dec 25, 2022, 12:30 PM UTC');
  });

  test('renders custom format and custom timezone', () => {
    const { container } = render(
      <DateTime
        timestamp={iso}
        format={DATETIME_FORMAT.custom}
        customFormat="FFFF"
        timezone="America/New_York"
      />,
    );
    expect(container.textContent).toContain(
      'Sunday, December 25, 2022, 7:30:00 AM Eastern Standard',
    );
  });

  test('renders duration from endTime', () => {
    const isoEnd = '2022-12-31T12:30+0000';
    const { container } = render(
      <DateTime
        timestamp={iso}
        locale="ja"
        format={DATETIME_FORMAT.duration}
        endTime={isoEnd}
      />,
    );
    expect(container.textContent).toContain('6 日');
  });
});
