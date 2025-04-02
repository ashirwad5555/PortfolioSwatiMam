import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL
    if (location.hash) {
      // Get the element with the id that matches the hash (without the #)
      const element = document.getElementById(location.hash.slice(1));

      // If the element exists, scroll to it
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80, // Account for fixed header
            behavior: "smooth",
          });
        }, 0);
      }
    }
  }, [location]);
}
