const language = "en-us";
let moneyFormatter = new Intl.NumberFormat('language', {
  style: 'currency',
  currency: 'USD',
});

export function money(value: number | string) {
  if (typeof value === "number") {
    return moneyFormatter.format(value);
  } else {
    return moneyFormatter.format(Number(value));
  }
}

export function shortDate(value: Date | string | null) {
  try {
    if (value) {
      if (value instanceof Date) {
        return value.toLocaleDateString(language);
      } else {
        return new Date(Date.parse(value)).toLocaleDateString(language);
      }
    }
  } catch {
    console.error(`Could not parse the date: ${value}`);
  }

  return value;
}