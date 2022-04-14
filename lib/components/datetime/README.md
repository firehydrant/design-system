# DateTime

This is Design System's wrapper on the popular [Luxon](https://moment.github.io/luxon/api-docs/index.html#luxon) Library.

## How to use

The `DateTime` component calls the `getFormattedDateTime` helper function to construct a component composed of the formatted datetime string and the `time` element. Most use cases should only require the `DateTime` component, but the `getFormattedDateTime` helper function is also available. The following information apply to both the component and helper function.

To return the default formatted string, only an ISO timestamp string is required. Consult the [API Reference](#API-Reference) and [Format Options](#Format-Options) to create the desired formatted string.

### API Reference

| Prop           | Type             | Default    | Notes                                                                                              |
| -------------- | ---------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| `timestamp`    | string           |            | ISO formatted timestamp                                                                            |
| `format`       | string           | 'friendly' | [See Format Options](#Format-Options)                                                              |
| `timezone`     | string           | 'UTC'      | (optional) IANA based timezone string passed in from an account attribute or local storage setting |
| `endTime`      | string           |            | (optional) ISO formatted timestamp, required to calculate duration format                          |
| `customFormat` | string or Object |            | (optional) Custom string or Luxon preset object format based upon Luxon's API                      |
| `locale`       | string           | 'en-US'    | (optional) locale string passed in from an account attribute or local storage setting              |

### Format Options

| Name     | Example                     | Description                                                                                                                                                                                                                                                                                                      |
| -------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| raw      | `2017-09-30T16:57:00.000Z`  | Display the ISO timestamp directly as passed into the component                                                                                                                                                                                                                                                  |
| utc      | `2017-09-30 16:57 UTC`      | Fully qualified date and 24-hour time including timezone in a readable format. Disambiguates month and day by using ISO 8601 and W3C Datetime specifications. Converts to UTC, ignoring user’s localization preferences.                                                                                         |
| legacy   | `09/30/17 04:57 PM UTC`     | Fully qualified date time including timezone from legacy design system                                                                                                                                                                                                                                           |
| friendly | `Sep 30, 2017, 16:57 UTC`   | (Default) Local aware, human friendly medium length full date and time. US-based timezones would display in 12-hour time with meridiem. International timezones display in 24-hour time.                                                                                                                         |
| date     | `Sep 30, 2017`              | Human friendly medium length full date                                                                                                                                                                                                                                                                           |
| time     | `16:57 UTC`                 | Local aware time. US-based timezones would display in 12-hour time with meridiem. International timezones display in 24-hour time.                                                                                                                                                                               |
| relative | `in 4 years`                | Uses Luxon's [`#toRelativeCalendar`](https://moment.github.io/luxon/api-docs/index.html#datetimetorelativecalendar) to get human friendly relative time of timestamp from now                                                                                                                                    |
| duration | `4 years, 2 days, 12 hours` | Uses Luxon's [`#toHuman`](https://moment.github.io/luxon/api-docs/index.html#durationtohuman) to generate duration in years, months, weeks, days, hours, and minutes. `endTime` arg is required.                                                                                                                 |
| custom   | `Friday, 4/15/2022`         | Generates custom formatted string based on custom format passed to `customFormat` arg. Both [Luxon presets](https://github.com/moment/luxon/blob/master/docs/formatting.md#presets) (object) and [custom tokens](https://github.com/moment/luxon/blob/master/docs/formatting.md#presets) (string) are supported. |

### Returns

The `getFormattedDateTime` helper function only returns the formatted string value, but the `DateTime` component returns the `<time>` element with the following attributes

| Attribute | Value                                                              |
| --------- | ------------------------------------------------------------------ |
| datetime  | ISO timestamp in local time, or ISO duration for `duration`        |
| title     | `friendly` formatted time, or “Elapsed time” for `duration` format |

### Examples

```// Friendly
<DateTime
  format="friendly"
  timestamp="2022-04-14T19:36:33.792-04:00"
  timezone="America/Los_Angeles"
/>

<time datetime="2022-04-14T16:36:33.792-07:00" title="Apr 14, 2022, 4:36 PM PDT">
  Apr 14, 2022, 4:36 PM PDT
</time>
```

```
// Relative
<DateTime
  format="relative"
  timestamp="2025-07-11T07:38:37.607-04:00"
  timezone="America/New_York"
/>

<time datetime="2025-07-11T07:38:37.607-04:00" title="Jul 11, 2025, 7:38 AM EDT">
  in 3 years
</time>
```

```
// Duration
<DateTime
  endTime="2025-07-11T07:32:46.228-04:00"
  format="duration"
  timestamp="2022-04-14T19:32:46.228-04:00"
/>

<time datetime="PT102254400S" title="Elapsed Time">
	3 years, 2 months, 3 weeks, 5 days, 12 hours
</time>
```
