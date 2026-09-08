export function IconSunny({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="22" fill="#FFC93C" />
      <g stroke="#FFC93C" strokeWidth="6" strokeLinecap="round">
        <line x1="50" y1="8" x2="50" y2="18" />
        <line x1="50" y1="82" x2="50" y2="92" />
        <line x1="8" y1="50" x2="18" y2="50" />
        <line x1="82" y1="50" x2="92" y2="50" />
        <line x1="21" y1="21" x2="28" y2="28" />
        <line x1="72" y1="72" x2="79" y2="79" />
        <line x1="79" y1="21" x2="72" y2="28" />
        <line x1="28" y1="72" x2="21" y2="79" />
      </g>
    </svg>
  );
}

export function IconPartlyCloudy({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="38" cy="42" r="18" fill="#FFC93C" />
      <path
        d="M30 68a16 16 0 0 1-2-31.8A22 22 0 0 1 70 42.5 15 15 0 0 1 68 68H30Z"
        fill="#E9EEF5"
      />
    </svg>
  );
}

export function IconOvercast({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M28 40a20 20 0 0 1 38.6-6.8A17 17 0 0 1 84 50.5 17 17 0 0 1 67 67H30a19 19 0 0 1-2-27Z"
        fill="#C8D2DE"
      />
      <path
        d="M22 66a14 14 0 0 1 2.4-27.8A18 18 0 0 1 58 40a13.5 13.5 0 0 1 3 26.6"
        fill="#E9EEF5"
        opacity="0.9"
      />
    </svg>
  );
}

export function IconFog({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M30 38a18 18 0 0 1 34.6-6A15 15 0 0 1 78 46.5"
        stroke="none"
        fill="#C8D2DE"
      />
      <circle cx="42" cy="38" r="16" fill="#C8D2DE" />
      <g stroke="#AEB9C6" strokeWidth="5" strokeLinecap="round">
        <line x1="18" y1="60" x2="82" y2="60" />
        <line x1="24" y1="72" x2="76" y2="72" />
        <line x1="30" y1="84" x2="70" y2="84" />
      </g>
    </svg>
  );
}

export function IconDrizzle({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M28 34a18 18 0 0 1 34.6-6A15 15 0 0 1 78 42.5 15 15 0 0 1 76 58H30a17 17 0 0 1-2-24Z"
        fill="#C8D2DE"
      />
      <g stroke="#6FA8DC" strokeWidth="4" strokeLinecap="round">
        <line x1="35" y1="68" x2="31" y2="78" />
        <line x1="50" y1="68" x2="46" y2="78" />
        <line x1="65" y1="68" x2="61" y2="78" />
      </g>
    </svg>
  );
}

export function IconRain({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M26 36a20 20 0 0 1 38-7A16 16 0 0 1 80 45 16 16 0 0 1 77 62H28a18 18 0 0 1-2-26Z"
        fill="#AEB9C6"
      />
      <g stroke="#4A8FE7" strokeWidth="5" strokeLinecap="round">
        <line x1="32" y1="70" x2="26" y2="86" />
        <line x1="50" y1="70" x2="44" y2="86" />
        <line x1="68" y1="70" x2="62" y2="86" />
      </g>
    </svg>
  );
}

export function IconSnow({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M26 36a20 20 0 0 1 38-7A16 16 0 0 1 80 45 16 16 0 0 1 77 62H28a18 18 0 0 1-2-26Z"
        fill="#C8D2DE"
      />
      <g stroke="#BFE1FF" strokeWidth="4" strokeLinecap="round">
        <line x1="34" y1="70" x2="34" y2="86" />
        <line x1="28" y1="78" x2="40" y2="78" />
        <line x1="50" y1="72" x2="50" y2="88" />
        <line x1="44" y1="80" x2="56" y2="80" />
        <line x1="66" y1="70" x2="66" y2="86" />
        <line x1="60" y1="78" x2="72" y2="78" />
      </g>
    </svg>
  );
}

export function IconStorm({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M26 34a20 20 0 0 1 38-7A16 16 0 0 1 80 43 16 16 0 0 1 77 60H28a18 18 0 0 1-2-26Z"
        fill="#8B95A5"
      />
      <polygon points="55,58 42,78 50,78 45,92 66,68 56,68" fill="#FFC93C" />
    </svg>
  );
}

export function IconUnknown({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="30" fill="none" stroke="#AEB9C6" strokeWidth="5" />
      <text x="50" y="62" textAnchor="middle" fontSize="34" fill="#AEB9C6">
        ?
      </text>
    </svg>
  );
}

const ICONS = {
  clear: IconSunny,
  "mostly-clear": IconSunny,
  "partly-cloudy": IconPartlyCloudy,
  overcast: IconOvercast,
  fog: IconFog,
  drizzle: IconDrizzle,
  rain: IconRain,
  snow: IconSnow,
  storm: IconStorm,
  unknown: IconUnknown,
};

export default function WeatherIcon({ type, className }) {
  const Icon = ICONS[type] ?? IconUnknown;
  return <Icon className={className} />;
}
