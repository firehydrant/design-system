import React from 'react';
import PropTypes from 'prop-types';
import { DATETIME_FORMAT } from './constants';
import { getFormattedDateTime } from './helpers';

const DateTime = ({
  timestamp,
  endTime,
  format,
  locale,
  timezone,
  customFormat,
}) => (
  <time dateTime={timestamp}>
    {getFormattedDateTime(timestamp, format, {
      endTime: endTime,
      customFormat: customFormat,
      timezone: timezone,
      locale: locale,
    })}
  </time>
);

DateTime.defaultProps = {
  endTime: '',
  format: 'friendly',
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

export default DateTime;
