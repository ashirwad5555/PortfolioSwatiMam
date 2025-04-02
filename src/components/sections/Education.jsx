import { useRef, useEffect } from "react";

const EducationItem = ({ year, degree, institution, details, index }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`flex opacity-0 transition-opacity duration-500`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex flex-col items-center mr-6">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
        <div className="h-full w-0.5 bg-gradient-to-b from-primary-300 to-secondary-300"></div>
      </div>
      <div className="pb-10">
        <div className="bg-white p-5 rounded-xl shadow-elegant hover:shadow-soft-xl transition-shadow border border-gray-100">
          <div className="flex items-center mb-2">
            <span className="badge-primary mr-2">{year}</span>
            <h3 className="text-xl font-bold gradient-text">{degree}</h3>
          </div>
          <p className="mb-3 text-secondary-600 font-medium">{institution}</p>
          <p className="text-dark-600">{details}</p>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
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

  const educationData = [
    {
      year: "Pursuing",
      degree: "PhD in Computer Science and Engineering",
      institution: "Vallore Institute of Technology, VIT Bhopal",
      details:
        "Research Area: Emotional Intelligence using Artificial Intelligence under the guidance of Dr. M. Ashwin, Sr. Associate Professor.",
    },
    {
      year: "2012",
      degree: "M.Tech in Computer Science and Engineering",
      institution: "RKNEC, Nagpur",
      details:
        "Gold Medalist, 4th rank holder from Nagpur University. Thesis on 'Emotional Speech Database System' under the guidance of Dr. Manoj Chandak.",
    },
    {
      year: "2006",
      degree: "BE in Computer Technology",
      institution: "Nagpur University",
      details:
        "Gold Medalist, 5th rank holder from Nagpur University. Established strong foundational knowledge in computer science and engineering.",
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-light-50 to-light-100"
    >
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className="flex flex-col items-center mb-16 opacity-0"
        >
          <h2 className="section-title text-center">Education</h2>
          <p className="max-w-3xl text-center text-dark-600 mt-6">
            Academic excellence with a consistent record of high achievement and
            gold medals
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Decorative elements */}
          <div className="hidden md:block absolute -left-16 top-1/4 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
          <div className="hidden md:block absolute -right-16 bottom-1/4 w-32 h-32 bg-secondary-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>

          {educationData.map((item, index) => (
            <EducationItem
              key={index}
              index={index}
              year={item.year}
              degree={item.degree}
              institution={item.institution}
              details={item.details}
            />
          ))}

          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            </div>
            <div>
              <div className="p-5">
                <p className="text-lg font-medium text-primary-600">
                  Education Journey Continues...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="bg-white p-6 rounded-xl shadow-elegant max-w-2xl">
            <h3 className="text-xl font-bold mb-4 text-center">
              Academic Achievements
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-secondary-500 mr-3 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>
                  Gold Medalist in M.Tech (CSE) from Nagpur University
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-secondary-500 mr-3 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>
                  Gold Medalist in BE (Computer Technology) from Nagpur
                  University
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-secondary-500 mr-3 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>
                  4th Rank Holder in M.Tech examination from Nagpur University
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-secondary-500 mr-3 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>
                  5th Rank Holder in BE examination from Nagpur University
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-secondary-500 mr-3 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>
                  Multiple certifications in programming and data science from
                  renowned platforms
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
