import { useState, useRef, useEffect } from "react";

// This component now handles its own animation
const CourseCard = ({ title, description, icon, index, filterChanged }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    // Reset visibility when filter changes
    if (filterChanged) {
      setIsVisible(false);

      // Small delay before starting animation for filtered items
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, index * 100);

      return () => clearTimeout(timer);
    }
  }, [filterChanged, index]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay based on index for staggered animation
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 transform"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease-out ${index * 100}ms, transform 0.5s ease-out ${index * 100}ms`,
      }}
    >
      <div className="flex space-x-4 h-full">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">{title}</h4>
          <p className="text-gray-700">
            {description ||
              "Core course covering fundamental concepts and advanced applications in computer science."}
          </p>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const coursesRef = useRef(null);
  const headerRef = useRef(null);
  const [filter, setFilter] = useState("all");
  const [headerVisible, setHeaderVisible] = useState(false);
  const [filterChanged, setFilterChanged] = useState(false);

  // Handle filter changes
  const handleFilterChange = (newFilter) => {
    if (filter !== newFilter) {
      setFilter(newFilter);
      setFilterChanged(true);

      // Reset the filter changed flag after animations would be complete
      setTimeout(() => setFilterChanged(false), 800);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const courseData = [
    {
      title: "Data Structures and Algorithms",
      description:
        "Study of fundamental data structures and algorithms with implementation in various programming languages.",
      category: "core",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
          />
        </svg>
      ),
    },
    {
      title: "Artificial Intelligence",
      description:
        "Introduction to AI concepts, problem-solving methods, knowledge representation, and machine learning techniques.",
      category: "advanced",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      ),
    },
    {
      title: "Object-Oriented Programming Using C++ and JAVA",
      description:
        "Object-oriented programming principles with practical implementation in C++ and Java programming languages.",
      category: "core",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
          />
        </svg>
      ),
    },
    {
      title: "Principles of Programming Languages",
      description:
        "Study of syntax, semantics, and pragmatics of programming languages with comparative analysis.",
      category: "core",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
    },
    {
      title: "Distributed Computing",
      description:
        "Principles and techniques for distributed systems design, implementation, and management.",
      category: "advanced",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
    },
    {
      title: "Geographical Information System",
      description:
        "Introduction to GIS concepts, spatial data management, and analysis techniques.",
      category: "specialized",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
          />
        </svg>
      ),
    },
    {
      title: "IT Management",
      description:
        "Principles of IT resource management, project planning, and strategic technology alignment.",
      category: "specialized",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      ),
    },
  ];

  const filteredCourses =
    filter === "all"
      ? courseData
      : courseData.filter((course) => course.category === filter);

  return (
    <section id="courses" ref={coursesRef} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-opacity duration-500 ease-in-out ${headerVisible ? "opacity-100" : "opacity-0"}`}
        >
          <h2 className="section-title">Courses Taught</h2>
          <p className="text-gray-700 mt-6 max-w-3xl mx-auto">
            A comprehensive list of courses I have taught throughout my academic
            career, covering fundamental concepts to advanced topics in computer
            science and engineering.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg shadow-sm" role="group">
            <button
              type="button"
              className={`px-5 py-2.5 text-sm font-medium border border-gray-200 rounded-l-lg transition-all ${
                filter === "all"
                  ? "bg-primary text-blue-600 border-primary font-bold"
                  : "bg-white text-gray-700 hover:bg-gray-50 hover:text-primary"
              }`}
              onClick={() => handleFilterChange("all")}
            >
              All Courses
            </button>
            <button
              type="button"
              className={`px-5 py-2.5 text-sm font-medium border-t border-b border-gray-200 transition-all ${
                filter === "core"
                  ? "bg-primary text-blue-600 border-primary font-bold"
                  : "bg-white text-gray-700 hover:bg-gray-50 hover:text-primary"
              }`}
              onClick={() => handleFilterChange("core")}
            >
              Core
            </button>
            <button
              type="button"
              className={`px-5 py-2.5 text-sm font-medium border-t border-b border-gray-200 transition-all ${
                filter === "advanced"
                  ? "bg-primary text-blue-600 border-primary font-bold"
                  : "bg-white text-gray-700 hover:bg-gray-50 hover:text-primary"
              }`}
              onClick={() => handleFilterChange("advanced")}
            >
              Advanced
            </button>
            <button
              type="button"
              className={`px-5 py-2.5 text-sm font-medium border border-gray-200 rounded-r-lg transition-all ${
                filter === "specialized"
                  ? "bg-primary text-blue-600 border-primary font-bold"
                  : "bg-white text-gray-700 hover:bg-gray-50 hover:text-primary"
              }`}
              onClick={() => handleFilterChange("specialized")}
            >
              Specialized
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={`${course.title}-${index}`}
              index={index}
              title={course.title}
              description={course.description}
              icon={course.icon}
              filterChanged={filterChanged}
            />
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-800">
            Teaching Philosophy
          </h3>
          <div className="text-gray-700">
            <p className="mb-4">
              I believe in a student-centered approach to teaching that
              encourages critical thinking, problem-solving skills, and
              practical application of concepts. My teaching methodology
              combines traditional lectures with interactive sessions, hands-on
              projects, and real-world case studies to provide a comprehensive
              learning experience.
            </p>
            <p>
              Through my courses, I aim to not only impart technical knowledge
              but also foster creativity, innovation, and ethical awareness
              among students, preparing them for the challenges and
              opportunities in the rapidly evolving field of computer
              engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
