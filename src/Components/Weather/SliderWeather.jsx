import { useState } from "react";
import { ListWeather } from "./ListWeather";

export function SliderWeather({ data, forecastDays }) {
  const [positionTranslate, setPositionTranslate] = useState(0);

  function previus() {
    const newPositionTranslate =
      positionTranslate === 0 ? data.length - 1 : positionTranslate - 1;
    setPositionTranslate(newPositionTranslate);
  }

  function next() {
    const newPositionTranslate =
      positionTranslate === data.length - 1 ? 0 : positionTranslate + 1;
    setPositionTranslate(newPositionTranslate);
  }
  return (
    <>
      <div className="flex absolute gap-[75%] md:gap-[90%] justify-center items-center w-full h-full">
        <button
          onClick={previus}
          className="z-10 p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white text-3xl font-bold"
        >
          {"<"}
        </button>
        <button
          onClick={next}
          className="z-10 p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white text-3xl font-bold"
        >
          {">"}
        </button>
      </div>

      <div
        className="flex w-full transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${positionTranslate * 100}%)` }}
      >
        {data.map((list, index) => {
          return (
            <ListWeather key={index} list={list} dia={forecastDays[index]} />
          );
        })}
        ;
      </div>
    </>
  );
}
