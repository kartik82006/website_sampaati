import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = (project) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredProject(null);
    }, 200); // Small delay to allow moving to the detail panel
    setHoverTimeout(timeout);
  };

  const handleDetailPanelEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDetailPanelLeave = () => {
    setHoveredProject(null);
  };

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Full Stack Web Application",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description: "A modern e-commerce platform built with React and Node.js featuring real-time inventory management, secure payment processing, and responsive design. The platform includes advanced search functionality, user authentication, shopping cart management, and admin dashboard for inventory control.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "Task Management App",
      subtitle: "Team Collaboration Tool",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      description: "An intuitive task management application with drag-and-drop functionality, team collaboration features, and real-time updates. Features include project boards, task assignments, deadline tracking, and team communication tools.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      subtitle: "Analytics & Reporting Platform",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Interactive dashboard for visualizing complex datasets with customizable charts, filters, and real-time data streaming capabilities. Includes advanced analytics, report generation, and data export functionality.",
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

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray-400 text-lg">
            A collection of my recent work and creative solutions
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project) => (
            <div key={project.id}>
              {/* Project Item */}
              <div 
                className="border-b border-gray-700 last:border-b-0"
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`w-full py-8 flex items-center justify-between group hover:bg-gray-800/30 transition-all duration-300 px-4 -mx-4 cursor-pointer ${
                    hoveredProject?.id === project.id ? 'bg-gray-800/50' : ''
                  }`}
                >
                  <div className="flex-1 text-left">
                    <h3 className={`text-2xl font-bold mb-2 transition-colors ${
                      hoveredProject?.id === project.id ? 'text-blue-400' : 'group-hover:text-blue-400'
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {project.subtitle}
                    </p>
                  </div>
                  <ChevronRight 
                    size={24} 
                    className={`text-gray-500 transition-all duration-300 ${
                      hoveredProject?.id === project.id 
                        ? 'text-white translate-x-1 rotate-90' 
                        : 'group-hover:text-white group-hover:translate-x-1'
                    }`} 
                  />
                </div>
              </div>

              {/* Expanded Detail Panel */}
              <div 
                className={`overflow-hidden bg-slate-800 border-l-4 border-blue-500 transition-all duration-500 ease-in-out ${
                  hoveredProject?.id === project.id 
                    ? 'max-h-96 opacity-100 transform translate-y-0' 
                    : 'max-h-0 opacity-0 transform -translate-y-4'
                }`}
                onMouseEnter={handleDetailPanelEnter}
                onMouseLeave={handleDetailPanelLeave}
              >
                  <div className={`p-8 transition-all duration-700 delay-100 ${
                    hoveredProject?.id === project.id 
                      ? 'transform translate-y-0 opacity-100' 
                      : 'transform translate-y-8 opacity-0'
                  }`}>
                    <div className={`grid md:grid-cols-2 gap-8 transition-all duration-500 delay-200 ${
                      hoveredProject?.id === project.id 
                        ? 'transform translate-y-0 opacity-100' 
                        : 'transform translate-y-4 opacity-0'
                    }`}>
                      {/* Left Column - Image and Category */}
                      <div className={`transition-all duration-600 delay-300 ${
                        hoveredProject?.id === project.id 
                          ? 'transform translate-x-0 opacity-100' 
                          : 'transform -translate-x-8 opacity-0'
                      }`}>
                        <div className={`relative mb-6 transition-all duration-500 delay-400 ${
                          hoveredProject?.id === project.id 
                            ? 'transform scale-100 opacity-100' 
                            : 'transform scale-95 opacity-0'
                        }`}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <div className={`absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-400 delay-500 ${
                            hoveredProject?.id === project.id 
                              ? 'transform translate-y-0 opacity-100 scale-100' 
                              : 'transform -translate-y-2 opacity-0 scale-90'
                          }`}>
                            {project.category}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className={`flex gap-4 transition-all duration-600 delay-600 ${
                          hoveredProject?.id === project.id 
                            ? 'transform translate-y-0 opacity-100' 
                            : 'transform translate-y-4 opacity-0'
                        }`}>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                          >
                            <Github size={16} />
                            Source Code
                          </a>
                        </div>
                      </div>

                      {/* Right Column - Details */}
                      <div className={`transition-all duration-600 delay-350 ${
                        hoveredProject?.id === project.id 
                          ? 'transform translate-x-0 opacity-100' 
                          : 'transform translate-x-8 opacity-0'
                      }`}>
                        <div className={`mb-6 transition-all duration-500 delay-450 ${
                          hoveredProject?.id === project.id 
                            ? 'transform translate-y-0 opacity-100' 
                            : 'transform translate-y-6 opacity-0'
                        }`}>
                          <h2 className="text-2xl font-bold mb-2 text-blue-400">
                            {project.title}
                          </h2>
                          <p className="text-lg text-gray-400 mb-4">
                            {project.subtitle}
                          </p>
                          <p className="text-gray-300 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className={`transition-all duration-600 delay-550 ${
                          hoveredProject?.id === project.id 
                            ? 'transform translate-y-0 opacity-100' 
                            : 'transform translate-y-6 opacity-0'
                        }`}>
                          <h3 className="text-lg font-semibold mb-3 text-gray-200">Technologies Used</h3>
                          <div className={`flex flex-wrap gap-2 transition-all duration-400 delay-650 ${
                            hoveredProject?.id === project.id 
                              ? 'transform translate-y-0 opacity-100' 
                              : 'transform translate-y-4 opacity-0'
                          }`}>
                            {project.technologies.map((tech, index) => (
                              <span 
                                key={tech} 
                                className={`bg-gray-700 text-gray-200 px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                                  hoveredProject?.id === project.id 
                                    ? 'transform translate-y-0 opacity-100 scale-100' 
                                    : 'transform translate-y-2 opacity-0 scale-95'
                                }`}
                                style={{ 
                                  transitionDelay: hoveredProject?.id === project.id 
                                    ? `${700 + index * 50}ms` 
                                    : '0ms' 
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

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm leading-relaxed">
            Note: These projects showcase a wide range of technologies and approaches. 
            Please contact me for more detailed information about any specific project or collaboration opportunities.
          </p>
          <button className="mt-4 text-gray-400 hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;