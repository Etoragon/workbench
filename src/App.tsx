import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import Home from "./pages/Home";
import publicResources from "./public-resources.json";

/**
 * This function returns the main page of the website, to include functionality for the sidebar
 * as well as the main content
 *
 * @returns Main page to be displayed on website housing homepage
 *
 * @author Ethan Patten
 * @version 05/05/2025
 */
function App() {
  // Keep track of and setting sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      {/** Define outermost box size (view height/width) */}
      <div className="flex flex-col h-[100vh] w-[100vw] relative">
        {/** Our navbar will take up 10% of screen */}
        <div className="flex w-[100%] h-[10%]">
          <NavBar setShowSidebar={setIsSidebarOpen} />
        </div>

        {/** Define the sidebar */}
        {isSidebarOpen && (
          <div>
            <div className="fixed top-0 left-0 h-full w-[300px] bg-white shadow-lg z-50 transform transition-transform duration-300">
              <div className="p-6 flex flex-col h-full justify-center">
                <ul className="space-y-10 px-8 text-left">
                  <li className="text-3xl font-semibold hover:cursor-pointer">
                    <a
                      href={publicResources["Github-Link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="text-3xl font-semibold hover:cursor-pointer">
                    Live Sites
                  </li>
                  <li className="text-3xl font-semibold hover:cursor-pointer">
                    <a
                      href={publicResources["ORCiD-Link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      ORCiD-Link
                    >
                      Publications
                    </a>
                  </li>
                  <li className="text-3xl font-semibold hover:cursor-pointer">
                    Discussion
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="fixed top-0 left-0 h-full w-full shadow-lg z-49 transform transition-transform duration-300"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          </div>
        )}

        {/** From the route, get what page should be displayed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
