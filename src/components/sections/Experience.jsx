import { useRef } from "react";
import AnimatedCard from "../ui/AnimatedCard";

const Experience = () => {
  const experienceRef = useRef(null);

  const academicExperience = [
    {
      role: "Assistant Professor",
      organization:
        "Department of Computer Engineering, Pimpri Chinchwad College of Engg",
      period: "June 2013 - Present",
    },
    {
      role: "Assistant Professor",
      organization:
        "Department of Computer Science and Engineering, MAE, Alandi, Pune",
      period: "Feb 2013 - May 2013",
    },
    {
      role: "Assistant Professor",
      organization:
        "Department of Information Technology, Siddhant College of Engg., Sudumbare Pune",
      period: "Sept 2011 - Jan 2012",
    },
    {
      role: "Lecturer",
      organization:
        "Department of Computer Engg, Kavikulguru Institute of Technology & Science (KITS), Ramtek, Nagpur",
      period: "Dec 2006 - Aug 2011",
    },
  ];

  const industryExperience = [
    {
      role: "Software Developer",
      organization: "Freelancer",
      period: "One Year",
    },
    {
      role: "Dot Net Programmer",
      organization: "Hubcity Software Pvt. Lmt., Nagpur",
      period: "Projects for Industrial Companies",
    },
  ];

  return (
    <section id="experience" ref={experienceRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">
          Professional Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Academic Experience
            </h3>
            <div className="space-y-6">
              {academicExperience.map((exp, index) => (
                <AnimatedCard key={index} delay={index * 100}>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="text-lg font-bold">{exp.role}</h4>
                    <p className="text-secondary font-medium">
                      {exp.organization}
                    </p>
                    <p className="text-gray-600">{exp.period}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Industry Experience
            </h3>
            <div className="space-y-6">
              {industryExperience.map((exp, index) => (
                <AnimatedCard key={index} delay={index * 100 + 400}>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="text-lg font-bold">{exp.role}</h4>
                    <p className="text-secondary font-medium">
                      {exp.organization}
                    </p>
                    <p className="text-gray-600">{exp.period}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <AnimatedCard delay={600}>
              <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold mb-2">Research Interests</h4>
                <p className="text-gray-700">
                  Emotional Intelligence Using AI based approaches
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
