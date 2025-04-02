import { useRef, useEffect, useState } from "react";

const AnimatedCard = ({ children, delay = 0, reset = false }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const observerRef = useRef(null);

  // Function to start animation
  const startAnimation = () => {
    setIsVisible(false);
    setAnimationComplete(false);

    // Small delay to ensure DOM updates before animation starts
    setTimeout(() => {
      setIsVisible(true);

      // Mark animation as complete after it finishes
      setTimeout(
        () => {
          setAnimationComplete(true);
        },
        500 + parseInt(delay)
      ); // Animation duration + delay
    }, 50);
  };

  // Set up intersection observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          startAnimation();
          // Don't unobserve if we might need to animate again
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (cardRef.current) {
      observerRef.current.observe(cardRef.current);
    }

    return () => {
      if (observerRef.current && cardRef.current) {
        observerRef.current.unobserve(cardRef.current);
      }
    };
  }, []);

  // Handle reset prop to trigger re-animation
  useEffect(() => {
    if (reset && cardRef.current && animationComplete) {
      startAnimation();
    }
  }, [reset]);

  // Key children changes should re-trigger animation
  useEffect(() => {
    // Only re-animate if we've previously completed an animation
    // and the component is currently in view
    if (animationComplete && cardRef.current) {
      const observer = observerRef.current;
      if (observer) {
        observer.unobserve(cardRef.current);
        observer.observe(cardRef.current);
      }
    }
  }, [children]);

  return (
    <div
      ref={cardRef}
      className="transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.95)",
        transitionDelay: `${delay}ms`,
        transitionProperty: "opacity, transform",
        transitionDuration: "0.5s",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
