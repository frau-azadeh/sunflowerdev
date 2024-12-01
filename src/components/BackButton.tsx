"use client"
import { useEffect, useState } from "react";

const BackButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={goBack}
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed left-5 bottom-56 p-2 text-[#56464d] bg-[#ffe082] rounded-md text-base transition-opacity duration-300 z-15`}
    >
      صفحه قبل
    </button>
  );
};

export default BackButton;