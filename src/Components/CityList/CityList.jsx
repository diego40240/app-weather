import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { NotFound } from "../Loading/NotFound";

export function CityList({ isLoading, citylist, handleClick }) {
  return isLoading ? (
    <Loading
      containerStyle="text-gray-800 text-center border-2  border-t-0 border-sky-200 rounded-b-md p-2 flex items-center justify-center gap-1"
      spinnerStyle="animate-spin fill-sky-600"
    />
  ) : citylist.length === 0 ? (
    <NotFound
      containerStyle="text-gray-400 text-center border-2  border-t-0 border-sky-200 rounded-b-md p-2 flex items-center justify-center gap-2"
      alertStyle="w-6 fill-red-500"
    />
  ) : (
    <ul className="text-gray-800 border-2 border-sky-200 rounded-md hover:[&>li]:bg-sky-100">
      {citylist !== null &&
        citylist.map((data, index) => {
          return (
            <li key={index}>
              <Link
                to={`${btoa(data.lat)}/${btoa(data.lon)}/${data.name}/${
                  data.country
                }`}
                className="inline-block p-2 w-full"
                onClick={handleClick}
              >
                {data.name}, {data.country}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
