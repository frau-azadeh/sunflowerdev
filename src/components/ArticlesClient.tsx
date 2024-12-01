"use client";
import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";

interface ArticleData {
    title: string;
    description: string;
    date: string;
    image: string;
    slug: string;
    category: string;
    href: string;
  }
interface ArticlesClientProps {
  articles: ArticleData[];
}

export default function ArticlesClient({ articles }: ArticlesClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl text-center mb-8 mt-20 text-[#56464d]">
        مقالات تخصصی برنامه نویسی :
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-justify">
        {currentArticles.length > 0 ? (
          currentArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              description={article.description}
              date={article.date}
              image={article.image}
              href={`/blog/${article.category}/${article.slug}`}
            />
          ))
        ) : (
          <p className="text-center text-gray-600">به روز رسانی ... </p>
        )}
      </div>
      {articles.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalItems={articles.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
