import React from "react";
import { Link } from "react-router-dom";
import Publications from "../components/sections/Publications";

const PublicationsPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications</h1>
          <div className="flex items-center text-sm">
            <Link to="/" className="hover:text-light-200 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Publications</span>
          </div>
        </div>
      </div>
      <Publications />
    </>
  );
};

export default PublicationsPage;
