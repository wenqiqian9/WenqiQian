import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, BookOpen } from 'lucide-react';
import { HERO_IMAGE, LAB_FULL_NAME, LAB_NAME, NEWS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <img 
          src={HERO_IMAGE} 
          alt="Lab Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            {LAB_NAME}
          </h1>
          <p className="text-xl md:text-2xl font-light text-slate-200 max-w-2xl mb-8">
            {LAB_FULL_NAME}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/research" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all flex items-center gap-2"
            >
              Our Research <ArrowRight size={18} />
            </Link>
            <Link 
              to="/publications" 
              className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-lg transition-all"
            >
              Latest Publications
            </Link>
          </div>
        </div>
      </div>

      {/* Stats/Quick Links */}
      <div className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow group">
              <Activity className="h-10 w-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Innovative Research</h3>
              <p className="text-slate-600 mb-4">Exploring the frontiers of energy conversion and catalysis materials.</p>
              <Link to="/research" className="text-blue-600 font-medium hover:underline text-sm">Learn more &rarr;</Link>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow group">
              <BookOpen className="h-10 w-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">High Impact</h3>
              <p className="text-slate-600 mb-4">Publishing in top-tier journals and contributing to global scientific knowledge.</p>
              <Link to="/publications" className="text-blue-600 font-medium hover:underline text-sm">View papers &rarr;</Link>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow group">
              <Users className="h-10 w-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Talented Team</h3>
              <p className="text-slate-600 mb-4">A diverse group of researchers, postdocs, and students driving innovation.</p>
              <Link to="/team" className="text-blue-600 font-medium hover:underline text-sm">Meet us &rarr;</Link>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Lab News</h2>
            <Link to="#" className="text-blue-600 font-medium hover:text-blue-800 text-sm">View Archive</Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {NEWS.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{item.date}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;