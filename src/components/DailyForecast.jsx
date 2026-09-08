import { getWeatherInfo } from "../utils/weatherCodes";
import WeatherIcon from "./WeatherIcon";

const WEEKDAY_FORMAT = new Intl.DateTimeFormat("ru-RU", { weekday: "short" });

export default function DailyForecast({ forecast, units }) {
  if (!forecast) return null;

  const { daily } = forecast;
  const tempSymbol = units.temp === "celsius" ? "°C" : "°F";

  return (
    <section className="daily-forecast">
      <h3>Прогноз на 7 дней</h3>
      <ul>
        {daily.time.map((date, idx) => {
          const { description, iconKey } = getWeatherInfo(daily.weather_code[idx]);
          const weekday = WEEKDAY_FORMAT.format(new Date(date));

          return (
            <li key={date}>
              <span className="daily-forecast__day">{weekday}</span>
              <WeatherIcon
                type={iconKey}
                className="daily-forecast__icon"
              />
              <span className="daily-forecast__max" title={description}>
                {Math.round(daily.temperature_2m_max[idx])}
                {tempSymbol}
              </span>
              <span className="daily-forecast__min">
                {Math.round(daily.temperature_2m_min[idx])}
                {tempSymbol}
              </span>
              <span className="daily-forecast__precip">
                {daily.precipitation_probability_max[idx]}%
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
