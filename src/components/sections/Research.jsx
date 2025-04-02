import { useRef, useEffect } from "react";
import AnimatedCard from "../ui/AnimatedCard";

const ResearchItem = ({ icon, title, description, index }) => {
  return (
    <AnimatedCard delay={index * 150}>
      <div className="h-full flex flex-col">
        <div className="mb-4 text-accent">{icon}</div>
        <h4 className="text-xl font-bold mb-3">{title}</h4>
        <p className="text-gray-700 flex-grow">{description}</p>
      </div>
    </AnimatedCard>
  );
};

const Research = () => {
  const researchRef = useRef(null);
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

  const researchAreas = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
      title: "Emotional Intelligence",
      description:
        "Researching AI-based approaches to understand and analyze human emotional intelligence patterns and behaviors.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      ),
      title: "Human Language Evolution",
      description:
        "Exploring the patterns and mechanisms in human language development and evolution using AI techniques.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
      title: "Web Social Media",
      description:
        "Analyzing social media data and interactions to uncover patterns in human communication and behavior online.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      ),
      title: "Information Retrieval",
      description:
        "Developing intelligent systems for effective information retrieval and organization from complex data sources.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      ),
      title: "Natural Language Processing",
      description:
        "Creating algorithms and models to enhance computer understanding and processing of human language.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
          />
        </svg>
      ),
      title: "Emotional Speech Analysis",
      description:
        "Studying speech patterns to detect and analyze emotions in spoken language using advanced AI techniques.",
    },
  ];

  const currentProjects = [
    {
      title: "Emotional Intelligence in Teacher-Student Relationships",
      description:
        "Analyzing the role of emotional intelligence in improving educational outcomes and teacher-student dynamics.",
      status: "Ongoing (SPPU Grant Project)",
    },
    {
      title: "Human Body Signal Analysis for Emotion Prediction",
      description:
        "Developing systems to analyze physiological signals for accurate prediction of emotional states.",
      status: "Completed",
    },
  ];

  return (
    <section id="research" ref={researchRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h2 className="section-title">Research Interests</h2>
          <p className="text-gray-700 mt-6 max-w-3xl mx-auto">
            My research focuses on applying Artificial Intelligence approaches
            to understand human emotions, language evolution, and communication
            patterns. I am particularly interested in developing systems that
            can accurately detect and analyze emotions to improve various
            aspects of human-computer interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <ResearchItem
              key={index}
              index={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">
            Current Research Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <AnimatedCard key={index} delay={index * 200 + 600}>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-secondary rounded-full">
                    {project.status}
                  </span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-6">
            Interested in collaborating on research?
          </p>
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
