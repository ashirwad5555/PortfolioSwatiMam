import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add("animate-slide-right");
            }
            if (entry.target === contentRef.current) {
              entry.target.classList.add("animate-fade-in");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div ref={imageRef} className="opacity-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20 rounded-lg"></div>
              <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-lg font-medium text-gray-600">
                  Professor's Photo
                </div>
              </div>

              <div className="absolute -right-4 -bottom-4 p-4 bg-white rounded-lg shadow-lg">
                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/in/swati-chandurkar-43592672/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="opacity-0">
            <h3 className="text-2xl font-bold mb-4">Brief Biography</h3>
            <p className="text-gray-700 mb-6">
              Presently, I am working as an Assistant Professor in the
              Department of Computer Engineering, Pimpri Chinchwad College of
              Engg, Pune. Prior to this, I was working as a Assistant Professor
              in the Dept. of Computer Engg, MAE, Alandi Pune. I had been part
              of Kavikulguru Institute of Science & Technology, Ramtek, Nagpur
              as an Lecturer for about 4 years.
            </p>
            <p className="text-gray-700 mb-6">
              Currently, I am Pursuing my PhD in CSE from Vallore Institute of
              technology, (VIT, Bhopal) under the guidance of Dr. M. Ashwin, Sr.
              Associate Professor, VIT Bhopal. My research is based on Emotional
              Intelligence of human being.
            </p>
            <p className="text-gray-700">
              I received my M.Tech from the Department of Computer Science and
              Engineering, RKNEC, Nagpur with a thesis on "Emotional Speech
              Database System" under the guidance of Dr. Manoj Chandak,
              Professor & Head, RKNEC, Nagpur. My main research interests center
              around applying Artificial Intelligence approaches to different
              problems in (a) human language evolution and change, (b) web
              social media, (c) information retrieval and (d) natural language
              processing.
            </p>

            <div className="mt-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="font-medium">Email:</span>
                </div>
                <span className="text-gray-700">
                  swati.chandurkar@pccoepune.org
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span className="font-medium">Phone:</span>
                </div>
                <span className="text-gray-700">+91-9970955897</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
