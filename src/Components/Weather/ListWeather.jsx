export function ListWeather({ list, dia }) {
  return (
    <details className="mb-5 rounded-lg border border-sky-600 min-w-full">
      <summary className="list-none flex flex-col flex-wrap items-center p-6  bg-sky-600 text-white font-semibold cursor-pointer rounded-lg">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl">{dia}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`}
            alt={list.weather[0].main}
            className="h-20"
          />
          <h2>
            {list.weather[0].main} - {list.weather[0].description}
          </h2>
        </div>

        <h2 className="text-3xl">{list.main.temp + " ºC"}</h2>
      </summary>
      <ul className="p-4 flex flex-wrap flex-col gap-4 md:flex-row md:justify-center md:[&>li]:w-1/3 [&>li>span]:font-semibold">
        <li>
          <span>Velocidad del aire: </span>
          {list.wind.speed + " m/s"}{" "}
        </li>
        <li>
          <span>Direccíon del viento: </span>
          {list.wind.deg + " deg"}{" "}
        </li>
        <li>
          <span>Nublado: </span>
          {list.clouds.all + " %"}{" "}
        </li>
        <li>
          <span>Humedad: </span>
          {list.main.humidity + " %"}{" "}
        </li>
        <li>
          <span>Presión atmosférica a nivel del mar: </span>
          {list.main.pressure + " hPa"}
        </li>
        <li>
          <span>Presión atmosférica a nivel del suelo: </span>
          {list.main.grnd_level + " hPa"}
        </li>
      </ul>
    </details>
  );
}
