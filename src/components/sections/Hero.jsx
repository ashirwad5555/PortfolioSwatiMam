import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-b from-primary-50 to-transparent opacity-60"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div
          className="absolute top-1/2 right-0 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="hidden md:block absolute top-20 right-20 w-16 h-16 border-4 border-primary-200 rounded-full animate-float"></div>
        <div
          className="hidden md:block absolute bottom-32 left-20 w-12 h-12 border-4 border-secondary-200 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="hidden md:block absolute top-1/3 left-1/4 w-8 h-8 border-4 border-accent-200 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-10 z-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div
            ref={titleRef}
            className="max-w-2xl lg:max-w-xl opacity-0 lg:mr-10"
          >
            <div className="mb-4">
              <span className="bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                Assistant Professor & PhD Scholar
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Prof.{" "}
              <span className="gradient-text">Swati Bhutekar Chandurkar</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-dark-600 mb-8">
              Department of Computer Engineering, <br />
              Pimpri Chinchwad College of Engineering
            </h2>
            <p className="text-lg opacity-80 mb-10 max-w-lg">
              Specializing in Emotional Intelligence using AI-based approaches,
              with research focusing on applying Artificial Intelligence to
              human language evolution and natural language processing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link to="/research" className="btn-outline">
                Explore Research
              </Link>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 w-full max-w-md animation-delay-300 animate-fade-in">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-100 rounded-full mix-blend-multiply filter blur"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent-100 rounded-full mix-blend-multiply filter blur"></div>

              <div className="bg-white shadow-elegant rounded-xl p-2 relative">
                <div className="bg-gradient-to-br from-primary-100 to-light-100 rounded-lg p-6 relative overflow-hidden">
                  {/* Profile image placeholder - replace with actual image */}
                  <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-md">
                    <div className="w-full h-full bg-primary-200 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-24 h-24 text-primary-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Stats/Quick info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur rounded-lg p-3 text-center">
                      <div className="text-primary-600 font-bold text-2xl">
                        15+
                      </div>
                      <div className="text-sm text-dark-600">
                        Years Experience
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur rounded-lg p-3 text-center">
                      <div className="text-primary-600 font-bold text-2xl">
                        60+
                      </div>
                      <div className="text-sm text-dark-600">Citations</div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://www.linkedin.com/in/swati-chandurkar-43592672/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/swat.cat.79/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                      </svg>
                    </a>
                    <a
                      href="mailto:swati.chandurkar@pccoepune.org"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Accent Shape */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent-500 rounded-md rotate-12"></div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary-500 rounded-md rotate-6"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link
          to="/#about"
          className="text-dark-500 hover:text-dark-700 transition-colors"
        >
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
