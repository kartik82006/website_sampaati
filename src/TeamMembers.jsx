import React, { useState } from 'react';
import { ArrowLeft, Mail, Linkedin, Github, MapPin, Quote } from 'lucide-react';

const DepartmentMembers = ({ departmentName = "Engineering" }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Department members data - easily customizable
  const departmentMembersData = {
    Engineering: [
      {
        id: 1,
        name: "Alice Johnson",
        position: "Software Engineer",
        photo: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=400&h=400&fit=crop&crop=face",
        location: "San Francisco, CA",
        email: "alice.johnson@company.com",
        linkedin: "https://linkedin.com/in/alicejohnson",
        github: "https://github.com/alicejohnson",
        quote: "Code is poetry written in logic. Every bug is just a plot twist waiting to be resolved.",
        bio: "Passionate about creating elegant solutions to complex problems. Specializes in React and Node.js with 5+ years of experience."
      },
      {
        id: 2,
        name: "Bob Williams",
        position: "Senior Developer",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        location: "Austin, TX",
        email: "bob.williams@company.com",
        linkedin: "https://linkedin.com/in/bobwilliams",
        github: "https://github.com/bobwilliams",
        quote: "The best code is not just functional, but tells a story that other developers can easily follow.",
        bio: "Full-stack developer with expertise in microservices architecture. Mentors junior developers and leads code review sessions."
      },
      {
        id: 3,
        name: "Charlie Davis",
        position: "DevOps Engineer",
        photo: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face",
        location: "Seattle, WA",
        email: "charlie.davis@company.com",
        linkedin: "https://linkedin.com/in/charliedavis",
        github: "https://github.com/charliedavis",
        quote: "Infrastructure should be invisible when it works perfectly, and obvious when it needs attention.",
        bio: "Cloud infrastructure specialist with AWS certifications. Passionate about automation and building resilient systems."
      },
      {
        id: 4,
        name: "Diana Park",
        position: "Frontend Developer",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        location: "New York, NY",
        email: "diana.park@company.com",
        linkedin: "https://linkedin.com/in/dianapark",
        github: "https://github.com/dianapark",
        quote: "Great user interfaces are invisible - they just work exactly as users expect them to.",
        bio: "UI/UX focused developer with a keen eye for design. Specializes in creating accessible and responsive web applications."
      }
    ],
    Marketing: [
      {
        id: 1,
        name: "David Smith",
        position: "Marketing Manager",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        location: "Los Angeles, CA",
        email: "david.smith@company.com",
        linkedin: "https://linkedin.com/in/davidsmith",
        quote: "Marketing is not about the stuff you make, but the stories you tell and the connections you create.",
        bio: "Strategic marketing leader with 8+ years in digital marketing. Expert in brand positioning and growth marketing strategies."
      },
      {
        id: 2,
        name: "Eve Brown",
        position: "Content Strategist",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
        location: "Chicago, IL",
        email: "eve.brown@company.com",
        linkedin: "https://linkedin.com/in/evebrown",
        quote: "Content is the bridge between what a company wants to say and what customers want to hear.",
        bio: "Creative content strategist who crafts compelling narratives. Specializes in multi-channel content marketing and SEO optimization."
      },
      {
        id: 3,
        name: "Frank White",
        position: "Social Media Specialist",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
        location: "Miami, FL",
        email: "frank.white@company.com",
        linkedin: "https://linkedin.com/in/frankwhite",
        quote: "Social media is where brands become human and conversations become communities.",
        bio: "Social media expert with expertise in community building and viral content creation. Manages campaigns across all major platforms."
      }
    ],
    "Product Design": [
      {
        id: 1,
        name: "Grace Wilson",
        position: "UX/UI Designer",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
        location: "Portland, OR",
        email: "grace.wilson@company.com",
        linkedin: "https://linkedin.com/in/gracewilson",
        quote: "Design is not just how it looks and feels. Design is how it works and why it matters to people.",
        bio: "User-centered designer with a background in psychology. Creates intuitive interfaces that solve real user problems."
      },
      {
        id: 2,
        name: "Heidi Green",
        position: "Product Designer",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
        location: "Boston, MA",
        email: "heidi.green@company.com",
        linkedin: "https://linkedin.com/in/heidigreen",
        quote: "Every pixel has a purpose, every interaction tells a story, and every design decision shapes the user's journey.",
        bio: "Product designer focused on creating delightful user experiences. Expert in design systems and cross-platform consistency."
      },
      {
        id: 3,
        name: "Ivan Turner",
        position: "Research Lead",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
        location: "Denver, CO",
        email: "ivan.turner@company.com",
        linkedin: "https://linkedin.com/in/ivanturner",
        quote: "Data tells us what users do, but research tells us why they do it and how we can help them do it better.",
        bio: "UX researcher passionate about understanding user behavior. Conducts usability studies and translates insights into actionable design improvements."
      }
    ]
  };

  const currentMembers = departmentMembersData[departmentName] || departmentMembersData.Engineering;

  const handleBackClick = () => {
    // This would typically navigate back to the departments view
    console.log("Navigate back to departments");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={handleBackClick}
            className="flex items-center text-indigo-300 hover:text-white mb-6 transition-colors duration-200"
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
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
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
                          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
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
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl h-full p-6 flex flex-col justify-center text-white">
                    <Quote className="w-8 h-8 text-indigo-200 mb-4" />
                    
                    <blockquote className="text-lg font-medium italic mb-6 leading-relaxed">
                      "{member.quote}"
                    </blockquote>
                    
                    <div className="border-t border-indigo-300 pt-4">
                      <p className="text-indigo-100 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <span className="text-indigo-200 text-sm font-medium">
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
              <div className="text-4xl font-bold text-indigo-400 mb-2">
                6+
              </div>
              <div className="text-gray-300">Years Average Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                15
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
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            View Open Positions
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