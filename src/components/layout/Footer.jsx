import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-light-100">
              Prof. Swati Chandurkar
            </h3>
            <p className="mb-4 text-light-300">
              Assistant Professor
              <br />
              Department of Computer Engineering
              <br />
              Pimpri Chinchwad College of Engg.
              <br />
              Pune, India
            </p>
            <div className="flex space-x-3 mt-6">
              <a
                href="https://www.linkedin.com/in/swati-chandurkar-43592672/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-700 hover:bg-primary-600 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                className="w-10 h-10 rounded-full bg-primary-700 hover:bg-primary-600 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-700 hover:bg-primary-600 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-1.288 16.023c-.119.281-.252.533-.409.763-.157.23-.34.447-.55.633-.135.121-.275.214-.425.295-.135.074-.296.135-.473.181-.266.074-.84.154-1.088.166-.371.019-.681.026-1.007.026s-.641-.006-.976-.026c-.246-.012-.821-.092-1.098-.166-.177-.047-.337-.107-.475-.181-.142-.081-.282-.174-.418-.295-.208-.186-.392-.403-.549-.633-.16-.23-.292-.482-.412-.763-.251-.548-.388-1.175-.388-1.827 0-1.285.522-2.441 1.354-3.273.832-.833 1.986-1.354 3.271-1.354 1.282 0 2.44.521 3.27 1.354.833.832 1.354 1.988 1.354 3.273 0 .652-.137 1.279-.388 1.827zm-1.841-4.527c-.662-.663-1.579-1.076-2.591-1.076-1.016 0-1.932.413-2.595 1.076-.662.661-1.075 1.58-1.075 2.594 0 1.015.412 1.932 1.075 2.595.662.662 1.579 1.075 2.595 1.075 1.012 0 1.929-.412 2.591-1.075.662-.662 1.075-1.58 1.075-2.595 0-1.014-.412-1.933-1.075-2.594zm-2.267-1.75c.7 0 1.267.567 1.267 1.267 0 .7-.567 1.267-1.267 1.267-.701 0-1.267-.568-1.267-1.267s.566-1.267 1.267-1.267z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-light-100">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-light-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="text-light-300 hover:text-white transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="text-light-300 hover:text-white transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  to="/teaching"
                  className="text-light-300 hover:text-white transition-colors"
                >
                  Teaching
                </Link>
              </li>
              <li>
                <Link
                  to="/awards"
                  className="text-light-300 hover:text-white transition-colors"
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-light-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-light-100">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-secondary-300 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="text-light-300">
                  swati.chandurkar@pccoepune.org
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-secondary-300 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span className="text-light-300">+91-9970955897</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-secondary-300 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-light-300">
                  Pimpri Chinchwad College of Engineering,
                  <br />
                  Pune, Maharashtra - India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-700 text-center">
          <p className="text-light-400">
            &copy; {currentYear} Prof. Swati Bhutekar Chandurkar. All rights
            reserved.
          </p>
          <p className="mt-2 text-sm text-light-400">
            Last updated: April 2, 2025 | Designed with{" "}
            <span className="text-accent-400">❤</span> by Your Name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
