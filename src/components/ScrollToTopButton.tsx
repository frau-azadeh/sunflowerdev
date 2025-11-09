"use client";

import { memo, useCallback, useEffect, useMemo, useState } from "react";

import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const buttonClass = useMemo(
    () =>
      `${
        isVisible ? "flex" : "hidden"
      } fixed bottom-28 left-12 w-10 h-10 bg-[#ffe082] text-[#56464d] rounded-full shadow-md justify-center items-center cursor-pointer z-10`,
    [isVisible],
  );

  return (
    <button onClick={scrollToTop} className={buttonClass}>
      <FaAngleDoubleUp className="text-lg" />
    </button>
  );
};

export default memo(ScrollToTopButton);
