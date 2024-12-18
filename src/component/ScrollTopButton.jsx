import React, { useState } from "react";
const ScrollToTopButton = () => {
   
     const [showScrollTop, setShowScrollTop] = useState(false);
    if (!showScrollTop) return null;

    return (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 
          bg-blue-600 text-white 
          p-3 rounded-full shadow-lg 
          hover:bg-blue-700
          transition transform hover:scale-110
          animate-bounce"
        aria-label="Scroll to top"
      >
        <ArrowUp />
      </button>
    );
  };

  export default ScrollToTopButton