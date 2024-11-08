"use client";
import { useEffect, useState } from "react";
import {
  BiBrush,
  BiLogoSteam,
  BiPurchaseTag,
  BiSolidBook,
  BiSolidContact,
  BiSolidDrink,
} from "react-icons/bi";
export const AddCategory = () => {
  const [dropDown, setDropDown] = useState(false);
  const [selectedCategoryName, setSelectedCategoryName] = useState("price");
  const [selectedIcon, setSelectedIcon] = useState("price");
  const [selectedColor, setSelectedColor] = useState("bg-red-600");
  const icons = [
    { icon: <BiPurchaseTag />, name: "price" },
    { icon: <BiBrush />, name: "brush" },
    { icon: <BiLogoSteam />, name: "steam" },
    { icon: <BiSolidBook />, name: "book" },
    { icon: <BiSolidDrink />, name: "drink" },
    { icon: <BiSolidContact />, name: "contacts" },
  ];
  const colors = [
    "bg-red-600",
    "bg-slate-600",
    "bg-green-600",
    "bg-orange-600",
    "bg-purple-600",
    "bg-yellow-600",
    "bg-black",
  ];
  const handleInputChange = (event) => {
    setSelectedCategoryName(event.target.value);
  };
  const handleClickIcon = (icon, name) => {
    setSelectedIcon(name);
    setSelectedCategoryName(name);
    setDropDown(false);
  };

  const handleCreateSubmit = async (event) => {
    event.preventDefault();
    const category = {
      name: selectedCategoryName,
      category_icon: selectedIcon,
      icon_color: selectedColor,
    };

    try {
      const options = {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(category),
      };
      const response = await fetch(`http://localhost:8000/category`, options);
      if (!response.ok) throw new Error(`HTPP error ${response.status}`);
      const data = await response.json();
      console.log("category added ", data);
      document.getElementById("my_modal_2").close();
    } catch (error) {
      console.error("category oruulhd aldaa garlaa");
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex items-center justify-between px-[24px] py-4">
            <div>
              <h3>Add Category</h3>
            </div>
            <div>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex">
            <label htmlFor="my_modal_7">
              <button
                onClick={() => setDropDown(!dropDown)}
                className={`${selectedColor} w-12 h-12 flex items-center justify-center rounded-lg`}
              >
                {icons.find((icon) => icon.name === selectedIcon)?.icon}
              </button>
            </label>
            {dropDown && (
              <div className="flex flex-col">
                <div className="absolute w-32 h-32 grid grid-rows-3 grid-cols-2 justify-items-center z-10 bg-white shadow-lg rounded-md">
                  {icons.map((icon, index) => (
                    <button
                      key={index}
                      onClick={() => handleClickIcon(icon.icon, icon.name)}
                      className="flex items-center p-2 hover:bg-gray-200"
                    >
                      {icon.icon}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <input
                type="text"
                value={selectedCategoryName}
                onChange={handleInputChange}
                placeholder="name"
                className="h-[48px] p-4 w-[350px] ml-4 bg-slate-100 rounded-lg"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center mt-5">
            {colors.map((color, index) => (
              <div key={index} className="flex">
                <button
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 ${color} rounded-full`}
                ></button>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button
              onClick={handleCreateSubmit}
              className="h-10 w-full rounded-lg bg-green-600 text-xl text-white"
            >
              <p>add</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
