import React from 'react';
import { CONTACT_INFO, LAB_NAME } from '../constants';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Contact Us</h2>
          <p className="mt-4 text-xl text-slate-600">We are always looking for talented individuals to join our team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Address</h4>
                  <p className="text-slate-600 mt-1">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 hover:underline mt-1 block">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Phone className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Phone</h4>
                  <p className="text-slate-600 mt-1">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">Join Our Group</h4>
              <p className="text-sm text-slate-600 mb-4">
                We have openings for Postdocs, PhD students, and Master students with backgrounds in Chemistry, Chemical Engineering, or Materials Science.
              </p>
              <a 
                href={`mailto:${CONTACT_INFO.email}?subject=Application for CHEER Lab`}
                className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                Send CV <Send size={16} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-slate-200 rounded-2xl overflow-hidden min-h-[400px] relative">
            <div className="absolute inset-0 flex items-center justify-center text-slate-500">
              {/* Note: In a real app, use Google Maps Embed or Leaflet here */}
              <div className="text-center p-6">
                <MapPin size={48} className="mx-auto mb-4 text-slate-400" />
                <p>Interactive Map Would Load Here</p>
                <p className="text-sm mt-2">(Shanghai University Campus)</p>
              </div>
            </div>
            {/* Simulating map visual */}
            <img src="https://picsum.photos/800/600?blur=2" className="w-full h-full object-cover opacity-50 mix-blend-multiply" alt="Map Location" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;