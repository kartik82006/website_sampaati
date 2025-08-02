import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const departments = [
  {
    name: 'Engineering',
    description: 'Our engineering team builds and maintains all the core technology. They are the backbone of our digital infrastructure, constantly innovating and solving complex problems to ensure our products are robust and scalable.',
    imageUrl: 'https://placehold.co/400x200/4F46E5/FFFFFF?text=Engineering',
    members: [
      { name: 'Alice Johnson', position: 'Software Engineer', memberImageUrl: 'https://placehold.co/100x100/A0B9D6/FFFFFF?text=AJ' },
      { name: 'Bob Williams', position: 'Senior Developer', memberImageUrl: 'https://placehold.co/100x100/F5D7A1/FFFFFF?text=BW' },
      { name: 'Charlie Davis', position: 'DevOps Engineer', memberImageUrl: 'https://placehold.co/100x100/D0B8E1/FFFFFF?text=CD' },
    ]
  },
  {
    name: 'Marketing',
    description: 'The marketing team drives brand awareness and customer engagement. They craft compelling stories, manage social media campaigns, and analyze market trends to connect with our audience and grow our community.',
    imageUrl: 'https://placehold.co/400x200/4F46E5/FFFFFF?text=Marketing',
    members: [
      { name: 'David Smith', position: 'Marketing Manager', memberImageUrl: 'https://placehold.co/100x100/A0B9D6/FFFFFF?text=DS' },
      { name: 'Eve Brown', position: 'Content Strategist', memberImageUrl: 'https://placehold.co/100x100/F5D7A1/FFFFFF?text=EB' },
      { name: 'Frank White', position: 'Social Media Specialist', memberImageUrl: 'https://placehold.co/100x100/D0B8E1/FFFFFF?text=FW' },
    ]
  },
  {
    name: 'Product Design',
    description: 'Product design focuses on creating intuitive and beautiful user experiences. They work closely with users to understand their needs, and then design interfaces that are not only functional but also delightful to interact with.',
    imageUrl: 'https://placehold.co/400x200/4F46E5/FFFFFF?text=Product+Design',
    members: [
      { name: 'Grace Wilson', position: 'UX/UI Designer', memberImageUrl: 'https://placehold.co/100x100/A0B9D6/FFFFFF?text=GW' },
      { name: 'Heidi Green', 'position': 'Product Designer', memberImageUrl: 'https://placehold.co/100x100/F5D7A1/FFFFFF?text=HG' },
      { name: 'Ivan Turner', 'position': 'Research Lead', memberImageUrl: 'https://placehold.co/100x100/D0B8E1/FFFFFF?text=IT' },
    ]
  },
  {
    name: 'Human Resources',
    description: 'HR is dedicated to fostering a positive and productive work environment. They handle recruitment, employee relations, and professional development, ensuring our team members are supported, motivated, and happy.',
    imageUrl: 'https://placehold.co/400x200/4F46E5/FFFFFF?text=Human+Resources',
    members: [
      { name: 'Judy Hall', position: 'HR Manager', memberImageUrl: 'https://placehold.co/100x100/A0B9D6/FFFFFF?text=JH' },
      { name: 'Karl Miller', position: 'Recruitment Specialist', memberImageUrl: 'https://placehold.co/100x100/F5D7A1/FFFFFF?text=KM' },
      { name: 'Laura Clark', position: 'HR Generalist', memberImageUrl: 'https://placehold.co/100x100/D0B8E1/FFFFFF?text=LC' },
    ]
  },
  {
    name: 'Sales',
    description: 'The sales department is responsible for generating revenue and building client relationships. They are experts in understanding customer needs and providing tailored solutions that showcase the value of our offerings.',
    imageUrl: 'https://placehold.co/400x200/4F46E5/FFFFFF?text=Sales',
    members: [
      { name: 'Mike Evans', position: 'Sales Lead', memberImageUrl: 'https://placehold.co/100x100/A0B9D6/FFFFFF?text=ME' },
      { name: 'Nancy King', position: 'Account Executive', memberImageUrl: 'https://placehold.co/100x100/F5D7A1/FFFFFF?text=NK' },
      { name: 'Oscar Lee', position: 'Business Development', memberImageUrl: 'https://placehold.co/100x100/D0B8E1/FFFFFF?text=OL' },
    ]
  },
  {
    name: 'Customer Support',
    description: 'Customer support is the voice of our company, helping users with any questions or issues they may have. They provide timely and friendly assistance, turning challenges into opportunities to build trust and loyalty.',
    imageUrl: 'https://placehold.co/400x200/4F46E5/FFFFFF?text=Customer+Support',
    members: [
      { name: 'Peter Scott', position: 'Support Manager', memberImageUrl: 'https://placehold.co/100x100/A0B9D6/FFFFFF?text=PS' },
      { name: 'Quinn Adams', position: 'Customer Representative', memberImageUrl: 'https://placehold.co/100x100/F5D7A1/FFFFFF?text=QA' },
      { name: 'Rachel Baker', position: 'Support Specialist', memberImageUrl: 'https://placehold.co/100x100/D0B8E1/FFFFFF?text=RB' },
    ]
  },
];



const DepartmentCard = ({ department }) => {
  const navigate = useNavigate();

  return (
    <div className="scroll-snap-start p-4 flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] transition-transform duration-500 ease-in-out">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center transition-all duration-500 ease-in-out transform hover:scale-105 h-[36rem]">
        <img
          src={department.imageUrl}
          alt={`Image for ${department.name} department`}
          className="w-full h-auto rounded-lg mb-4 object-cover"
          onDragStart={(e) => e.preventDefault()}
        />
        <h3 className="text-2xl font-extrabold mb-4 text-indigo-600 dark:text-indigo-400 text-center">
          {department.name}
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-300 leading-relaxed">
          {department.description}
        </p>
        <div className="mt-auto pt-4 w-full text-center">
          <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Department Members</h4>
          <button
            onClick={() => navigate(`/members/${encodeURIComponent(department.name)}`)}
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
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
    <div className="relative flex flex-col items-center justify-center min-h-screen font-sans overflow-hidden py-6">
      <h2 className="text-5xl font-bold text-white text-center mb-4 mt-8">Departments</h2>

      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full shadow-lg z-10 hover:bg-indigo-700"
      >
        ◀
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full shadow-lg z-10 hover:bg-indigo-700"
      >
        ▶
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
