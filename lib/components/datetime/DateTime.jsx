import React from 'react';
import PropTypes from 'prop-types';
import { DateTime as LuxonDateTime } from 'luxon';
import { DATETIME_FORMAT } from './constants';
import { getFormattedDateTime } from './helpers';

export function DateTime({
  timestamp,
  endTime,
  format,
  locale,
  timezone,
  customFormat,
}) {
  let dateTime, title;

  if (format === DATETIME_FORMAT.duration) {
    // tsuenaga: may want to change to 'local' instead of timezone
    const endDateTime = LuxonDateTime.fromISO(endTime).setZone(timezone);
    const startDateTime = LuxonDateTime.fromISO(timestamp).setZone(timezone);
    dateTime = endDateTime.diff(startDateTime).toISO();

    title = 'Elapsed Time';
  } else {
    dateTime = LuxonDateTime.fromISO(timestamp).setZone(timezone).toISO(); // tsuenaga: may want to change to 'local' instead of timezone

    title = getFormattedDateTime(timestamp, DATETIME_FORMAT.friendly, {
      timezone: timezone,
      locale: locale,
    });
  }

  return (
    <time dateTime={dateTime} title={title}>
      {getFormattedDateTime(timestamp, format, {
        endTime: endTime,
        customFormat: customFormat,
        timezone: timezone,
        locale: locale,
      })}
    </time>
  );
}

DateTime.defaultProps = {
  endTime: '',
  format: DATETIME_FORMAT.friendly,
  locale: 'en-US',
  timezone: 'UTC',
  customFormat: '',
};

DateTime.propTypes = {
  timestamp: PropTypes.string.isRequired,
  endTime: PropTypes.string,
  format: PropTypes.oneOf(Object.keys(DATETIME_FORMAT)),
  locale: PropTypes.string,
  timezone: PropTypes.string,
  customFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
