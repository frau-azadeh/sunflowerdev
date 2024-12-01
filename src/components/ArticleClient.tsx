"use client";
import { useEffect, useState } from "react";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleNavigation from "@/components/ArticleNavigation";

interface ArticleData {
  title: string;
  description: string;
  date: string;
  author: string;
  reading_time: string;
  image: string;
  content: { section_title: string; paragraphs: string[] }[];
  category: string;
  slug: string;
}

interface ArticleClientProps {
  article: ArticleData | null;
  articles: ArticleData[];
}

export default function ArticleClient({
  article,
  articles,
}: ArticleClientProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (article) {
      setLoading(false);
    }
  }, [article]);

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (!article) {
    return <div>مقاله مورد نظر یافت نشد.</div>;
  }

  return (
    <>
      <ArticleLayout
        title={article.title}
        description={article.description}
        date={article.date}
        author={article.author}
        readingTime={article.reading_time}
        image={article.image}
        category={article.category}
        content={article.content}
      />
      <ArticleNavigation articles={articles} currentArticle={article} />
    </>
  );
}
