"use client";
import { useEffect, useState } from "react";
import ArticleCard from "@/components/ArticleCard";

interface ArticleData {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  category: string;
}

interface CategoryClientProps {
  articles: ArticleData[];
  category: string;
}

export default function CategoryClient({
  articles,
  category,
}: CategoryClientProps) {
  const [filteredArticles, setFilteredArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    if (category && articles.length > 0) {
      const filtered = articles.filter(
        (article) => article.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredArticles(filtered);
    }
  }, [category, articles]);

  return (
    <div className="flex flex-wrap justify-center gap-6 text-justify">
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article) => (
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
        <p className="text-center text-gray-600">...</p>
      )}
    </div>
  );
}