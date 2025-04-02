import { useRef, useEffect, useState } from "react";
import AnimatedCard from "../ui/AnimatedCard";

const AwardCard = ({ title, organization, date, description, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AnimatedCard delay={index * 100}>
      <div className="border-b border-gray-200 pb-1 mb-2 flex justify-between items-center">
        <h4 className="text-lg font-bold text-primary">{title}</h4>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-secondary focus:outline-none"
          aria-label={
            isExpanded ? "Collapse award details" : "Expand award details"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div className="mb-2 flex justify-between">
        <span className="font-medium">{organization}</span>
        <span className="text-gray-600 text-sm">{date}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="text-gray-700 mt-3">{description}</p>
      </div>
    </AnimatedCard>
  );
};

const Awards = () => {
  const awardsRef = useRef(null);
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

  const awards = [
    {
      title:
        "Innovative Technological Researcher & Dedicated Teaching Professional Award",
      organization:
        "The Society of Innovative Educationalist & Scientific Research Professional Chennai",
      date: "October 29, 2020",
      description:
        "Awarded for contributions to innovative technological research and excellence in teaching practices.",
    },
    {
      title: "Women Researcher Award",
      organization:
        "2nd International Research Awards on Science, Health and Engineering",
      date: "June 10, 2020",
      description:
        "Recognized for outstanding research contributions as a woman researcher in the field of Computer Science and Engineering.",
    },
  ];

  const recognitions = [
    {
      title: "Editorial Board Member",
      organization:
        "Journal of Electrical, Electronics & Computer Engineering Research",
      date: "October 21, 2020",
      description:
        "Serving as an Educational Consultant for the ISSN-2229-9289 journal, recognized by Innovative Scientific Research Professional, Malaysia.",
    },
    {
      title: "Educational Professional Membership",
      organization: "SIESRP",
      date: "October 29, 2020 (Life Member)",
      description:
        "Life member of the Society of Innovative Educationalist & Scientific Research Professional with Registration No. LM 171899468.",
    },
  ];

  const researchGrants = [
    {
      title: "International Workshop on Emotional Intelligence",
      organization: "SPPU, Pune",
      date: "2020",
      description:
        'Received a grant of Rs. 3 Lakhs to organize International Workshop on "The role of Emotional Intelligence in Teacher and Student Relationship" in collaboration with Dr. Jayant Umale.',
    },
    {
      title: "Human Body Signal Analysis Project",
      organization: "Research Grant",
      date: "2019",
      description:
        'Completed research project on "To Analyze the Human body signals and predict the human emotions" with a grant of Rs. 40,000/- in collaboration with Dr. Jayant Umale.',
    },
  ];

  const copyrights = [
    {
      title: "The system on Early heart attack detection",
      organization: "Copyright Office, India",
      date: "2019",
      description: "Registration number: SW-12472/2019",
    },
    {
      title: "Designing and Recording emotional speech database system",
      organization: "Copyright Office, India",
      date: "2016",
      description: "Diary Number: 8102/2016-CO/SW",
    },
  ];

  return (
    <section id="awards" ref={awardsRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h2 className="section-title">Awards & Achievements</h2>
          <p className="text-gray-700 mt-6 max-w-3xl mx-auto">
            Recognition for contributions to research, teaching and academics in
            the field of Computer Science and Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-accent mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                />
              </svg>
              Awards
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <AwardCard
                  key={index}
                  index={index}
                  title={award.title}
                  organization={award.organization}
                  date={award.date}
                  description={award.description}
                />
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6 mt-12 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-accent mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              Professional Recognitions
            </h3>
            <div className="space-y-6">
              {recognitions.map((recognition, index) => (
                <AwardCard
                  key={index}
                  index={index + awards.length}
                  title={recognition.title}
                  organization={recognition.organization}
                  date={recognition.date}
                  description={recognition.description}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-accent mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
              Research Grants
            </h3>
            <div className="space-y-6">
              {researchGrants.map((grant, index) => (
                <AwardCard
                  key={index}
                  index={index + awards.length + recognitions.length}
                  title={grant.title}
                  organization={grant.organization}
                  date={grant.date}
                  description={grant.description}
                />
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6 mt-12 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-accent mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              Copyrights
            </h3>
            <div className="space-y-6">
              {copyrights.map((copyright, index) => (
                <AwardCard
                  key={index}
                  index={
                    index +
                    awards.length +
                    recognitions.length +
                    researchGrants.length
                  }
                  title={copyright.title}
                  organization={copyright.organization}
                  date={copyright.date}
                  description={copyright.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'NPTEL Certification on "Programming, Data structures and algorithms using Python" with score of 95%, IIT Bombay',
              'NPTEL certification on "Pogramming in C++" with Elite Grade',
              'Coursera Certification on "Getting Started with Python"',
              'Coursera Certification on "The Data Scientist\'s Toolbox"',
              'Certification on "Principles of Project Management" with 83% from Open2study',
              "DB2-9.1, Exam 730 – certified by IBM, Bangalore",
            ].map((cert, index) => (
              <AnimatedCard key={index} delay={index * 100 + 800}>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-secondary mt-1 mr-2 flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p className="text-gray-700">{cert}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
