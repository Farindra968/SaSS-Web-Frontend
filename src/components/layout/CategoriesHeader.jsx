import { useState } from "react";
import { IoIosArrowDown, IoIosBookmarks } from "react-icons/io";
import categoriesData from "../../data/categoriesData.json";
const CategoriesHeader = () => {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };
  return (
    <section className="w-full border-b border-primary-50 relative ">
      <div className="max-w-screen-xl mx-auto flex items-center gap-6  py-3 px-4 xl:px-0 ">
        <button
          onClick={toggleCategories}
          className={`font-Poppins ${
            showCategories ? "text-primary-500" : "text-text-700"
          } flex items-center gap-2`}
        >
          All Categories{" "}
          <IoIosArrowDown
            className={`${
              showCategories
                ? "duration-700 rotate-180"
                : "duration-700 rotate-0"
            }`}
          />
        </button>
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 font-Poppins text-text-700">
            <li>
              <a href="#" className="hover:text-primary-500">
                Fiction
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-500">
                Non-Fiction
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-500">
                Science
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-500">
                History
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-500">
                Biography
              </a>
            </li>
          </ul>
        </div>
      </div>
      {showCategories && (
        <div className="absolute z-50 left-3 xl:left-10 top-14 container  bg-primary-50 h-auto rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {categoriesData.map((category, index) => (
            <div key={index}>
              <p className="font-Poppins-SemiBold text-text-700 flex items-center gap-2">
                <IoIosBookmarks />
                {category.category}
              </p>
              <ul className="flex flex-col gap-2 mt-2 pl-6">
                {category.subcategories.map((subcategory, index) => (
                  <li key={index}>
                    <a
                      href={subcategory.path}
                      className="font-Poppins text-sm text-text-700 hover:text-primary-500"
                    >
                      {subcategory.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoriesHeader;
