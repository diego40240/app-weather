import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Weather } from "./Components/Weather/Weather.jsx";
import { fetchForecast } from "./services/fetchForecast.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route
          path=":lat/:lon"
          element={<Weather />}
          loader={async ({ params }) => {
            const lat = params.lat;
            const lon = params.lon;
            const waitPrediction = await fetchForecast(lat, lon);
            const dataPrediction = waitPrediction;
            return dataPrediction;
          }}
        />
      </Route>
      <Route path="/*" element={<App />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
