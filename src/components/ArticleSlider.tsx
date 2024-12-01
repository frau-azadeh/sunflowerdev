"use client"
import React, { useEffect, useState } from 'react';
import Slider, { Settings, CustomArrowProps } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Image from 'next/image';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

interface Article {
    slug: string;
    image: string;
    title: string;
    description: string;
    date: string;
    link: string;
    category:string;
}

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute top-0 left-0 bg-white text-[#56464d] rounded-full p-2 shadow-md hover:bg-[#ffe082]"
    >
        <FaAngleDoubleLeft />
    </button>
);

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute top-0 right-0 bg-white text-[#56464d] rounded-full p-2 shadow-md hover:bg-[#ffe082]"
    >
        <FaAngleDoubleRight />
    </button>
);

const ArticleSlider: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get("https://api.mockfly.dev/mocks/ef8e4ba5-5dc1-4b36-9bca-5f59afb45ebe/article");

                const articlesData = Array.isArray(response.data) ? response.data : response.data.articles;

                if (Array.isArray(articlesData)) {
                    setArticles(articlesData.slice(-6));
                } else {
                    console.error("داده‌های دریافتی از API به صورت آرایه نیست.");
                }
            } catch (error) {
                console.error("خطا در دریافت مقالات:", error);
            }
        };

        fetchArticles();
    }, []);

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <PrevArrow />, 
        nextArrow: <NextArrow />, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="mt-20 px-4">
            <Slider {...settings} className="relative">
                {articles.map((article) => (
                    <div key={article.slug} className="p-4">
                        <div className="bg-white rounded-lg shadow-lg mt-10 p-4 text-right">
                            <div className="relative overflow-hidden rounded-md mb-4 ">
                                <Image
                                    width={100}
                                    height={100} 
                                    src={article.image} 
                                    alt={article.title} 
                                    className="w-full h-auto transform transition-transform duration-200 hover:scale-110" 
                                />
                            </div>
                            <div >
                                <h3 className="text-lg  text-[#56464d] uppercase mb-2"> {article.title}</h3>
                                <p style={{textAlign:"justify", direction:"rtl"}} className="text-[#56464d] leading-6 mb-4  ">{article.description}</p>
                                <span className="text-gray-500 text-sm flex items-center justify-end">
                                    <i className="fa fa-clock-o ml-2 text-gray-400 "></i>{article.date}
                                </span>
                                <a 
                                    href={`/blog/${article.category}/${article.slug}`} 
                                    className="inline-block mt-4 px-4 py-2 text-xs  text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
                                >
                                    ادامه مطلب
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ArticleSlider;