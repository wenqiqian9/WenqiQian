import React from 'react';
import { LAB_NAME, UNIVERSITY, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{LAB_NAME}</h3>
            <p className="text-sm leading-relaxed mb-4">
              Dedicated to pushing the boundaries of chemical engineering and sustainable energy solutions.
            </p>
            <p className="text-sm font-semibold text-slate-400">{UNIVERSITY}</p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/research" className="hover:text-blue-400 transition">Research Areas</a></li>
              <li><a href="#/team" className="hover:text-blue-400 transition">Team Members</a></li>
              <li><a href="#/publications" className="hover:text-blue-400 transition">Publications</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <div className="text-sm space-y-2">
              <p>{CONTACT_INFO.address}</p>
              <p>Email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-400 hover:underline">{CONTACT_INFO.email}</a></p>
              <p>Phone: {CONTACT_INFO.phone}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {LAB_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;