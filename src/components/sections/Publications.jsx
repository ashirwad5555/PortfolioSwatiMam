import { useState, useRef, useEffect } from "react";

const PublicationItem = ({ title, authors, journal, year, index }) => {
  const [expanded, setExpanded] = useState(false);
  const itemRef = useRef(null);

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
      className="opacity-0 transition-all duration-300"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="card hover-card">
        <div
          className="cursor-pointer flex justify-between items-start"
          onClick={() => setExpanded(!expanded)}
        >
          <h4 className="text-lg font-bold pr-6 text-dark-800">{title}</h4>
          <button className="text-secondary-500 mt-1 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-5 h-5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-80 mt-4" : "max-h-0"}`}
        >
          <div className="border-t border-gray-100 pt-4">
            <p className="text-dark-600 mb-2 flex items-start">
              <span className="font-medium text-dark-700 inline-block min-w-20 mr-2">
                Authors:
              </span>
              <span>{authors}</span>
            </p>
            <p className="text-dark-600 mb-2 flex items-start">
              <span className="font-medium text-dark-700 inline-block min-w-20 mr-2">
                Journal:
              </span>
              <span>{journal}</span>
            </p>
            <p className="text-dark-600 flex items-start">
              <span className="font-medium text-dark-700 inline-block min-w-20 mr-2">
                Year:
              </span>
              <span>{year}</span>
            </p>
          </div>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <div className="badge-primary">{year}</div>
          <div className="text-sm text-primary-600 hover:text-primary-700 cursor-pointer">
            View Publication
          </div>
        </div>
      </div>
    </div>
  );
};

const Publications = () => {
  const publicationsRef = useRef(null);
  const headerRef = useRef(null);
  const [filter, setFilter] = useState("all");

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

  const publications = [
    {
      title: "Camera based Smart Surveillance System-Literature Survey",
      authors: "Swati Chandurkar et al.",
      journal:
        "International Journal of Computer Applications (IJCA) and International Research Journal of Engineering and Technology (IRJET)",
      year: "2020",
      category: "recent",
    },
    {
      title: "Automation Software for Student Monitoring System",
      authors: "Swati Chandurkar et al.",
      journal:
        "International Research Journal of Engineering and Technology (IRJET)",
      year: "2019",
      category: "recent",
    },
    {
      title:
        "System for Prediction of Human Emotions and Depression level with Recommendation of Suitable Therapy",
      authors: "Swati Chandurkar et al.",
      journal: "Asian Journal of Computer Science and Technology",
      year: "2017",
      category: "featured",
    },
    {
      title:
        "Analysis of Human Body Signals for Prediction of Depression Disorder",
      authors: "Swati Chandurkar et al.",
      journal: "I J C T A (SCOPUS INDEX)",
      year: "2016",
      category: "featured",
    },
    {
      title: "Mining: Student Database",
      authors: "Swati Chandurkar et al.",
      journal: "IJIRD",
      year: "2014",
      category: "older",
    },
    {
      title:
        "Implementation of real time bus monitoring and passenger information system",
      authors: "Swati Chandurkar et al.",
      journal: "IJSRP",
      year: "2013",
      category: "older",
    },
    {
      title:
        "Pune Navigator: The Real Time Bus Monitoring And Passenger Information System",
      authors: "Swati Chandurkar et al.",
      journal:
        "International Journal of Engineering Research and Applications (IJERA)",
      year: "2013",
      category: "older",
    },
    {
      title:
        "Corpus based emotion extraction to implement prosody feature in speech synthesis systems",
      authors: "Swati Chandurkar et al.",
      journal:
        "International Journal Of Computer and Electronic Research (IJCER)",
      year: "2012",
      category: "older",
    },
    {
      title: "Emotion Extraction from text",
      authors: "Swati Chandurkar et al.",
      journal:
        "International journals, IJCA, IRT, IJCSA in the proceedings 'MPGINMC 2012'",
      year: "2012",
      category: "older",
    },
    {
      title: "Designing and Recording Emotional Speech Databases",
      authors: "Swati Chandurkar et al.",
      journal:
        "IJCA Proceedings on National Conference on Innovative Paradigms in Engineering and Technology (NCIPET 2012)",
      year: "2012",
      category: "older",
    },
  ];

  const filteredPublications =
    filter === "all"
      ? publications
      : publications.filter((pub) => pub.category === filter);

  return (
    <section
      id="publications"
      ref={publicationsRef}
      className="py-20 bg-gradient-to-b from-light-50 to-light-100"
    >
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h2 className="section-title">Publications</h2>
          <p className="text-dark-600 mt-6 max-w-3xl mx-auto">
            Research publications in international journals and conferences on
            Emotional Intelligence, AI, and related fields
          </p>
          <div className="mt-2 flex justify-center items-center">
            <div className="flex items-center bg-white rounded-lg shadow-sm px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-primary-600 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
              <div className="text-dark-700">
                <span className="font-semibold">62</span> Citations |
                <span className="font-semibold"> 2</span> h-index |
                <span className="font-semibold"> 1</span> i10-index
              </div>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-secondary-600 hover:text-secondary-700 mt-4 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Google Scholar Profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                filter === "all"
                  ? "bg-primary-600 text-white"
                  : "bg-white text-dark-700 hover:bg-light-200"
              }`}
              onClick={() => setFilter("all")}
            >
              All Publications
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                filter === "recent"
                  ? "bg-primary-600 text-white"
                  : "bg-white text-dark-700 hover:bg-light-200"
              }`}
              onClick={() => setFilter("recent")}
            >
              Recent (2019-2023)
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                filter === "featured"
                  ? "bg-primary-600 text-white"
                  : "bg-white text-dark-700 hover:bg-light-200"
              }`}
              onClick={() => setFilter("featured")}
            >
              Featured
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                filter === "older"
                  ? "bg-primary-600 text-white"
                  : "bg-white text-dark-700 hover:bg-light-200"
              }`}
              onClick={() => setFilter("older")}
            >
              2012-2018
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredPublications.map((pub, index) => (
            <PublicationItem
              key={index}
              index={index}
              title={pub.title}
              authors={pub.authors}
              journal={pub.journal}
              year={pub.year}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-6 shadow-elegant inline-block max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Conference Presentations</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">
                    2016 International Conference on Computing Communication
                    Control and Automation, IEEE
                  </h4>
                  <p className="text-dark-600">
                    Paper: "Healing hands for depressed people (d-hh) through
                    analysis of human body signals to predict the level of
                    depression and recommendation of suitable remedy"
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">
                    2015 International Conference on Computing Communication
                    Control and Automation, IEEE
                  </h4>
                  <p className="text-dark-600">
                    Paper: "Technical Support Using Assistive Robotics for
                    PhysicallyChallenged People"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
