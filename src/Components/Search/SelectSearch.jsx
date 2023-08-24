import debounce from "just-debounce-it";
import { useCallback, useState } from "react";
import { CityList } from "../CityList/CityList";
import { Search } from "./Search";
import { fetchCity } from "../../services/fetchCity";

export default function SelectSearch() {
  const [isItemSearchVisible, setIsItemSearchVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [citylist, setCitylist] = useState(null);

  // document.addEventListener("click", () => {
  //   // handleClickOutSide
  //   setIsItemSearchVisible(false);
  // });

  const debounceSearch = useCallback(
    debounce(async (textSearch) => {
      const data = await fetchCity(textSearch);
      const newData = data;
      setCitylist(newData);
      setIsLoading(false);
    }, 500),
    []
  );

  function handleClick() {
    setIsItemSearchVisible(!isItemSearchVisible);
  }
  function handleChange(e) {
    const textSearch = e.target.value.trim();
    if (textSearch.length > 0) {
      setIsItemSearchVisible(true);
      setIsLoading(true);
      debounceSearch(textSearch);
    } else {
      setIsItemSearchVisible(false);
    }
  }
  return (
    <div name="selectSearch" id="select" className="my-5">
      <Search handleChange={handleChange} handleClick={handleClick} />
      {isItemSearchVisible && (
        <CityList
          citylist={citylist}
          isLoading={isLoading}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}
