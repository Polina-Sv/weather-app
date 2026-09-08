import { getWeatherInfo } from "../utils/weatherCodes";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecast({ forecast, units }) {
  if (!forecast) return null;

  const { hourly } = forecast;
  const tempSymbol = units.temp === "celsius" ? "°C" : "°F";

  const nowIso = forecast.current.time;
  const startIndex = hourly.time.findIndex((t) => t >= nowIso);
  const from = startIndex === -1 ? 0 : startIndex;
  const slice = { from, to: from + 24 };

  const hours = hourly.time.slice(slice.from, slice.to);

  return (
    <section className="hourly-forecast">
      <h3>Прогноз на 24 часа</h3>
      <ul>
        {hours.map((time, i) => {
          const idx = slice.from + i;
          const { description, iconKey } = getWeatherInfo(hourly.weather_code[idx]);
          const hourLabel = new Date(time).toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <li key={time}>
              <span className="hourly-forecast__time">{hourLabel}</span>
              <WeatherIcon
                type={iconKey}
                className="hourly-forecast__icon"
              />
              <span className="hourly-forecast__temp" title={description}>
                {Math.round(hourly.temperature_2m[idx])}
                {tempSymbol}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
