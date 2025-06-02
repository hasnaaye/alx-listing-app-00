import React from 'react'
const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        StayFinder
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-1/3 my-3 md:my-0">
        <input
          type="text"
          placeholder="Search ..."
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <button className="text-blue-600 font-medium hover:underline">Sign In</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Sign Up
        </button>
      </div>

      {/* Accommodation Types */}
      <nav className="w-full mt-4 md:mt-0 md:w-auto flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium text-gray-600">
        {accommodationTypes.map((type) => (
          <a
            key={type}
            href={`#${type.toLowerCase()}`}
            className="hover:text-blue-600 transition"
          >
            {type}
          </a>
        ))}
      </nav>
    </header>
  );
}
export default Header;
