import { useRef, useState } from "react";
import AnimatedCard from "../ui/AnimatedCard";

const MaterialCard = ({
  title,
  description,
  fileType,
  fileSize,
  downloadLink,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedCard delay={index * 100}>
      <div
        className={`h-full transition-all duration-300 ${
          isHovered ? "transform -translate-y-2" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            {fileType === "pdf" && (
              <div className="w-12 h-14 bg-red-100 rounded-md flex flex-col items-center justify-center text-red-600">
                <span className="text-xs font-bold">PDF</span>
              </div>
            )}
            {fileType === "ppt" && (
              <div className="w-12 h-14 bg-orange-100 rounded-md flex flex-col items-center justify-center text-orange-600">
                <span className="text-xs font-bold">PPT</span>
              </div>
            )}
            {fileType === "doc" && (
              <div className="w-12 h-14 bg-blue-100 rounded-md flex flex-col items-center justify-center text-blue-600">
                <span className="text-xs font-bold">DOC</span>
              </div>
            )}
            {fileType === "zip" && (
              <div className="w-12 h-14 bg-purple-100 rounded-md flex flex-col items-center justify-center text-purple-600">
                <span className="text-xs font-bold">ZIP</span>
              </div>
            )}
          </div>

          <div className="flex-grow">
            <h4 className="text-lg font-bold mb-1">{title}</h4>
            <p className="text-gray-700 text-sm mb-2">{description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{fileSize}</span>
              <a
                href={downloadLink}
                className="text-secondary hover:text-primary transition-colors flex items-center text-sm"
              >
                Download
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

const LearningMaterial = () => {
  const materialsRef = useRef(null);
  const [currentCategory, setCurrentCategory] = useState("all");

  const materialCategories = [
    { id: "all", name: "All Materials" },
    { id: "dsa", name: "Data Structures & Algorithms" },
    { id: "ai", name: "Artificial Intelligence" },
    { id: "oop", name: "Object-Oriented Programming" },
    { id: "ppl", name: "Programming Languages" },
  ];

  const studyMaterials = [
    {
      title: "Introduction to Data Structures",
      description:
        "Basic concepts and implementations of arrays, linked lists, stacks, and queues",
      fileType: "pdf",
      fileSize: "2.4 MB",
      downloadLink: "#",
      category: "dsa",
    },
    {
      title: "Algorithms Analysis and Design",
      description:
        "Comprehensive study of algorithm complexity, design techniques, and optimization",
      fileType: "pdf",
      fileSize: "3.8 MB",
      downloadLink: "#",
      category: "dsa",
    },
    {
      title: "AI Fundamentals and Applications",
      description:
        "Introduction to artificial intelligence concepts, methods, and practical applications",
      fileType: "ppt",
      fileSize: "5.2 MB",
      downloadLink: "#",
      category: "ai",
    },
    {
      title: "Machine Learning Algorithms",
      description:
        "Supervised and unsupervised learning algorithms with practical examples",
      fileType: "pdf",
      fileSize: "4.1 MB",
      downloadLink: "#",
      category: "ai",
    },
    {
      title: "C++ Programming Examples",
      description:
        "Collection of code examples demonstrating object-oriented programming in C++",
      fileType: "zip",
      fileSize: "1.8 MB",
      downloadLink: "#",
      category: "oop",
    },
    {
      title: "Java Programming Guide",
      description:
        "Comprehensive guide to Java programming language and object-oriented concepts",
      fileType: "pdf",
      fileSize: "6.3 MB",
      downloadLink: "#",
      category: "oop",
    },
    {
      title: "Programming Language Paradigms",
      description:
        "Comparative analysis of programming language paradigms and their applications",
      fileType: "doc",
      fileSize: "1.5 MB",
      downloadLink: "#",
      category: "ppl",
    },
  ];

  const filteredMaterials =
    currentCategory === "all"
      ? studyMaterials
      : studyMaterials.filter(
          (material) => material.category === currentCategory
        );

  return (
    <section
      id="learning-material"
      ref={materialsRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Learning Materials</h2>

        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-4">
          <div className="flex space-x-2">
            {materialCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 font-medium ${
                  currentCategory === category.id
                    ? "bg-primary-600 text-white shadow-md ring-2 ring-primary-300"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-primary-700"
                }`}
                onClick={() => setCurrentCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material, index) => (
            <MaterialCard
              key={index}
              index={index}
              title={material.title}
              description={material.description}
              fileType={material.fileType}
              fileSize={material.fileSize}
              downloadLink={material.downloadLink}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="btn-secondary inline-flex items-center">
            Browse All Learning Materials
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LearningMaterial;
