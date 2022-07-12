import React from "react";

const CTA = () => {
  return (
    <div>
      <aside className="overflow-hidden   sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="max-w-xl mx-auto text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-700 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="relative inline-block group focus:outline-none focus:ring focus:ring-yellow-400"
              >
                <span className="relative z-10 block px-12 py-3 text-sm font-medium text-white transition bg-gray-900 rounded group-hover:scale-105">
                  Start learning now
                </span>

                <span className="absolute inset-0 transition scale-105 rounded bg-gray-900/25 -rotate-3 group-hover:rotate-0"></span>
              </a>
            </div>
          </div>
        </div>

        <img
          alt="#"
          src="/windows-Pmu6-i4iyNE-unsplash.jpg"
          className="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end border-l-4 border-t-4 border-gray-900"
        />
      </aside>
    </div>
  );
};

export default CTA;
