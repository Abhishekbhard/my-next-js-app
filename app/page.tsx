import Head from "next/head";
import GlobeImage from "./images/Network-Icon_Thin.svg";
export default function Home() {
  const categories = [
    `Women's runnding shoes`,
    `Everyday Sneakers`,
    `Slip-Ons`,
    `High Tops`,
    `Boat Shoes`,
    `Flats`,
    `Weather Repellent Shoes`,
  ];
  return (
    <div>
      <Head>
        <title>Rebuilding allbirds</title>
      </Head>
      <div className="px-4 py-1 bg-lime-700 text-white">
        <p className="text-xs font-mediam text-center">
          We're raising prices on all products by $1 today in support of the
          planets
          <a href="#" className="underline">
            Learn More
          </a>
        </p>
      </div>
      <header className="relative px-5 py-3 flex item-center justify-between bg-white">
        <div className="absolute inset-0 shadow-lg opacity-50"></div>
        <div className="flex">
          <button className="h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex">
          <img
            className="h-8"
            src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
            alt="Logo"
          />
        </div>
        <div className="flex">
          <button className="h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </header>

      <main>
        <div>
          <div className="flex items-center justify-between px-8 pt-4 pb-3">
            <div>
              <div className="text-xs font-medium text-gray-900 space-x-1">
                <a className="underline" href="#">
                  Home
                </a>
                <span>/</span>
              </div>
              <div className="text-lg font-bold text-gray-900">
                Women's Shoes
              </div>
            </div>
            <div className="flex">
              <button className="h-6 w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 transform rotate-90"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-gray-100 py-2 overflow-x-auto srollbars-hidden">
            <div className="px-8  text-xs flex space-x-4">
              {categories.map((category) => (
                <a href="#" className="text-gray-800 whitespace-nowrap">
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="py-8">
            <div className=" flex items-center space-x-4 bg-green-700 bg-opacity-20 px-8 py-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-12 h-12 transform -rotate-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <div>
                <div className="flex space-x-2">
                  <h2 className="text-sm ml-2 font-semibold text-gray-900">
                    Pay it to the planet.
                  </h2>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <p className="ml-2 text-sm font-light text-gray-900 text-opacity-90">
                  Every Black Friday sale support friday for furture
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
