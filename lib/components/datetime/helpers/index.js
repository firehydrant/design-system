import { DateTime } from 'luxon';
import { isEmpty } from 'lodash';
import { DATETIME_FORMAT } from '../constants';

const increments = ['minutes', 'hours', 'days', 'weeks', 'months', 'years'];

const getRelativeFormat = (timestamp, timezone, locale) =>
  DateTime.fromISO(timestamp)
    .setZone(timezone)
    .setLocale(locale)
    .toRelativeCalendar();

const getDurationFormat = (start, end, timezone, locale) => {
  const endDateTime = DateTime.fromISO(end).setZone(timezone);
  const startDateTime = DateTime.fromISO(start).setZone(timezone);

  const diff = endDateTime.diff(startDateTime, increments);
  let existingUnits = [];

  for (let i = increments.length - 1; i >= 0; i--) {
    const unit = increments[i];
    const durationValue = Math.round(Math.abs(diff[unit]));

    if (durationValue !== 0) {
      existingUnits.push(increments[i]);
    }
  }
  return endDateTime
    .setLocale(locale)
    .diff(startDateTime, existingUnits)
    .toHuman();
};

/**
 * Uses Luxon's DateTime to convert ISO datetime to formatted string
 *
 * @param {string} timestamp - raw ISO string
 * @param {string} [format=friendly] - format type
 * @param {Object} [opts] - options to affect the format
 * @param {string} [opts.timezone=UTC] - timezone
 * @param {(string|Object)} [opts.customFormat] - custom string format or Luxon preset object
 * @param {string} [opts.endTime] - used to calculate duration from timestamp
 * @param {string} [opts.locale] - locale (currently not supported)
 *
 * @returns formatted datetime string
 */
export const getFormattedDateTime = (
  timestamp,
  format = 'friendly',
  opts = {},
  locale = 'en-US',
) => {
  const { timezone = 'UTC', customFormat = '', endTime = '' } = opts;
  const dateTime = DateTime.fromISO(timestamp);
  let targetFormat = null;
  let formattedDateTime = null;

  switch (format) {
    case DATETIME_FORMAT.utc:
      formattedDateTime = dateTime.toUTC().toFormat('yyyy-MM-dd HH:mm z');
      break;
    case DATETIME_FORMAT.custom:
      if (customFormat.length === 0 || isEmpty(customFormat)) {
        return 'Custom format is empty!';
      }
      if (typeof customFormat === 'object') {
        formattedDateTime = dateTime
          .setZone(timezone)
          .toLocaleString(customFormat, { locale: locale });
      } else {
        targetFormat = customFormat;
      }
      break;
    case DATETIME_FORMAT.date:
      targetFormat = 'DD';
      break;
    case DATETIME_FORMAT.duration:
      if (endTime.length === 0) {
        return 'Endtime is empty!';
      }
      formattedDateTime = getDurationFormat(
        timestamp,
        endTime,
        timezone,
        locale,
      );
      break;
    case DATETIME_FORMAT.legacy:
      targetFormat = 'LL/dd/yy t ZZZZ';
      break;
    case DATETIME_FORMAT.raw:
      formattedDateTime = timestamp;
      break;
    case DATETIME_FORMAT.relative:
      formattedDateTime = getRelativeFormat(timestamp, timezone, locale);
      break;
    case DATETIME_FORMAT.time:
      targetFormat = 't ZZZZ';
      break;
    default:
    case DATETIME_FORMAT.friendly:
      targetFormat = 'DD, t ZZZZ';
      break;
  }

  return targetFormat
    ? dateTime.setZone(timezone).setLocale(locale).toFormat(targetFormat)
    : formattedDateTime;
};
