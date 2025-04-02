import React from "react";
import { Link } from "react-router-dom";
import Courses from "../components/sections/Courses";

const TeachingPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Teaching</h1>
          <div className="flex items-center text-sm">
            <Link to="/" className="hover:text-light-200 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Teaching</span>
          </div>
        </div>
      </div>
      <Courses />
    </>
  );
};

export default TeachingPage;
