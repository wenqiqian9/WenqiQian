import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, FlaskConical } from 'lucide-react';
import { LAB_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Team', path: '/team' },
    { name: 'Publications', path: '/publications' },
    { name: 'Contact', path: '/contact' },
  ];

  const getLinkClass = (isActive: boolean) => 
    `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`;

  const getMobileLinkClass = (isActive: boolean) =>
    `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'}`;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">{LAB_NAME}</span>
            </NavLink>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path}
                className={({ isActive }) => getLinkClass(isActive)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-blue-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => getMobileLinkClass(isActive)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;