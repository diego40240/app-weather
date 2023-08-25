import { credentialOpenWeather } from "./credentialAPI";

export async function fetchForecast(lat = null, lon = null) {
  const { API_KEY, URL_FORECAST } = credentialOpenWeather;

  if (lat !== null && lon !== null) {
    const response = await fetch(
      `${URL_FORECAST}?lat=${lat}&lon=${lon}&cnt=7&units=metric&lang=sp&appid=${API_KEY}`
    );

    const result = await response.json();
    const data = result.list;
    return data;
  }
}
