import { useState } from "react";
import { useTheme } from "./theme-provider";
import { BsSun, BsMoon, BsGear } from "react-icons/bs";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return(
        <div className="relative inline-block text-left">
      <div>
      <button className="inline-flex w-full justify-center gap-x-1.5 rounded-md p-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-100 dark:ring-gray-900" onClick={toggle}>
          {theme === "light" && <BsSun />}
          {theme === "dark" && <BsMoon />}
          {theme === "system" && <BsGear />}
      </button>
      </div>
      {open && (
        <div className="dark:bg-zinc-900 absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu">
          <div className="py-1">
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 rounded-md  hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => {
                setTheme("light");
                setOpen(false);
              }}
            >
              Light
            </button>
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 rounded-md  hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => {
                setTheme("dark");
                setOpen(false);
              }}
            >
              Dark
            </button>
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 rounded-md  hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={() => {
                setTheme("system");
                setOpen(false);
              }}
            >
              System
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToggleTheme;
