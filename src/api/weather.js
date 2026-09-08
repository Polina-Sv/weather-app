const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

export async function searchCity(query) {
  if (!query || query.trim().length < 2) return [];

  const url = new URL(GEOCODING_URL);
  url.searchParams.set("name", query.trim());
  url.searchParams.set("count", "5");
  url.searchParams.set("language", "ru");
  url.searchParams.set("format", "json");

  const res = await fetch(url);
  if (!res.ok) throw new Error("Не удалось выполнить поиск города");

  const data = await res.json();
  return data.results ?? [];
}

export async function getForecast(latitude, longitude, tempUnit = "celsius", windUnit = "kmh") {
  const url = new URL(FORECAST_URL);
  url.searchParams.set("latitude", latitude);
  url.searchParams.set("longitude", longitude);
  url.searchParams.set("timezone", "auto");
  url.searchParams.set("temperature_unit", tempUnit);
  url.searchParams.set("wind_speed_unit", windUnit);

  url.searchParams.set(
    "current",
    [
      "temperature_2m",
      "apparent_temperature",
      "relative_humidity_2m",
      "wind_speed_10m",
      "weather_code",
      "precipitation",
      "is_day",
    ].join(",")
  );

  url.searchParams.set(
    "hourly",
    ["temperature_2m", "weather_code", "is_day"].join(",")
  );

  url.searchParams.set(
    "daily",
    [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_probability_max",
    ].join(",")
  );

  const res = await fetch(url);
  if (!res.ok) throw new Error("Не удалось загрузить данные о погоде");

  return res.json();
}
