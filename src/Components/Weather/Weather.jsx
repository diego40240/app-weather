import { useLoaderData } from "react-router-dom";
import { SliderWeather } from "./SliderWeather";
import { ListWeather } from "./ListWeather";
import { useState } from "react";

const WEEK_DAYS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

// Numero del dia actual Domingo - Sabado : 0 - 6 (Empieza de 0)
const dayInAWeek = new Date().getDay();
const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
  WEEK_DAYS.slice(0, dayInAWeek)
);

export function Weather() {
  const { data, name, country } = useLoaderData();
  const [onList, setOnList] = useState(false);
  const opacity = onList
    ? "border-cyan-400 fill-cyan-400"
    : " border-cyan-600 fill-cyan-600";
  function handleClickListar() {
    setOnList(!onList);
  }
  return (
    <section>
      <h2 className="text-center font-bold text-3xl">
        {name}, {country}
      </h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        className={
          "text-5xl border-2 p-2 border-cyan-600 mb-2 cursor-pointer " + opacity
        }
        onClick={handleClickListar}
      >
        <path d="M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z" />
      </svg>
      {onList ? (
        <article>
          {data.map((list, index) => {
            return (
              <ListWeather key={index} list={list} dia={forecastDays[index]} />
            );
          })}
        </article>
      ) : (
        <article className="relative overflow-hidden ">
          <SliderWeather data={data} forecastDays={forecastDays} />
        </article>
      )}
    </section>
  );
}
