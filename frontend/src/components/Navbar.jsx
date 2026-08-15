import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              Storefront
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-900 hover:text-indigo-600 font-medium transition duration-150"
            >
              Home
            </Link>
            <Link
              to="/create"
              className="text-gray-600 hover:text-indigo-600 font-medium transition duration-150"
            >
              Add Product
            </Link>

            {/* Categories Dropdown / Links */}
            <div className="relative group">
              <button className="text-gray-600 group-hover:text-indigo-600 font-medium flex items-center gap-1 transition duration-150">
                Categories
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block border border-gray-100">
                <a
                  to="/categories/electronics"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Electronics
                </a>
                <a
                  to="/categories/health-and-beauty"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Health and Beauty
                </a>
                <a
                  to="/categories/clothing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  Clothing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
