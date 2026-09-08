// Коды погоды WMO (используются Open-Meteo): https://open-meteo.com/en/docs

const WEATHER_CODES = {
  0: { description: "Ясно", iconKey: "clear" },
  1: { description: "Преимущественно ясно", iconKey: "mostly-clear" },
  2: { description: "Переменная облачность", iconKey: "partly-cloudy" },
  3: { description: "Пасмурно", iconKey: "overcast" },
  45: { description: "Туман", iconKey: "fog" },
  48: { description: "Изморозь", iconKey: "fog" },
  51: { description: "Небольшая морось", iconKey: "drizzle" },
  53: { description: "Морось", iconKey: "drizzle" },
  55: { description: "Сильная морось", iconKey: "drizzle" },
  56: { description: "Ледяная морось", iconKey: "drizzle" },
  57: { description: "Сильная ледяная морось", iconKey: "drizzle" },
  61: { description: "Небольшой дождь", iconKey: "rain" },
  63: { description: "Дождь", iconKey: "rain" },
  65: { description: "Сильный дождь", iconKey: "rain" },
  66: { description: "Ледяной дождь", iconKey: "rain" },
  67: { description: "Сильный ледяной дождь", iconKey: "rain" },
  71: { description: "Небольшой снег", iconKey: "snow" },
  73: { description: "Снег", iconKey: "snow" },
  75: { description: "Сильный снег", iconKey: "snow" },
  77: { description: "Снежная крупа", iconKey: "snow" },
  80: { description: "Небольшие ливни", iconKey: "rain" },
  81: { description: "Ливни", iconKey: "rain" },
  82: { description: "Сильные ливни", iconKey: "rain" },
  85: { description: "Небольшие снежные ливни", iconKey: "snow" },
  86: { description: "Сильные снежные ливни", iconKey: "snow" },
  95: { description: "Гроза", iconKey: "storm" },
  96: { description: "Гроза с небольшим градом", iconKey: "storm" },
  99: { description: "Гроза с сильным градом", iconKey: "storm" },
};

export function getWeatherInfo(code) {
  return WEATHER_CODES[code] ?? { description: "Неизвестно", iconKey: "unknown" };
}