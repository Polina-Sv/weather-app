import { useState, useCallback, useEffect } from "react";
import { searchCity, getForecast } from "../api/weather";

export function useWeather() {
  const [location, setLocation] = useState(null); // {name, country, latitude, longitude}
  const [forecast, setForecast] = useState(null); // ответ Open-Meteo
  const [suggestions, setSuggestions] = useState([]);
  const [units, setUnits] = useState({ temp: "celsius", wind: "kmh" });

  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingForecast, setIsLoadingForecast] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (query) => {
    setError(null);
    if (!query || query.trim().length < 2) {
      setSuggestions([]);
      return;
    }
    setIsSearching(true);
    try {
      const results = await searchCity(query);
      setSuggestions(results);
    } catch (e) {
      setError(e.message);
      setSuggestions([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const selectLocation = useCallback((place) => {
    setLocation({
      name: place.name,
      country: place.country,
      admin1: place.admin1,
      latitude: place.latitude,
      longitude: place.longitude,
    });
    setSuggestions([]);
  }, []);

  const loadForecast = useCallback(
    async (loc, currentUnits) => {
      if (!loc) return;
      setIsLoadingForecast(true);
      setError(null);
      try {
        const data = await getForecast(
          loc.latitude,
          loc.longitude,
          currentUnits.temp,
          currentUnits.wind
        );
        setForecast(data);
      } catch (e) {
        setError(e.message);
        setForecast(null);
      } finally {
        setIsLoadingForecast(false);
      }
    },
    []
  );

  useEffect(() => {
    if (location) {
      loadForecast(location, units);
    }
  }, [location, units, loadForecast]);

  const toggleTempUnit = useCallback(() => {
    setUnits((u) => ({
      ...u,
      temp: u.temp === "celsius" ? "fahrenheit" : "celsius",
    }));
  }, []);

  const toggleWindUnit = useCallback(() => {
    setUnits((u) => ({
      ...u,
      wind: u.wind === "kmh" ? "mph" : "kmh",
    }));
  }, []);

  return {
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
  };
}
