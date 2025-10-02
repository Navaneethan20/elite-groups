import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`
        fixed bottom-6 left-6 
        transition-opacity duration-500 
        ${visible ? "opacity-50" : "opacity-0 pointer-events-none"}
      `}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          p-2 sm:p-3 md:p-4 rounded-full 
          bg-gray-500 text-white 
          shadow-lg border border-gray-300 
          hover:bg-gray-600 
          transition-all cursor-pointer 
          flex items-center justify-center
        "
        aria-label="Back to top"
      >
        {/* Arrow Up Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
