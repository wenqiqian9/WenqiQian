import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { MemberRole } from '../types';
import { Mail } from 'lucide-react';

const Team: React.FC = () => {
  // Group members by role
  const groupedMembers = {
    [MemberRole.PI]: TEAM_MEMBERS.filter(m => m.role === MemberRole.PI),
    [MemberRole.ASSOCIATE]: TEAM_MEMBERS.filter(m => m.role === MemberRole.ASSOCIATE),
    [MemberRole.POSTDOC]: TEAM_MEMBERS.filter(m => m.role === MemberRole.POSTDOC),
    [MemberRole.PHD]: TEAM_MEMBERS.filter(m => m.role === MemberRole.PHD),
    [MemberRole.MASTER]: TEAM_MEMBERS.filter(m => m.role === MemberRole.MASTER),
    [MemberRole.ALUMNI]: TEAM_MEMBERS.filter(m => m.role === MemberRole.ALUMNI),
  };

  const roleOrder = [
    MemberRole.PI,
    MemberRole.ASSOCIATE,
    MemberRole.POSTDOC,
    MemberRole.PHD,
    MemberRole.MASTER
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Meet the Team</h2>
          <p className="mt-4 text-xl text-slate-600">The minds behind the innovation</p>
        </div>

        <div className="space-y-16">
          {roleOrder.map((role) => {
            const members = groupedMembers[role];
            if (members.length === 0) return null;

            return (
              <div key={role}>
                <h3 className="text-2xl font-bold text-slate-800 border-b border-slate-200 pb-2 mb-8">
                  {role}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {members.map((member) => (
                    <div key={member.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center p-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-slate-50 shadow-inner">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                      <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
                      
                      {member.description && (
                        <p className="text-xs text-slate-500 mb-4 line-clamp-3">
                          {member.description}
                        </p>
                      )}
                      
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`}
                          className="mt-auto inline-flex items-center text-xs text-slate-500 hover:text-blue-600 transition-colors"
                        >
                          <Mail size={14} className="mr-1" />
                          {member.email}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;