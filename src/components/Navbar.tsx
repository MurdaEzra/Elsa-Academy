import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
const Navbar = () => {
  const {
    user,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-yellow-500 font-bold text-xl">
                  E.P.J.A
                </span>
                <span className="ml-2 text-white text-sm">Elsa Academy</span>
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  Home
                </Link>
                <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  About
                </Link>
                <Link to="/admissions" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  Admissions
                </Link>
                <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  Contact
                </Link>
                <Link to="/fee-structure" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  Fee Structure
                </Link>
                <Link to="/newsletters" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                  Newsletters
                </Link>
                <Link to="/Management" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
              Management
            </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user ? <div className="relative ml-3">
                  <div>
                    <button onClick={toggleDropdown} className="flex items-center max-w-xs bg-gray-800 rounded-full text-sm focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                        <User size={16} />
                      </div>
                      <span className="ml-2">{user.name ? user.name : 'User'}</span>
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  </div>
                  {dropdownOpen && <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <Link to={`/${user.role ? user.role : 'student'}-dashboard`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Dashboard
                      </Link>
                      <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                        <LogOut size={16} className="mr-2" />
                        Sign out
                      </button>
                    </div>}
                </div> : <Link to="/login" className="px-4 py-2 rounded-md text-sm font-medium bg-yellow-500 text-black hover:bg-yellow-400">
                  Log in
                </Link>}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
              About
            </Link>
            <Link to="/admissions" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
              Admissions
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
              Contact
            </Link>
            <Link to="/fee-structure" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
              Fee Structure
            </Link>
            <Link to="/newsletters" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
              Newsletters
            </Link>
            <Link to="/Management" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
              Management
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            {user ? <div className="px-2 space-y-1">
                <div className="flex items-center px-3">
                  <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <User size={16} />
                  </div>
                  <span className="ml-3 text-base font-medium">
                    {user.name ? user.name : 'User'}
                  </span>
                </div>
                <Link to={`/${user.role ? user.role : 'student'}-dashboard`} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 flex items-center">
                  <LogOut size={16} className="mr-2" />
                  Sign out
                </button>
              </div> : <div className="px-5">
                <Link to="/login" className="block px-4 py-2 text-center rounded-md text-base font-medium bg-yellow-500 text-black hover:bg-yellow-400">
                  Log in
                </Link>
              </div>}
          </div>
        </div>}
    </nav>;
};
export default Navbar;