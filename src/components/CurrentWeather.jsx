import { getWeatherInfo } from "../utils/weatherCodes";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather({ location, forecast, units }) {
  if (!location || !forecast) return null;

  const { current } = forecast;
  const { description, iconKey } = getWeatherInfo(current.weather_code);
  const tempSymbol = units.temp === "celsius" ? "°C" : "°F";
  const windSymbol = units.wind === "kmh" ? "км/ч" : "миль/ч";

  return (
    <section className="current-weather">
      <h2 className="current-weather__location">
        {location.name}
        {location.admin1 ? `, ${location.admin1}` : ""}, {location.country}
      </h2>

      <div className="current-weather__main">
        <WeatherIcon type={iconKey} className="current-weather__icon" />
        <p className="current-weather__temp">
          {Math.round(current.temperature_2m)}
          {tempSymbol}
        </p>
      </div>

      <p className="current-weather__description">{description}</p>

      <p className="current-weather__feels-like">
        Ощущается как {Math.round(current.apparent_temperature)}
        {tempSymbol}
      </p>

      <dl className="current-weather__details">
        <div>
          <dt>Влажность</dt>
          <dd>{current.relative_humidity_2m}%</dd>
        </div>
        <div>
          <dt>Ветер</dt>
          <dd>
            {Math.round(current.wind_speed_10m)} {windSymbol}
          </dd>
        </div>
        <div>
          <dt>Осадки</dt>
          <dd>{current.precipitation} мм</dd>
        </div>
      </dl>
    </section>
  );
}
