import { DateTime, Settings } from 'luxon';
import { getFormattedDateTime } from './index';
import { DATETIME_FORMAT } from '../constants';

describe('getFormattedDateTime', () => {
  const iso = '2022-12-25T12:30+0000';

  test('utc format', () => {
    expect(getFormattedDateTime(iso, DATETIME_FORMAT.utc)).toBe(
      '2022-12-25 12:30 UTC',
    );
  });

  describe('custom format', () => {
    test('custom string', () => {
      expect(
        getFormattedDateTime(iso, DATETIME_FORMAT.custom, {
          timezone: 'Europe/Paris',
          customFormat: 'd/M/y HH:mm a',
        }),
      ).toBe('25/12/2022 13:30 PM');
    });

    test('returns error text when customFormat string is missing', () => {
      expect(
        getFormattedDateTime(iso, DATETIME_FORMAT.custom, {
          timezone: 'Europe/Paris',
        }),
      ).toBe('Custom format is empty!');
    });

    test.skip('custom luxon preset', () => {
      const newFormat = { ...DateTime.DATE_SHORT, weekday: 'long' };
      expect(
        getFormattedDateTime(iso, DATETIME_FORMAT.custom, {
          timezone: 'Europe/Paris',
          locale: 'fr',
          customFormat: newFormat,
        }),
      ).toBe('dimanche 25/12/2022');
    });

    test('returns error text when customFormat object is empty', () => {
      expect(
        getFormattedDateTime(iso, DATETIME_FORMAT.custom, {
          timezone: 'Europe/Paris',
          customFormat: {},
        }),
      ).toBe('Custom format is empty!');
    });
  });

  test('date format', () => {
    expect(
      getFormattedDateTime(iso, DATETIME_FORMAT.date, {
        timezone: 'Asia/Tokyo',
      }),
    ).toBe('Dec 25, 2022');
  });

  describe('duration format', () => {
    const isoFuture = '2025-05-18T12:03:00+0000';
    const isoPast = '2012-10-02T02:57:00+0000';
    test('formats future end date', () => {
      expect(
        getFormattedDateTime(iso, DATETIME_FORMAT.duration, {
          timezone: 'utc',
          endTime: isoFuture,
        }),
      ).toBe('2 years, 4 months, 3 weeks, 1 day, 23 hours, 33 minutes');
    });

    test('formats past end date', () => {
      expect(
        getFormattedDateTime(iso, DATETIME_FORMAT.duration, {
          timezone: 'Europe/Paris',
          endTime: isoPast,
        }),
      ).toBe('-10 years, -2 months, -3 weeks, -2 days, -8 hours, -33 minutes');
    });

    test.skip('formats future end date in Japanese locale', () => {
      expect(
        getFormattedDateTime(iso, DATETIME_FORMAT.duration, {
          timezone: 'Asia/Tokyo',
          locale: 'ja',
          endTime: isoFuture,
        }),
      ).toBe('2 年、4 か月、3 週間、1 日、23 時間、33 分');
    });
  });

  test('legacy format', () => {
    expect(getFormattedDateTime(iso, DATETIME_FORMAT.legacy)).toBe(
      '12/25/22 12:30 PM UTC',
    );
  });

  test('raw format', () => {
    expect(getFormattedDateTime(iso, DATETIME_FORMAT.raw)).toBe(iso);
  });

  describe('relative format', () => {
    test('formats relative tomorrow date', () => {
      const fakeNow = DateTime.fromISO('2022-12-24T12:30+0000');
      Settings.now = () => fakeNow.toMillis();
      expect(getFormattedDateTime(iso, DATETIME_FORMAT.relative)).toBe(
        'tomorrow',
      );
    });

    test('formats relative yesterday date', () => {
      const fakeNow = DateTime.fromISO('2022-12-26T12:30+0000');
      Settings.now = () => fakeNow.toMillis();
      expect(getFormattedDateTime(iso, DATETIME_FORMAT.relative)).toBe(
        'yesterday',
      );
    });

    test('formats relative with a near future date', () => {
      const fakeNow = DateTime.fromISO('2022-08-12T11:30+0000').setZone('utc');
      Settings.now = () => fakeNow.toMillis();
      expect(getFormattedDateTime(iso, DATETIME_FORMAT.relative)).toBe(
        'in 4 months',
      );
    });

    test('formats relative with a far future date', () => {
      const fakeNow = DateTime.fromISO('2000-08-12T11:30+0000').setZone('utc');
      Settings.now = () => fakeNow.toMillis();
      expect(getFormattedDateTime(iso, DATETIME_FORMAT.relative)).toBe(
        'in 22 years',
      );
    });

    test('formats relative with a close past date', () => {
      const fakeNow = DateTime.fromISO('2022-12-31T11:30+0000').setZone('utc');
      Settings.now = () => fakeNow.toMillis();
      expect(getFormattedDateTime(iso, DATETIME_FORMAT.relative)).toBe(
        '6 days ago',
      );
    });

    test('formats relative with a distant past date', () => {
      const fakeNow = DateTime.fromISO('2023-08-22T11:30+0000').setZone('utc');
      Settings.now = () => fakeNow.toMillis();
      expect(getFormattedDateTime(iso, DATETIME_FORMAT.relative)).toBe(
        'last year',
      );
    });

    test.skip('formats relative with a near future date in french locale', () => {
      const fakeNow = DateTime.fromISO('2022-08-12T11:30+0000').setZone('utc');
      Settings.now = () => fakeNow.toMillis();
      expect(
        getFormattedDateTime(iso, DATETIME_FORMAT.relative, { locale: 'fr' }),
      ).toBe('dans 4 mois');
    });
  });

  describe('time format', () => {
    test('utc', () => {
      expect(getFormattedDateTime(iso, DATETIME_FORMAT.time)).toBe(
        '12:30 PM UTC',
      );
    });

    test('custom timezone', () => {
      expect(
        getFormattedDateTime(iso, DATETIME_FORMAT.time, {
          timezone: 'Europe/Paris',
        }),
      ).toBe('1:30 PM GMT+1');
    });
  });

  describe('friendly format', () => {
    test('default timezone', () => {
      expect(getFormattedDateTime(iso, DATETIME_FORMAT.friendly)).toBe(
        'Dec 25, 2022, 12:30 PM UTC',
      );
    });

    test('custom US timezone', () => {
      expect(
        getFormattedDateTime(iso, DATETIME_FORMAT.friendly, {
          timezone: 'America/New_York',
        }),
      ).toBe('Dec 25, 2022, 7:30 AM EST');
    });

    test('custom Asia timezone', () => {
      expect(
        getFormattedDateTime(iso, DATETIME_FORMAT.friendly, {
          timezone: 'Asia/Seoul',
        }),
      ).toBe('Dec 25, 2022, 9:30 PM GMT+9');
    });
  });
});
