import { CalendarDate, DateDuration, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "@internationalized/date"
import { isDateInvalid } from "./assertion"
import { alignEnd, alignStart, constrainStart, constrainValue } from "./constrain"
import { getEndDate, getUnitDuration } from "./duration"

function getAdjustedDateFn(
  visibleDuration: DateDuration,
  locale: string,
  minValue: CalendarDate,
  maxValue: CalendarDate,
) {
  return function getDate(options: { startDate: CalendarDate; focusedDate: CalendarDate }) {
    const { startDate, focusedDate } = options
    const endDate = getEndDate(startDate, visibleDuration)

    // If the focused date was moved to an invalid value, it can't be focused, so constrain it.
    if (isDateInvalid(focusedDate, minValue, maxValue)) {
      return {
        startDate,
        focusedDate: constrainValue(focusedDate, minValue, maxValue),
        endDate,
      }
    }

    if (focusedDate.compare(startDate) < 0) {
      return {
        startDate: alignEnd(focusedDate, visibleDuration, locale, minValue, maxValue),
        endDate,
        focusedDate: constrainValue(focusedDate, minValue, maxValue),
      }
    }

    if (focusedDate.compare(endDate) > 0) {
      return {
        startDate: alignStart(focusedDate, visibleDuration, locale, minValue, maxValue),
        endDate,
        focusedDate: constrainValue(focusedDate, minValue, maxValue),
      }
    }

    return {
      startDate,
      endDate,
      focusedDate: constrainValue(focusedDate, minValue, maxValue),
    }
  }
}

/* -----------------------------------------------------------------------------
 *  Get next and previous page (for date range)
 * -----------------------------------------------------------------------------*/

export function getNextPage(
  focusedDate: CalendarDate,
  startDate: CalendarDate,
  visibleDuration: DateDuration,
  locale: string,
  minValue: CalendarDate,
  maxValue: CalendarDate,
) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue)
  const start = startDate.add(visibleDuration)

  return adjust({
    focusedDate: focusedDate.add(visibleDuration),
    startDate: alignStart(
      constrainStart(focusedDate, start, visibleDuration, locale, minValue, maxValue),
      visibleDuration,
      locale,
    ),
  })
}

export function getPreviousPage(
  focusedDate: CalendarDate,
  startDate: CalendarDate,
  visibleDuration: DateDuration,
  locale: string,
  minValue: CalendarDate,
  maxValue: CalendarDate,
) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue)
  let start = startDate.subtract(visibleDuration)

  return adjust({
    focusedDate: focusedDate.subtract(visibleDuration),
    startDate: alignStart(
      constrainStart(focusedDate, start, visibleDuration, locale, minValue, maxValue),
      visibleDuration,
      locale,
    ),
  })
}

/* -----------------------------------------------------------------------------
 * Get the next and previous row (for date range)
 * -----------------------------------------------------------------------------*/

export function getNextRow(
  focusedDate: CalendarDate,
  startDate: CalendarDate,
  visibleDuration: DateDuration,
  locale: string,
  minValue: CalendarDate,
  maxValue: CalendarDate,
) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue)

  if (visibleDuration.days) {
    return getNextPage(focusedDate, startDate, visibleDuration, locale, minValue, maxValue)
  }

  if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) {
    return adjust({
      focusedDate: focusedDate.add({ weeks: 1 }),
      startDate,
    })
  }
}

export function getPreviousRow(
  focusedDate: CalendarDate,
  startDate: CalendarDate,
  visibleDuration: DateDuration,
  locale: string,
  minValue: CalendarDate,
  maxValue: CalendarDate,
) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue)

  if (visibleDuration.days) {
    return getPreviousPage(focusedDate, startDate, visibleDuration, locale, minValue, maxValue)
  }

  if (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) {
    return adjust({
      focusedDate: focusedDate.subtract({ weeks: 1 }),
      startDate,
    })
  }
}

/* -----------------------------------------------------------------------------
 * Get start and end date for a date section
 * -----------------------------------------------------------------------------*/

export function getSectionStart(
  focusedDate: CalendarDate,
  startDate: CalendarDate,
  visibleDuration: DateDuration,
  locale: string,
  minValue: CalendarDate,
  maxValue: CalendarDate,
) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue)

  if (visibleDuration.days) {
    return adjust({
      focusedDate: startDate,
      startDate,
    })
  }

  if (visibleDuration.weeks) {
    return adjust({
      focusedDate: startOfWeek(focusedDate, locale),
      startDate,
    })
  }

  if (visibleDuration.months || visibleDuration.years) {
    return adjust({
      focusedDate: startOfMonth(focusedDate),
      startDate,
    })
  }
}

export function getSectionEnd(
  focusedDate: CalendarDate,
  startDate: CalendarDate,
  visibleDuration: DateDuration,
  locale: string,
  minValue: CalendarDate,
  maxValue: CalendarDate,
) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue)
  const endDate = getEndDate(startDate, visibleDuration)

  if (visibleDuration.days) {
    return adjust({
      focusedDate: endDate,
      startDate,
    })
  }

  if (visibleDuration.weeks) {
    return adjust({
      focusedDate: endOfWeek(focusedDate, locale),
      startDate,
    })
  }

  if (visibleDuration.months || visibleDuration.years) {
    return adjust({
      focusedDate: endOfMonth(focusedDate),
      startDate,
    })
  }
}

export function getNextSection(
  focusedDate: CalendarDate,
  startDate: CalendarDate,
  larger: boolean,
  visibleDuration: DateDuration,
  locale: string,
  minValue: CalendarDate,
  maxValue: CalendarDate,
) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue)

  if (!larger && !visibleDuration.days) {
    return adjust({
      focusedDate: focusedDate.add(getUnitDuration(visibleDuration)),
      startDate,
    })
  }

  if (visibleDuration.days) {
    return getNextPage(focusedDate, startDate, visibleDuration, locale, minValue, maxValue)
  }

  if (visibleDuration.weeks) {
    return adjust({
      focusedDate: focusedDate.add({ months: 1 }),
      startDate,
    })
  }

  if (visibleDuration.months || visibleDuration.years) {
    return adjust({
      focusedDate: focusedDate.add({ years: 1 }),
      startDate,
    })
  }
}

export function getPreviousSection(
  focusedDate: CalendarDate,
  startDate: CalendarDate,
  larger: boolean,
  visibleDuration: DateDuration,
  locale: string,
  minValue: CalendarDate,
  maxValue: CalendarDate,
) {
  const adjust = getAdjustedDateFn(visibleDuration, locale, minValue, maxValue)

  if (!larger && !visibleDuration.days) {
    return adjust({
      focusedDate: focusedDate.subtract(getUnitDuration(visibleDuration)),
      startDate,
    })
  }

  if (visibleDuration.days) {
    return getPreviousPage(focusedDate, startDate, visibleDuration, locale, minValue, maxValue)
  }

  if (visibleDuration.weeks) {
    return adjust({
      focusedDate: focusedDate.subtract({ months: 1 }),
      startDate,
    })
  }

  if (visibleDuration.months || visibleDuration.years) {
    return adjust({
      focusedDate: focusedDate.subtract({ years: 1 }),
      startDate,
    })
  }
}