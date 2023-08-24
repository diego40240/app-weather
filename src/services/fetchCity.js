import { credentialOpenWeather, credentialGeoDB } from "./credentialAPI";

export async function fetchCity(city = null) {
  const { API_KEY, URL_CITY } = credentialOpenWeather;
  // const { options, GEO_URL } = credentialGeoDB;

  if (city !== null) {
    try {
      // const response = await fetch(
      //   `${GEO_URL}?namePrefix=${city}&limit=10`,
      //   options
      // );
      const response = await fetch(
        `${URL_CITY}?q=${city}&limit=5&appid=${API_KEY}`
      );
      const result = await response.json();
      const data = result;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
