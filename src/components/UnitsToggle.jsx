export default function UnitsToggle({ units, onToggleTemp, onToggleWind }) {
  return (
    <div className="units-toggle">
      <button type="button" onClick={onToggleTemp}>
        {units.temp === "celsius" ? "°C" : "°F"}
      </button>
      <button type="button" onClick={onToggleWind}>
        {units.wind === "kmh" ? "км/ч" : "миль/ч"}
      </button>
    </div>
  );
}
