import React, { useState, useEffect, useRef } from 'react';

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

// The total number of unique department cards
const totalOriginalItems = departments.length;
// We duplicate the array to create a seamless infinite loop
const extendedDepartments = [...departments, ...departments];

// A separate component for each individual department card
const DepartmentCard = ({ department }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    // Stop the carousel from dragging when clicking the button
    e.stopPropagation(); 
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="p-4 flex-shrink-0 w-full md:w-[70%] lg:w-1/2"
    >
      <div
        // Conditionally set the height based on dropdown state
        className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-all duration-500 ease-in-out transform hover:scale-105 ${isDropdownOpen ? 'h-auto' : 'h-[36rem]'}`}
      >
        <img
          src={department.imageUrl}
          alt={`Image for ${department.name} department`}
          className="w-3/4 h-auto rounded-lg mb-4"
          // Prevent default browser behavior for dragging images
          onDragStart={(e) => e.preventDefault()}
        />
        <h3 className="text-2xl font-extrabold mb-4 text-indigo-600 dark:text-indigo-400">
          {department.name}
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-300 leading-relaxed">
          {department.description}
        </p>

        {/* Department Members Section */}
        <div className="mt-auto pt-4 w-full text-center">
            <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Department Members</h4>
            <button
                onClick={toggleDropdown}
                className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg flex justify-between items-center"
            >
                View Members
                <span>{isDropdownOpen ? '▲' : '▼'}</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {department.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="flex flex-col items-center p-2">
                            <img
                                src={member.memberImageUrl}
                                alt={`Image for ${member.name}`}
                                className="w-32 h-40 rounded-lg object-cover mb-2"
                                onDragStart={(e) => e.preventDefault()}
                            />
                            <span className="font-semibold text-gray-700 dark:text-gray-200 text-base">{member.name}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{member.position}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const carouselRef = useRef(null);
  const carouselTrackRef = useRef(null);
  const animationFrameId = useRef();

  // State to manage automatic scrolling and drag events
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Refs to manage inertia and animation
  const translateX = useRef(0);
  const velocity = useRef(0);
  const lastMouseX = useRef(0);

  const scrollSpeed = 2; // Controls the speed of the automatic scroll
  const decelerationRate = 0.95; // Controls how quickly inertia fades
  const inertiaThreshold = 0.8; // Minimum velocity for inertia to continue
  const autoScrollDirection = useRef(1); // 1 for left, -1 for right

  // --- Main Animation Loop ---
  useEffect(() => {
    const animateScroll = () => {
      if (!carouselRef.current || !carouselTrackRef.current) {
        animationFrameId.current = requestAnimationFrame(animateScroll);
        return;
      }
      
      const cardWidth = carouselTrackRef.current.children[0].offsetWidth;
      
      // Check if we are in a dragging state or if there is active inertia
      if (isDragging) {
        // No automatic movement while dragging, all movement is handled by mouse drag
      } 
      else if (Math.abs(velocity.current) > inertiaThreshold) {
        // --- Inertia Logic ---
        velocity.current *= decelerationRate;
        translateX.current += velocity.current;
        
        // Loop the carousel
        if (translateX.current <= -cardWidth * totalOriginalItems) {
            translateX.current += cardWidth * totalOriginalItems;
        }
        if (translateX.current > 0) {
            translateX.current -= cardWidth * totalOriginalItems;
        }
      } 
      else if (!isHovered) {
        // --- Automatic Scrolling Logic with Loop ---
        translateX.current -= scrollSpeed * autoScrollDirection.current;

        // Reset the position to create the infinite loop illusion
        if (autoScrollDirection.current === 1) {
            if (translateX.current <= -cardWidth * totalOriginalItems) {
                translateX.current += cardWidth * totalOriginalItems;
            }
        } else {
            if (translateX.current >= 0) {
                translateX.current -= cardWidth * totalOriginalItems;
            }
        }
      }
      
      // Apply the transform
      carouselTrackRef.current.style.transform = `translateX(${translateX.current}px)`;
      
      animationFrameId.current = requestAnimationFrame(animateScroll);
    };

    animationFrameId.current = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [isHovered, isDragging]);

  // --- Dragging Functionality ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(translateX.current);
    lastMouseX.current = e.pageX;
    // Reset velocity when a new drag starts
    velocity.current = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX;
    
    let newTranslateX = scrollLeft + walk;

    // Calculate instantaneous velocity for inertia
    velocity.current = x - lastMouseX.current;
    lastMouseX.current = x;

    translateX.current = newTranslateX;

    carouselTrackRef.current.style.transform = `translateX(${newTranslateX}px)`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (Math.abs(velocity.current) > inertiaThreshold) {
      if (velocity.current < 0) {
        autoScrollDirection.current = 1; // Dragging left, so auto-scroll should go left
      } else {
        autoScrollDirection.current = -1; // Dragging right, so auto-scroll should go right
      }
    }
  };

  // --- Hover Functionality ---
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleComponentMouseLeave = () => {
    setIsHovered(false);
    if (isDragging) {
      setIsDragging(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans overflow-hidden py-6">
      <div 
        className="relative w-full max-w-full overflow-hidden rounded-3xl shadow-2xl cursor-grab active:cursor-grabbing"
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleComponentMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Horizontal scrolling track. We'll use CSS transform to move this entire track. */}
        <div
          ref={carouselTrackRef}
          className="flex"
        >
          {/* Map through the original array to render each DepartmentCard component */}
          {extendedDepartments.map((department, index) => (
            <DepartmentCard
              key={index}
              department={department}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
