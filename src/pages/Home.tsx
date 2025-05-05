import React, { useState } from "react";
import Projects from "../components/Projects";
import Updates from "../components/Updates";
import About from "../components/About";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"about" | "projects" | "updates">(
    "about"
  );

  const projects = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
    "Project 6",
    "Project 7",
    "Project 8",
  ]; // Replace with your actual project data

  return (
    <div className="text-center p-5">
      <h1 className="text-6xl py-30 font-bold mb-5">Ethan's Workbench</h1>
      <div className="flex justify-center mb-3">
        <button
          onClick={() => setActiveTab("projects")}
          className={`mr-2 px-4 py-2 rounded ${
            activeTab === "projects"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("updates")}
          className={`mr-2 px-4 py-2 rounded ${
            activeTab === "updates"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Latest Updates
        </button>
        <button
          onClick={() => setActiveTab("about")}
          className={`mr-2 px-4 py-2 rounded ${
            activeTab === "about"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          About
        </button>
      </div>
      <hr className="my-5" />
      <div>
        {activeTab === "projects" ? (
          <Projects projects={projects} />
        ) : activeTab === "about" ? (
          <About projects={projects} />
        ) : (
          <Updates projects={projects} />
        )}
      </div>
    </div>
  );
};

export default Home;
