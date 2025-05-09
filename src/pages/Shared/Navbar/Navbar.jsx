import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  const menuItems = [
    { menu: "Portfolio", to: "/portfolio", id: 1 },
    { menu: "Services", to: "/service", id: 2 },
    { menu: "Education", to: "/education", id: 3 },
    { menu: "Profile", to: "/profile", id: 4 },
  ];

  return (
    <nav className="flex items-center justify-between bg-base-100 shadow  px-4 py-2  ">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold  transition-all duration-200 hover:scale-110">
        <h2>Sanjida Suchy</h2>
      </div>
      <ul className="hidden items-center justify-between gap-10 md:flex">
        
        {menuItems.map((menuItem)=><Link key={menuItem.id} to={menuItem.to}>
          <li className="group flex  cursor-pointer flex-col">
            {menuItem.menu}
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </Link>)}
        
      </ul>
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex transition-transform md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer"
        >
          {" "}
          <line x1="4" x2="20" y1="12" y2="12" />{" "}
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />{" "}
        </svg>
        {dropDownState && (
          <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
            {menuItems.map((menuItem) =><Link key={menuItem.id} to={menuItem.to}>
            <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
              {menuItem.menu}
            </li>
            </Link>)}
            
          </ul>
        )}
      </div>
    </nav>
  );
};
