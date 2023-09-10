import React, { useState } from "react";

const DashboardHeader: React.FunctionComponent = () => {
  const [toggleMenu, handleToggleMenu] = useState(false);
  return (
    <div className="p-4 shadow bg-white">
      <div className="mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">Dashboard</div>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </a>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                onClick={() => handleToggleMenu(!toggleMenu!)}
                className="text-white group"
              >
                <span className="rounded-full h-8 w-8 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-semibold">JD</span>
                </span>
              </button>
            </div>

            <div
              className={`${
                !toggleMenu ? "hidden" : "visible"
              } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Profile
                </a>

                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
