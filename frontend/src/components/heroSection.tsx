import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-6">
      <div className="flex lg:gap-x-8 xl:gap-x-12 lg:items-center md:gap-6 lg:justify-between">
        <div className="lg:col-span-3">
          <h1 className="block text-4xl font-bold text-gray-800 sm:text-4xl md:text-5xl text-center sm:text-left">
            Get knowledge at your finger tips
          </h1>
          <p className="mt-3 text-lg text-gray-800 text-center sm:text-left">
            Introducing a new way for your brand to reach the creative
            community.
          </p>

          <div className="mt-5 lg:mt-8 flex flex-col items-center sm:items-start gap-2 lg:flex-row sm:gap-3">
            <div className="w-full sm:w-auto">
              <label htmlFor="hero-input" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="hero-input"
                name="hero-input"
                className="py-3 px-4 block w-full min-w-0 sm:min-w-80 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                placeholder="Enter book name"
              />
            </div>
            <Link
              to="#"
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Request book
            </Link>
          </div>

          <div className="mt-6 lg:mt-12 flex flex-col justify-self-center sm:justify-self-start">
            <span className="text-xs font-medium text-gray-800 uppercase text-center sm:text-left">
              Trusted by:
            </span>

            <div className="mt-4 flex gap-x-8">
              <img
                className="w-auto h-7 sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt="Logo 1"
              />
              <img
                className="w-auto h-7 sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt="Logo 2"
              />
              <img
                className="w-auto h-7 sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt="Logo 3"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-4 mt-10 lg:mt-0 max-w-xl">
          <img
            className="w-full rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
}
