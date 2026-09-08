import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import UnitsToggle from "./components/UnitsToggle";
import "./App.css";

export default function App() {
  const {
    location,
    forecast,
    suggestions,
    units,
    isSearching,
    isLoadingForecast,
    error,
    search,
    selectLocation,
    toggleTempUnit,
    toggleWindUnit,
  } = useWeather();

  return (
    <div className="app">
      <header className="app__header">
        <h1>Прогноз погоды</h1>
        <UnitsToggle
          units={units}
          onToggleTemp={toggleTempUnit}
          onToggleWind={toggleWindUnit}
        />
      </header>

      <SearchBar
        onSearch={search}
        suggestions={suggestions}
        onSelect={selectLocation}
        isSearching={isSearching}
      />

      {error && <p className="app__error">{error}</p>}

      {isLoadingForecast && <p className="app__loading">Загрузка данных...</p>}

      {!isLoadingForecast && location && forecast && (
        <main className="app__content">
          <CurrentWeather location={location} forecast={forecast} units={units} />
          <HourlyForecast forecast={forecast} units={units} />
          <DailyForecast forecast={forecast} units={units} />
        </main>
      )}

      {!location && !isLoadingForecast && (
        <p className="app__hint">Введите название города, чтобы увидеть прогноз</p>
      )}
    </div>
  );
}
