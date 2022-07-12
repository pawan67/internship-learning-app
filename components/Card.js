import React from "react";

const Card = ({ icon, name }) => {
  return (
    <div>
      <a
        className="relative max-w-sm block p-8 border border-gray-100 shadow-xl rounded-xl"
        href=""
      >
        <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
          {Math.floor(Math.random() * 10)}.4
        </span>

        <div className="mt-4 text-gray-500 sm:pr-8">
            <div className=" text-3xl">

          {icon}
            </div>

          <h5 className="mt-4 text-xl font-bold text-gray-900">{name}</h5>

          <p className="hidden mt-2 text-sm sm:block">
            You can manage phone, email and chat conversations all from a single
            mailbox.
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
