import React, { useState, useRef } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';



const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = (project) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    
    // If switching directly between projects, add a small delay for smoother transition
    if (hoveredProject && hoveredProject.id !== project.id) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredProject(project);
      }, 150);
    } else {
      setHoveredProject(project);
    }
  };

  const handleMouseLeave = () => {
    // Longer delay for smoother transitions when moving between projects
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredProject(null);
    }, 400);
  };

  const handleDetailPanelEnter = () => {
    // Clear timeout when entering detail panel
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleDetailPanelLeave = () => {
    // Shorter delay when leaving detail panel directly
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredProject(null);
    }, 200);
  }; 

  // Sample project data - replace with your actual projects
  const projects = [
    { 
      id: 1,
      title: "Vertical Flight Society",
      subtitle: "PEMFC Powered eVTOL",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description: "The Vertical Flight Society (VFS) is a global non-profit organization dedicated to advancing vertical flight technology, including helicopters, tiltrotors, and emerging electric vertical takeoff and landing (eVTOL) aircraft. Founded in 1943, VFS brings together engineers, researchers, industry leaders, and students to foster innovation in vertical flight. Through technical conferences, publications, and educational initiatives, the society promotes knowledge sharing and collaboration to solve key challenges in rotorcraft and future air mobility.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      liveUrl: "https://vtol.org/",
      githubUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "NIDAR",
      subtitle: "Drone Application and Research",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      description: "The National Innovation Challenge for Drone Application & Research (NIDAR) is a premier competition by MeitY and Drone Federation of India. It invites student teams to build autonomous drones for disaster response and precision agriculture. With funding, mentorship, and startup support, NIDAR aims to drive innovation and make India a global drone hub by 2030.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
      liveUrl: "https://nidar.org.in/",
      githubUrl: "https://github.com/example"
    },
    {
      id: 3,
      title: "Reusable Launch Vehicle",
      subtitle: "idk",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "A type of spacecraft designed to return to Earth intact and be launched again multiple times, reducing the cost of space missions. Unlike traditional expendable rockets that are discarded after a single use, RLVs aim to revolutionize space travel by improving efficiency and sustainability. By reusing major components like boosters and engines, companies like SpaceX and ISRO are making space access more economical and environmentally friendly.",
      technologies: ["Python", "D3.js", "Flask", "PostgreSQL", "Pandas"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      subtitle: "Secure Financial Application",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking features. Includes bill payments, money transfers, and investment portfolio management.",
      technologies: ["React Native", "Firebase", "Redux", "Plaid API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 5,
      title: "AI Content Generator",
      subtitle: "Machine Learning Application",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      description: "AI-powered content generation tool that creates high-quality articles, social media posts, and marketing copy using advanced language models. Features include content optimization, plagiarism detection, and multi-language support.",
      technologies: ["Python", "OpenAI API", "FastAPI", "React", "TensorFlow"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    }
  ];

  return (<div className="min-h-screen bg-slate-900 text-white relative overflow-hidden" id="project">
  {/* Earth Background with Cinematic Gradient */}
  <div className="fixed inset-0 z-[-1]">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-150"
      style={{
        backgroundImage: `url("/bg_img.jpg")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "100vh",
      }}
    />

    {/* Multi-layered Cinematic Black Gradients */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black/50 z-0" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/70 z-0" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0" />
    <div className="absolute inset-0 bg-slate-900/20 z-0" />
  </div>

  {/* Content */}
  <div className="w-full px-10 py-12 relative z-10">
    {/* Header */}
    <div className="mb-16 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Our Projects</h1>
      <p className="text-gray-300 text-lg drop-shadow-md">
        Simultaneously tackling competitions
      </p>
    </div>

    {/* Projects List */}
    <div className="space-y-0 w-full relative z-10">
      {projects.map((project) => (
        <div key={project.id} className="relative">
          {/* Project Item */}
          <div
            className="border-b border-gray-600/50 last:border-b-0 relative z-10"
            onMouseEnter={() => handleMouseEnter(project)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`w-full py-8 flex items-center justify-between group hover:bg-black/30 backdrop-blur-sm transition-all duration-200 px-4 -mx-4 cursor-pointer rounded-lg ${
                hoveredProject?.id === project.id ? 'bg-black/40 backdrop-blur-sm' : ''
              }`}
            >
              <div className="flex-1 text-left">
                <h3
                  className={`text-4xl font-bold mb-2 transition-colors duration-200 drop-shadow-lg ${
                    hoveredProject?.id === project.id ? 'text-blue-400' : 'group-hover:text-blue-400'
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xl drop-shadow-md">
                  {project.subtitle}
                </p>
              </div>
              <ChevronRight
                size={24}
                className={`text-gray-400 transition-all duration-200 drop-shadow-md ${
                  hoveredProject?.id === project.id
                    ? 'text-white translate-x-1 rotate-90'
                    : 'group-hover:text-white group-hover:translate-x-1'
                }`}
              />
            </div>
          </div>

          {/* Expanded Detail Panel */}
          <div
            className={`overflow-hidden bg-black/60 backdrop-blur-md border-l-4 border-blue-500 transition-all duration-500 ease-in-out relative z-0 rounded-r-lg ${
              hoveredProject?.id === project.id
                ? 'max-h-[500px] opacity-100 transform translate-y-0'
                : 'max-h-0 opacity-0 transform -translate-y-2'
            }`}
            onMouseEnter={handleDetailPanelEnter}
            onMouseLeave={handleDetailPanelLeave}
          >
            <div
              className={`p-8 transition-all duration-400 ${
                hoveredProject?.id === project.id
                  ? 'transform translate-y-0 opacity-100'
                  : 'transform translate-y-6 opacity-0'
              }`}
            >
              <div
                className={`grid md:grid-cols-2 gap-8 transition-all duration-300 delay-100 ${
                  hoveredProject?.id === project.id
                    ? 'transform translate-y-0 opacity-100'
                    : 'transform translate-y-4 opacity-0'
                }`}
              >
                {/* Left Column */}
                <div
                  className={`transition-all duration-300 delay-200 ${
                    hoveredProject?.id === project.id
                      ? 'transform translate-x-0 opacity-100'
                      : 'transform -translate-x-4 opacity-0'
                  }`}
                >
                  <div
                    className={`relative mb-6 transition-all duration-400 delay-250 ${
                      hoveredProject?.id === project.id
                        ? 'transform scale-100 opacity-100'
                        : 'transform scale-95 opacity-0'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg shadow-xl"
                    />
                    <div
                      className={`absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 delay-300 shadow-lg ${
                        hoveredProject?.id === project.id
                          ? 'transform translate-y-0 opacity-100 scale-100'
                          : 'transform -translate-y-2 opacity-0 scale-90'
                      }`}
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div
                    className={`flex gap-4 transition-all duration-400 delay-350 ${
                      hoveredProject?.id === project.id
                        ? 'transform translate-y-0 opacity-100'
                        : 'transform translate-y-4 opacity-0'
                    }`}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 shadow-lg backdrop-blur-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-700/80 hover:bg-gray-600/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 shadow-lg backdrop-blur-sm"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>

                {/* Right Column */}
                <div
                  className={`transition-all duration-300 delay-200 ${
                    hoveredProject?.id === project.id
                      ? 'transform translate-x-0 opacity-100'
                      : 'transform translate-x-4 opacity-0'
                  }`}
                >
                  <div
                    className={`mb-6 transition-all duration-400 delay-250 ${
                      hoveredProject?.id === project.id
                        ? 'transform translate-y-0 opacity-100'
                        : 'transform translate-y-6 opacity-0'
                    }`}
                  >
                    <h2 className="text-3xl font-bold mb-2 text-blue-400 drop-shadow-lg">
                      {project.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-4 drop-shadow-md">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-200 leading-relaxed drop-shadow-sm">
                      {project.description}
                    </p>
                  </div>

                  <div
                    className={`transition-all duration-400 delay-300 ${
                      hoveredProject?.id === project.id
                        ? 'transform translate-y-0 opacity-100'
                        : 'transform translate-y-6 opacity-0'
                    }`}
                  >
                    <h3 className="text-lg font-semibold mb-3 text-gray-200 drop-shadow-md">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={tech}
                          className={`bg-gray-700/80 backdrop-blur-sm text-gray-200 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 shadow-md ${
                            hoveredProject?.id === project.id
                              ? 'transform translate-y-0 opacity-100 scale-100'
                              : 'transform translate-y-2 opacity-0 scale-95'
                          }`}
                          style={{
                            transitionDelay:
                              hoveredProject?.id === project.id
                                ? `${350 + index * 50}ms`
                                : '0ms',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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

export default ProjectShowcase;