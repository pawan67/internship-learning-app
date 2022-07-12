import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <header className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <label className="sr-only" htmlFor="search">
                  {" "}
                  Search{" "}
                </label>

                <input
                  className="w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56"
                  id="search"
                  type="search"
                  placeholder="Search website..."
                />

                <button
                  className="absolute p-2 text-gray-600 transition -translate-y-1/2 rounded-full hover:text-gray-700 bg-gray-50 top-1/2 right-1"
                  type="button"
                  aria-label="Submit Search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              <a
                href=""
                className="block p-2.5 text-gray-600 bg-white rounded-full hover:text-gray-700 shrink-0 shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </a>
            </div>

            <span
              aria-hidden="true"
              className="block w-px h-6 bg-gray-200 rounded-full"
            ></span>

            <a href="#" className="block shrink-0">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src="https://www.hyperui.dev/photos/man-4.jpeg"
                alt="Simon Lewis"
              />
            </a>
            <div className=" bg-black text-white p-2 px-4 rounded-md font-medium hover:bg-black/80 cursor-pointer">
              {" "}
              <Link href="/login">Logout</Link>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome Back, Pawan!
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              maxime ! 🚀
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
