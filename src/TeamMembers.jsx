import React, { useState } from 'react';
import { ArrowLeft, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

const TeamMembers = (props) => {
  const { teamName } = useParams();
  const navigate = useNavigate();
  const [hoveredMember, setHoveredMember] = useState(null);

  // TODO: Change the names, roles, descriptions, and images in this array based on the team
  const teamMembersData = {
    engineering: [
      {
        id: 1,
        name: "Alex Thompson",
        role: "Senior Frontend Developer",
        location: "San Francisco, CA",
        description: "React specialist with expertise in modern JavaScript frameworks and responsive design.",
        image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face",
        email: "alex.thompson@company.com",
        linkedin: "https://linkedin.com/in/alexthompson",
        github: "https://github.com/alexthompson"
      },
      {
        id: 2,
        name: "Maya Patel",
        role: "Backend Developer",
        location: "Austin, TX",
        description: "Node.js and Python expert focused on building scalable microservices and APIs.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
        email: "maya.patel@company.com",
        linkedin: "https://linkedin.com/in/mayapatel",
        github: "https://github.com/mayapatel"
      },
      {
        id: 3,
        name: "James Wilson",
        role: "DevOps Engineer",
        location: "Seattle, WA",
        description: "Cloud infrastructure specialist with expertise in AWS, Docker, and Kubernetes.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
        email: "james.wilson@company.com",
        linkedin: "https://linkedin.com/in/jameswilson",
        github: "https://github.com/jameswilson"
      },
      {
        id: 4,
        name: "Sophie Chen",
        role: "Mobile Developer",
        location: "New York, NY",
        description: "iOS and Android development expert with a passion for creating intuitive mobile experiences.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        email: "sophie.chen@company.com",
        linkedin: "https://linkedin.com/in/sophiechen",
        github: "https://github.com/sophiechen"
      },
      {
        id: 5,
        name: "Ryan Garcia",
        role: "Full Stack Developer",
        location: "Denver, CO",
        description: "Versatile developer comfortable with both frontend and backend technologies.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
        email: "ryan.garcia@company.com",
        linkedin: "https://linkedin.com/in/ryangarcia",
        github: "https://github.com/ryangarcia"
      }
    ],
    design: [
      {
        id: 1,
        name: "Emma Rodriguez",
        role: "Senior UX Designer",
        location: "Los Angeles, CA",
        description: "User experience specialist focused on creating intuitive and accessible digital experiences.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
        email: "emma.rodriguez@company.com",
        linkedin: "https://linkedin.com/in/emmarodriguez"
      },
      {
        id: 2,
        name: "Luke Anderson",
        role: "UI Designer",
        location: "Portland, OR",
        description: "Visual design expert with a keen eye for typography, color, and modern interface design.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        email: "luke.anderson@company.com",
        linkedin: "https://linkedin.com/in/lukeanderson"
      },
      {
        id: 3,
        name: "Zoe Kim",
        role: "Design Systems Specialist",
        location: "Chicago, IL",
        description: "Building and maintaining consistent design systems that scale across products and teams.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
        email: "zoe.kim@company.com",
        linkedin: "https://linkedin.com/in/zoekim"
      },
      {
        id: 4,
        name: "Carlos Martinez",
        role: "Motion Designer",
        location: "Miami, FL",
        description: "Bringing interfaces to life with thoughtful animations and micro-interactions.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        email: "carlos.martinez@company.com",
        linkedin: "https://linkedin.com/in/carlosmartinez"
      }
    ]
  };

  const currentTeamMembers = teamMembersData[teamName] || teamMembersData.engineering;

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-12">
          <button
            onClick={handleBackClick}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Back to Team Leaders</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {teamName} Team
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals who make up our {teamName.toLowerCase()} team. 
              Each member brings unique skills and perspectives to drive our success.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {currentTeamMembers.map((member) => (
            <div
              key={member.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-out transform ${
                hoveredMember === member.id 
                  ? 'scale-105 shadow-xl -translate-y-2' 
                  : 'hover:scale-102 hover:shadow-lg hover:-translate-y-1'
              }`}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Profile Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-48 object-cover transition-transform duration-500 ${
                    hoveredMember === member.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-300 ${
                  hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
                }`} />
                
                {/* Social Links Overlay */}
                <div className={`absolute bottom-4 left-4 right-4 flex justify-center space-x-3 transition-all duration-300 ${
                  hoveredMember === member.id 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}>
                  <a
                    href={`mailto:${member.email}`}
                    className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-all duration-200 hover:scale-110"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-all duration-200 hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full transition-all duration-200 hover:scale-110"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">
                    {member.role}
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{member.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-blue-400 rounded-xl transition-opacity duration-300 pointer-events-none ${
                hoveredMember === member.id ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {currentTeamMembers.length}
              </div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                5+
              </div>
              <div className="text-gray-600">Years Average Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                12
              </div>
              <div className="text-gray-600">Countries Represented</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in Joining the {teamName} Team?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            We're always looking for talented {teamName.toLowerCase()} professionals who share our passion for excellence.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            View {teamName} Openings
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;