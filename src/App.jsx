import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import useScrollToHash from "./hooks/useScrollToHash";

// Page components
import HomePage from "./pages/HomePage";
import ResearchPage from "./pages/ResearchPage";
import PublicationsPage from "./pages/PublicationsPage";
import TeachingPage from "./pages/TeachingPage";
import AwardsPage from "./pages/AwardsPage";
import MaterialsPage from "./pages/MaterialsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const location = useLocation();

  // Custom hook to handle scrolling to hash links
  useScrollToHash();

  useEffect(() => {
    // Scroll to top when changing routes, but not when there's a hash in the URL
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="flex flex-col min-h-screen bg-light-50">
      {location.pathname !== "/404" && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {location.pathname !== "/404" && <Footer />}
      <ScrollToTop />
    </div>
  );
};

export default App;
