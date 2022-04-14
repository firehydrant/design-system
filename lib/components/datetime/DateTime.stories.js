import React from 'react';
import { DateTime } from './index';
import { DATETIME_FORMAT } from './constants';
import { DateTime as LuxonDateTime } from 'luxon';

export default {
  title: 'Components/DateTime',
  component: DateTime,
  argTypes: {
    timestamp: {
      type: { name: 'string', required: true },
      description: 'ISO formatted timestamp',
      table: {
        type: { summary: 'string' },
      },
    },
    endTime: {
      type: { name: 'string', required: false },
      description:
        'ISO formatted timestamp, required to calculate duration format',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    format: {
      type: { name: 'string', required: false },
      description:
        'currently available format options are shown under `Stories`',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'friendly' },
      },
    },
    locale: {
      type: { name: 'string', required: false },
      description: '(Currently not supported) locale of formatted datetime',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en-US' },
      },
    },
    timezone: {
      type: { name: 'string', required: false },
      description: 'IANA based timezone string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'UTC' },
      },
    },
    customFormat: {
      type: { name: 'string|object', required: false },
      description:
        "Custom string format or preset object format based upon Luxon's API",
      table: {
        type: { summary: 'string|object' },
        defaultValue: { summary: '' },
      },
    },
  },
};

const Template = (args) => <DateTime {...args} />;

const timestampNow = LuxonDateTime.now();
const timestampNowIso = timestampNow.toISO();
const timestampFuture = timestampNow.plus({
  years: 3,
  months: 2,
  weeks: 3,
  days: 5,
  hours: 12,
});
const timestampFutureIso = timestampFuture.toISO();

export const Friendly = Template.bind({});
Friendly.args = {
  format: DATETIME_FORMAT.friendly,
  timestamp: timestampNowIso,
  timezone: 'America/Los_Angeles',
};

export const UTC = Template.bind({});
UTC.args = {
  timestamp: timestampNowIso,
  format: DATETIME_FORMAT.utc,
};

export const Custom = Template.bind({});
Custom.args = {
  timestamp: timestampNowIso,
  format: DATETIME_FORMAT.custom,
  timezone: 'Asia/Tokyo',
  customFormat: 'd/M/y HH:mm a',
};

export const Date = Template.bind({});
Date.args = {
  timestamp: timestampNowIso,
  timezone: 'Europe/Paris',
  format: DATETIME_FORMAT.date,
};

export const Duration = Template.bind({});
Duration.args = {
  timestamp: timestampNowIso,
  format: DATETIME_FORMAT.duration,
  endTime: timestampFutureIso,
};

export const Legacy = Template.bind({});
Legacy.args = {
  timestamp: timestampNowIso,
  timezone: 'America/New_York',
  format: DATETIME_FORMAT.legacy,
};

export const Raw = Template.bind({});
Raw.args = {
  timestamp: timestampNowIso,
  format: DATETIME_FORMAT.raw,
};

export const Relative = Template.bind({});
Relative.args = {
  timestamp: timestampFutureIso,
  format: DATETIME_FORMAT.relative,
  timezone: 'America/New_York',
};

export const Time = Template.bind({});
Time.args = {
  timestamp: timestampNowIso,
  format: DATETIME_FORMAT.time,
};
