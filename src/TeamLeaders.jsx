import React, { useState, useEffect } from 'react';
import { ChevronRight, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TeamMembers from './TeamMembers';

const TeamLeaders = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [stars, setStars] = useState([]);
  const navigate = useNavigate();

  // TODO: Change the names, descriptions, and images in this array
  const teamLeaders = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Engineering Team Lead",
      team: "engineering",
      description: "Sarah leads our engineering efforts with 8+ years of experience in full-stack development. She's passionate about building scalable solutions and mentoring developers.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      teamSize: 12,
      teamLink: "/team/engineering/"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Design Team Lead",
      team: "engineering",
      description: "Marcus brings creative vision to life with his expertise in UX/UI design. He believes great design should be both beautiful and accessible to everyone.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      teamSize: 8,
      teamLink: "/team/design"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Product Team Lead",
      team: "engineering",
      description: "Priya drives product strategy and innovation. With her analytical mindset and user-focused approach, she ensures we build products that truly matter.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
      teamSize: 10,
      teamLink: "/team/product"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Marketing Team Lead",
      team: "engineering",
      description: "David crafts compelling narratives that connect our products with the right audience. His data-driven approach ensures every campaign delivers results.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      teamSize: 6,
      teamLink: "/team/marketing"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6 shadow-lg shadow-blue-500/25">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              Meet the Team
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our passionate leaders drive innovation and excellence across every aspect of our organization. 
              Get to know the people who make our vision a reality.
            </p>
          </div>

          {/* Team Leaders Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {teamLeaders.map((leader) => (
              <div
                key={leader.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 border border-white/20"
                onMouseEnter={() => setHoveredCard(leader.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(`/team/${leader.team}`)}
              >
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Team Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 shadow-lg">
                    {leader.team}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-blue-300 font-medium text-sm">
                      {leader.role}
                    </p>
                  </div>

                  <p className="text-blue-100 text-sm leading-relaxed mb-6">
                    {leader.description}
                  </p>

                  {/* Team Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-200 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{leader.teamSize} members</span>
                    </div>
                    
                    <div
                      className="flex items-center text-blue-300 text-sm font-medium hover:translate-x-1 transition-all duration-300 group"
                      onClick={e => { e.stopPropagation(); navigate(`/team/${leader.team}`); }}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="mr-1 group-hover:text-white">View Team</span>
                      <ChevronRight className="w-4 h-4 group-hover:text-white" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-blue-400/50 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Want to Join Our Team?
              </h2>
              <p className="text-blue-100 mb-6">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamLeaders;