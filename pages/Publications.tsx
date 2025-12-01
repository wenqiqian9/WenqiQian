import React from 'react';
import { PUBLICATIONS } from '../constants';
import { FileText, ExternalLink, Star } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Publications</h2>
          <p className="text-lg text-slate-600">Selected peer-reviewed articles.</p>
        </div>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div 
              key={pub.id} 
              className={`p-6 rounded-xl border transition-all hover:shadow-md ${pub.highlight ? 'bg-blue-50/50 border-blue-100' : 'bg-white border-slate-100'}`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  {pub.highlight ? (
                    <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  ) : (
                    <FileText className="text-slate-400" size={20} />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-slate-700 text-sm mb-1">{pub.authors}</p>
                  <div className="flex items-center flex-wrap gap-2 text-sm">
                    <span className="font-semibold text-blue-700 italic">{pub.journal}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">{pub.year}</span>
                    
                    {pub.doi && (
                      <>
                        <span className="text-slate-400">•</span>
                        <a 
                          href={`https://doi.org/${pub.doi}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-slate-500 hover:text-blue-600 hover:underline transition-colors"
                        >
                          DOI <ExternalLink size={12} className="ml-1" />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;