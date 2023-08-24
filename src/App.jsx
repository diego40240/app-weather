import { Outlet } from "react-router-dom";
import SelectSearch from "./Components/Search/SelectSearch";

function App() {
  return (
    <main className="w-[80%] m-auto">
      <SelectSearch />
      <Outlet />
    </main>
  );
}

export default App;
