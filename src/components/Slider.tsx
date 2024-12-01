"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: '/images/slider/header.jpeg',
    title: 'اسلاید ۱',
    description: 'توضیحات اسلاید ۱',
  },
  {
    image: '/images/slider/header1.jpeg',
    title: 'اسلاید ۲',
    description: 'توضیحات اسلاید ۲',
  },
  {
    image: '/images/slider/header3.jpeg',
    title: 'اسلاید ۳',
    description: 'توضیحات اسلاید ۳',
  },
  {
    image: '/images/slider/header4.jpeg',
    title: 'اسلاید 4',
    description: 'توضیحات اسلاید 4',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <Image
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          width={800}
          height={600}
          className="w-full  object-cover lg:h-screen md:h-72 "
        />
       
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#ffe082] text-[#56464d] px-3 py-1 rounded-full font-vazir"
      >
        <FaAngleDoubleLeft className='h-6 w-6'/>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#ffe082] text-[#56464d] px-3 py-1 rounded-full font-vazir"
      >
       <FaAngleDoubleRight className="h-6 w-6"/>
      </button>
    </div>
  );
};

export default Slider;