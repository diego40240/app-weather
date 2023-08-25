import { useState } from "react";
import { fetchForecast } from "../services/fetchForecast";

export function useWeather(lat, lon) {
  const [listWeather, setListWeather] = useState([]);

  async function weather() {
    const data = await fetchForecast(lat, lon);
    const resultado = data;
    setListWeather(resultado);
  }
  return { listWeather, weather };
}
