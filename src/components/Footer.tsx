"use client"
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithubSquare, FaPhoneSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import ContactForm from "./ContactForm"; 

interface ArticleData {
  title: string;
  slug: string;
  category: string;
}

const Footer: React.FC = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://api.mockfly.dev/mocks/ef8e4ba5-5dc1-4b36-9bca-5f59afb45ebe/article"
        );
        const data = await response.json();
        setArticles(data.articles.slice(0, 4));
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <footer className="bg-[#56464d] pt-20 pb-10 pr-10 pl-10 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Skills Section */}
          <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
            <div>
              <h4 className="text-lg font-bold uppercase mb-6 border-b-2 pb-2">
                مهارتهای من :
              </h4>
              <ul className="space-y-2">
                {[
                  "HTML",
                  "TAILWINDCSS",
                  "CSS",
                  "JAVASCRIPT",
                  "TYPESCRIPT",
                  "REACT",
                  "REDUX",
                  "NEXT",
                  "PHP",
                ].map((skill) => (
                  <li key={skill} className="text-sm capitalize">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dynamic Articles Section */}
          <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
            <div>
              <h4 className="text-lg font-bold uppercase mb-6 border-b-2 pb-2">
                مقالات من :   
              </h4>
              <ul className="space-y-2">
                {articles.length > 0 ? (
                  articles.map((article) => (
                    <li key={article.slug} className="text-sm capitalize">
                      <Link className="hover:text-blue-400" href={`/blog/${article.category}/${article.slug}`}>
                        {article.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>در حال بارگذاری مقالات...</li>
                )}
              </ul>
            </div>
          </div>

          {/* Social Media Links and Contact Form */}
          <div className="w-full sm:w-1/3 px-4">
            <h4 className="text-lg font-bold uppercase mb-6 border-b-2 pb-2">
              راههای ارتباطی با من : 
            </h4>
            <ContactForm /> 
            <div>
              <ul className="flex space-x-8 mt-6">
                <li className="pl-8">
                  <a
                    href="https://www.linkedin.com/in/azadeh-sharifi-soltani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/frau-azadeh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl"
                  >
                    <FaGithubSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/frau_azadeh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a href="tel:09012764435" className="text-white text-2xl">
                    <FaPhoneSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mt-12 text-center border-t border-white pt-8">
          <p className="text-sm">
          🌻 azadeh sharifi soltani 🌻
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
