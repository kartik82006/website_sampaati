import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { ArrowLeft, Mail, Quote , MapPin,Linkedin,Github} from 'lucide-react';

const DepartmentMembers = ({ departmentName = "Engineering" }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();
  // Department members data - easily customizable
  const departmentMembersData = {
    Aerodynamics: [
      {
        id: 1,
        name: "Aryan Sharma",
        position: "Team Member",
        photo: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=400&h=400&fit=crop&crop=face",
        location: "",
        email: "aryan.sharma@company.com",
        linkedin: "https://linkedin.com/in/aryansharma",
        github: "https://github.com/aryansharma",
        quote: `"वृक्ष हों भले खड़े,
हों घने, हों बड़े,
एक पत्र छाँह भी
मांग मत! मांग मत! मांग मत!
अग्निपथ! अग्निपथ! अग्निपथ!"`,
        bio: "I am passionate about Aerospace and anything that flies. I want to serve my nation and build it better stronger and bigger."
      },
      {
        id: 2,
        name: "Parth Gupta",
        position: "Team Member",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        location: "Austin, TX",
        email: "parth.gupta@company.com",
        linkedin: "https://linkedin.com/in/parthgupta",
        github: "https://github.com/parthgupta",
        quote: "A boy full of zeal and compassion who wants his actions to have an immortal impact.",
        bio: "I am passionate about the aerodynamics of every flying machine, design optimisation, structural and fluid flow analysis."
      },
      
    ],
    Content: [
      {
        id: 1,
        name: "Prem Kumar",
        position: "Team Member",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        location: "Los Angeles, CA",
        email: "prem.kumar@company.com",
        linkedin: "https://linkedin.com/in/premkumar",
        quote: "There may be people who have more talent than you, but there’s no excuse for anyone to work harder than you do.",
        bio: "I love doing creative work and making things from scratch. Content gives me the same opportunity and come up with my ideas in more framed manner."
      },
      {
        id: 2,
        name: "Armaan",
        position: "Team Member",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
        location: "Chicago, IL",
        email: "arman@company.com",
        linkedin: "https://linkedin.com/in/arman",
        quote: "I tell the stories that others remember.",
        bio: "I’m deeply passionate about expanding my knowledge  exploring facts, history, and general knowledge has always inspired me to see the world in new ways. Alongside this, I dream of creating my own film one day, bringing my stories to life by writing scripts and directing them. For me, it’s about blending curiosity with creativity to share ideas that can both inform and inspire."
      },
    ],
    "Electrical & Electronics": [
      {
        id: 1,
        name: "Akshat Kumar ",
        position: "Team Member",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
        location: "Portland, OR",
        email: "grace.wilson@company.com",
        linkedin: "https://linkedin.com/in/gracewilson",
        quote: "Ending sahi nahi hai.... Koi baat nahi, apni kahani hai, ending badal denge.",
        bio: "I’m passionate about exploring electronics, improving my tennis skills, and immersing myself in movies that inspire creativity, curiosity, and innovative thinking both on and off the court."

      },
      {
        id: 2,
        name: "Prem Kumar",
        position: "Team Member",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
        location: "Boston, MA",
        email: "heidi.green@company.com",
        linkedin: "https://linkedin.com/in/heidigreen",
        quote: "There may be people who have more talent than you, but there’s no excuse for anyone to work harder than you do.",
        bio: "I love doing things related to my field and enjoy doing work, cause I am here because hard work wins!"
      },
      {
        id: 3,
        name: "Jahanvi Kalia.",
        position: "Team Member",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
        location: "Denver, CO",
        email: "ivan.turner@company.com",
        linkedin: "https://linkedin.com/in/ivanturner",
        quote: "The only person you are destined to become is the person you decide to be.",
        bio: "I’m deeply passionate about blending electronics, intelligent systems, and innovation to breathe life into eVTOL technology—crafting sensor-driven solutions that elevate safety, performance, and the future of aerial mobility."
      },
      {
        id: 4,
        name: "Srishti Garg",
        position: "Team Member",
        photo: "https://images.unsplash.com/photo-1517841905240-472988d4e47f?w=400&h=400&fit=crop&crop=face",
        location: "Seattle, WA",
        email: "srishti.garg@company.com",
        linkedin: "https://linkedin.com/in/srishtigarg",
        quote: "You cannot control the waves, but you can learn to surf.",
        bio: "I’m passionate about electronics and innovation, exploring how circuits and technology can solve real-world problems and create smarter, more efficient solutions for everyday life."
      },
      {
        id: 5,
        name: "Aarav Singh",
        position: "Team Member",
        photo: "https://images.unsplash.com/photo-1517841905240-472988d4e47f?w=400&h=400&fit=crop&crop=face",
        location: "Seattle, WA",
        email: "aarav.singh@company.com",
        linkedin: "https://linkedin.com/in/aaravsingh",
        quote: "Innovation distinguishes between a leader and a follower.",
        bio: "I’m passionate about exploring electronics, improving my tennis skills, and immersing myself in movies that inspire creativity, curiosity, and innovative thinking both on and off the court."
      }
    ]
  };

  const currentMembers = departmentMembersData[departmentName] || departmentMembersData.Engineering;

  const handleBackClick = () => {
    
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0c121f] to-slate-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={handleBackClick}
            className="flex items-center text-cyan-300 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">Back to Departments</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              {departmentName} Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the talented individuals who drive innovation and excellence in our {departmentName.toLowerCase()} department.
            </p>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentMembers.map((member) => (
            <div
              key={member.id}
              className="group perspective-1000 h-96"
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                hoveredCard === member.id ? 'rotate-y-180' : ''
              }`}>
                
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full transform transition-all duration-500 hover:scale-105">
                    {/* Photo */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onDragStart={(e) => e.preventDefault()}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-3">
                        {member.position}
                      </p>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{member.location}</span>
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex space-x-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-600 hover:text-cyan-600 transition-colors duration-200"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-cyan-600 transition-colors duration-200"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-cyan-600 transition-colors duration-200"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-gradient-to-br from-cyan-800 to-cyan-800 rounded-2xl shadow-xl h-full p-6 flex flex-col justify-center text-white">
                    <Quote className="w-8 h-8 text-cyan-200 mb-4" />
                    
                    <blockquote className="text-lg font-medium italic mb-6 leading-relaxed">
                      "{member.quote}"
                    </blockquote>
                    
                    <div className="border-t border-cyan-300 pt-4">
                      <p className="text-cyan-100 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <span className="text-cyan-200 text-sm font-medium">
                        — {member.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Department Stats */}
        <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">
                {currentMembers.length}
              </div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                10+
              </div>
              <div className="text-gray-300">Months Average Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                4
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our {departmentName} Team
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            Apply Now
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default DepartmentMembers;