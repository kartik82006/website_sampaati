import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const departments = [
  {
    name: 'Aerodynamics',
    description: 'Our aerodynamics team specializes in the study and application of airflow and its effects on objects in motion. They work on optimizing vehicle designs for improved performance and efficiency.',
    imageUrl: 'aerodyanmics_dept.png',
    members: [
      { name: 'Alice Johnson', position: 'Software Engineer', memberImageUrl: 'https://placehold.co/100x100/A0B9D6/FFFFFF?text=AJ' },
      { name: 'Bob Williams', position: 'Senior Developer', memberImageUrl: 'https://placehold.co/100x100/F5D7A1/FFFFFF?text=BW' },
      { name: 'Charlie Davis', position: 'DevOps Engineer', memberImageUrl: 'https://placehold.co/100x100/D0B8E1/FFFFFF?text=CD' },
    ]
  },
  {
    name: 'Mechanical',
    description: 'The mechanical team focuses on the design, analysis, and manufacturing of mechanical systems. They work on projects ranging from automotive engineering to robotics, ensuring that all moving parts function seamlessly together.',
    imageUrl: 'mechanical_dept.jpg',
    members: [
      { name: 'David Smith', position: 'Mechanical Engineer', memberImageUrl: 'https://placehold.co/100x100/A0B9D6/FFFFFF?text=DS' },
      { name: 'Eve Brown', position: 'CAD Specialist', memberImageUrl: 'https://placehold.co/100x100/F5D7A1/FFFFFF?text=EB' },
      { name: 'Frank White', position: 'Manufacturing Technician', memberImageUrl: 'https://placehold.co/100x100/D0B8E1/FFFFFF?text=FW' },
    ]
  },
  {
    name: 'Techies',
    description: 'The tech department is responsible for developing and maintaining the technology infrastructure of the company. They work on projects ranging from software development to system administration, ensuring that all technical systems run smoothly.',
    imageUrl: 'tech_dept.jpg',
    members: [
      { name: 'Mike Evans', position: 'Sales Lead', memberImageUrl: 'https://placehold.co/100x100/A0B9D6/FFFFFF?text=ME' },
      { name: 'Nancy King', position: 'Account Executive', memberImageUrl: 'https://placehold.co/100x100/F5D7A1/FFFFFF?text=NK' },
      { name: 'Oscar Lee', position: 'Business Development', memberImageUrl: 'https://placehold.co/100x100/D0B8E1/FFFFFF?text=OL' },
    ]
  },
  {
    name: 'Electrical & Electronics',
    description: 'The electrical & electronics team is responsible for designing and developing electrical systems. They work on projects ranging from circuit design to embedded systems, ensuring that all electronic elements function together.',
    imageUrl: 'electronics_dept.jpg',
    members: [
      { name: 'Judy Hall', position: 'HR Manager', memberImageUrl: 'https://placehold.co/100x100/A0B9D6/FFFFFF?text=JH' },
      { name: 'Karl Miller', position: 'Recruitment Specialist', memberImageUrl: 'https://placehold.co/100x100/F5D7A1/FFFFFF?text=KM' },
      { name: 'Laura Clark', position: 'HR Generalist', memberImageUrl: 'https://placehold.co/100x100/D0B8E1/FFFFFF?text=LC' },
    ]
  },
  {
    name: 'Content',
    description: 'The content team is responsible for creating and managing all written and visual content. They work closely with marketing and product teams to ensure that all content aligns with brand messaging and user needs.',
    imageUrl: 'content_dept.jpg',
    members: [
      { name: 'Grace Wilson', position: 'UX/UI Designer', memberImageUrl: 'https://placehold.co/100x100/A0B9D6/FFFFFF?text=GW' },
      { name: 'Heidi Green', 'position': 'Product Designer', memberImageUrl: 'https://placehold.co/100x100/F5D7A1/FFFFFF?text=HG' },
      { name: 'Ivan Turner', 'position': 'Research Lead', memberImageUrl: 'https://placehold.co/100x100/D0B8E1/FFFFFF?text=IT' },
    ]
  },
];



const DepartmentCard = ({ department }) => {
  const navigate = useNavigate();

  return (
    <div className="scroll-snap-start p-4 flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] transition-transform duration-500 ease-in-out">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center transition-all duration-500 ease-in-out transform hover:scale-105 h-[42rem]">
        <img
          src={department.imageUrl}
          alt={`Image for ${department.name} department`}
          className="w-full h-auto rounded-lg mb-4 object-cover"
          onDragStart={(e) => e.preventDefault()}
        />
        <h3 className="text-2xl font-extrabold mb-4 text-[#0A101E] dark:text-cyan-400 text-center">
          {department.name}
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-300 leading-relaxed">
          {department.description}
        </p>
        <div className="mt-auto pt-4 w-full text-center">
          <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Department Members</h4>
          <button
            onClick={() => navigate(`/members/${encodeURIComponent(department.name)}`)}
            className="w-full bg-[#0A101E] text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition"
          >
            View Members →
          </button>
        </div>
      </div>
    </div>
  );
};


const DepartmentCarousel = () => {
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (scrollRef.current) {
        const card = scrollRef.current.querySelector('.scroll-snap-start');
        if (card) setCardWidth(card.offsetWidth + 32); // +gap between cards
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current && cardWidth) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id='department' className="relative flex flex-col items-center justify-center min-h-screen font-sans overflow-hidden py-6">
      <h2 className="text-5xl font-bold text-white text-center mb-4 mt-8">Departments</h2>

      <button
        onClick={() => scroll('left')}
        className="absolute text-2xl left-2 top-1/2 transform -translate-y-1/2 bg-[#0A101E] text-white p-4 rounded-xl shadow-lg z-10 hover:bg-cyan-500"
      >
        {'<'}
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute text-2xl right-2 top-1/2 transform -translate-y-1/2 bg-[#0A101E] text-white p-4 rounded-xl shadow-lg z-10 hover:bg-cyan-500"
      >
        {'>'}
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-thin px-6 py-4 space-x-8 w-full max-w-[95vw] xl:max-w-7xl scroll-snap-x scroll-snap-mandatory"
      >
        {departments.map((department, index) => (
          <DepartmentCard key={index} department={department} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentCarousel;
