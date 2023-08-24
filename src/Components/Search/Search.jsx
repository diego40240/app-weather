import { AngleDown, Dots } from "./IconsSearch";

export function Search({ handleChange, handleClick }) {
  return (
    <div className="flex h-9 text-gray-800" onClick={handleClick}>
      <input
        type="text"
        className="w-full border border-sky-300 focus:border-sky-600 focus:border-2 focus:border-r-0 px-2 py-1 outline-none peer"
        placeholder="Escriba una ciudad"
        onChange={handleChange}
      />

      <Dots
        containerStyle="hidden border-y-sky-600 border-l-0 border-r-transparent border-r-0 border-2 w-fit peer-focus:flex justify-center items-center"
        dotsStyle="px-2 py-1 w-7 fill-sky-600 animate-pulse"
      />

      <AngleDown downStyle="border border-l-0 w-8 border-sky-300 fill-sky-300 px-2 py-1 peer-focus:fill-sky-600 peer-focus:border-sky-600 peer-focus:border-2" />
    </div>
  );
}
