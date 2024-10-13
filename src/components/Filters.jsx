import { useContext, useEffect, useState } from "react";

//context
import { OzoneContext } from "../context/OzoneContext";

//components
import FilterBlock from "./FilterBlock";

//icons
import { IoMdClose } from "react-icons/io";

const Filters = ({ displayedProducts }) => {
  const { allFilters, setAllFilters } = useContext(OzoneContext);

  const [displayedCateg, setdisplayedCateg] = useState([]);
  const [displayedFeatures, setdisplayedFeatures] = useState([]);

  const [filteredCateg, setFilteredCateg] = useState([]);
  const [filteredFeatures, setFilteredFeatures] = useState([]);

  const handleFilterList = (e) => {
    console.log(e.target.parentNode.id);
    setAllFilters((prev) =>
      prev.filter((item) => item !== e.target.parentNode.id)
    );
  };

  useEffect(() => {
    const categories = [
      ...new Set(displayedProducts.map((prod) => prod.category)),
    ];
    const features = [
      ...new Set(displayedProducts.map((prod) => prod.feature)),
    ];
    setdisplayedCateg(categories);
    setdisplayedFeatures(features);
  }, [displayedProducts]);

  useEffect(() => {
    setAllFilters([...filteredCateg, ...filteredFeatures]);
  }, [filteredCateg, filteredFeatures]);

  return (
    <div className="flex flex-col gap-4 w-60 mb-8">
      <div className="w-full border-b border-slate-700">
        <p className="text-lg archivo pb-2">FILTERS</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {allFilters.map((item, index) => (
            <li
              key={index}
              id={item}
              className="flex gap-1 items-center cursor-pointer py-1 px-2 rounded bg-slate-100"
              onClick={handleFilterList}
            >
              <IoMdClose />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {displayedCateg && (
        <FilterBlock
          itemList={displayedCateg}
          title={"Categories"}
          setFilteredItems={setFilteredCateg}
        />
      )}
      {displayedFeatures && (
        <FilterBlock
          itemList={displayedFeatures}
          title={"Features"}
          setFilteredItems={setFilteredFeatures}
        />
      )}
    </div>
  );
};

export default Filters;