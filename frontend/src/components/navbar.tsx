import { useState } from "react";
import { Link } from "react-router-dom";

const LoggedInNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/home" },
    { name: "Library", link: "/library" },
    { name: "History", link: "/history" },
  ];

  return (
    <nav className="bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <img
          className="w-auto h-6 sm:h-7"
          src="https://merakiui.com/images/full-logo.svg"
          alt="Logo"
        />

        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-gray-700 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="relative hidden md:block">
          <input
            type="text"
            className="w-64 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              />
            </svg>
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 py-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg"
            >
              {item.name}
            </a>
          ))}
          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search"
          />
        </div>
      )}
    </nav>
  );
};

const GeneralNavbar = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Articles", link: "#articles" },
    { name: "News", link: "#news" },
  ];

  return (
    <nav className="bg-white py-6 px-4 md:px-16 flex justify-between items-center mb-6 md:mb-10">
      <img
        className="w-auto h-6 sm:h-7"
        src="https://merakiui.com/images/full-logo.svg"
        alt="Logo"
      />
      <div className="hidden lg:flex space-x-6">
        {menuItems.map((item) => (
          <Link key={item.name} to={item.link} className="text-gray-800">
            {item.name}
          </Link>
        ))}
      </div>
      <Link
        to={"/login"}
        className="py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none tracking-wider"
      >
        Login
      </Link>
    </nav>
  );
};

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <nav className="max-w-[82rem] mx-auto">
      {isLoggedIn ? <LoggedInNavbar /> : <GeneralNavbar />}
    </nav>
  );
};

export default Navbar;
