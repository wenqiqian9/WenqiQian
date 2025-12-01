import React from 'react';
import { RESEARCH_AREAS } from '../constants';
import * as LucideIcons from 'lucide-react';

const Research: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Research Areas</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our lab focuses on solving critical challenges in sustainable energy through advanced material design and chemical engineering principles.
          </p>
        </div>

        <div className="space-y-24">
          {RESEARCH_AREAS.map((area, index) => {
            // Dynamic Icon Loading
            const IconComponent = (LucideIcons as any)[area.iconName] || LucideIcons.HelpCircle;

            return (
              <div key={area.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video group">
                    <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500" />
                    <img src={area.image} alt={area.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-xl">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{area.title}</h3>
                  <div className="w-20 h-1 bg-blue-600 rounded-full" />
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                  <ul className="space-y-3">
                    {/* Mock bullet points for visual structure */}
                    {['Material synthesis', 'Characterization', 'Performance optimization'].map((item, i) => (
                      <li key={i} className="flex items-center text-slate-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Research;