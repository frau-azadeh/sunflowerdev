import { Metadata } from "next";

import BackButton from "@/components/BackButton";
import CategoryClient from "@/components/CategoryClient";
import Footer from "@/components/Footer";
import NavigationMenu from "@/components/NavigationMenu";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TopNav from "@/components/TopNav";

interface ArticleData {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  category: string;
}

async function fetchArticles(): Promise<ArticleData[]> {
  const response = await fetch(
    "https://api.mockfly.dev/mocks/ef8e4ba5-5dc1-4b36-9bca-5f59afb45ebe/article",
    { cache: "no-store" },
  );
  const data = await response.json();
  return Array.isArray(data.articles) ? data.articles : [];
}

// SEO
export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = params.category;
  return {
    title: `دسته‌بندی ${category} - وبلاگ`,
    description: `مقالات دسته‌بندی ${category} در وبلاگ ما. با جدیدترین مقالات تخصصی در حوزه برنامه‌نویسی و توسعه وب آشنا شوید.`,
    openGraph: {
      title: `دسته‌بندی ${category} - وبلاگ`,
      description: `مقالات دسته‌بندی ${category} در وبلاگ ما. با جدیدترین مقالات تخصصی در حوزه برنامه‌نویسی و توسعه وب آشنا شوید.`,
      url: `https://sunflower-dev.com/blog/${category}`,
      siteName: "وبلاگ برنامه نویسی",
      images: [
        {
          url: "/images/react/what-is-the-react.jpeg",
          width: 1200,
          height: 630,
          alt: `تصویری از دسته‌بندی ${category}`,
        },
      ],
      locale: "fa_IR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `دسته‌بندی ${category} - وبلاگ`,
      description: `مقالات دسته‌بندی ${category} در وبلاگ ما. با جدیدترین مقالات تخصصی در حوزه برنامه‌نویسی و توسعه وب آشنا شوید.`,
      images: ["/images/react/what-is-the-react.jpeg"],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const articles = await fetchArticles();
  const category = params.category;

  return (
    <>
      <TopNav />
      <div className="container mx-auto py-12">
        <h1 className="text-2xl text-center mb-8 mt-20 text-[#56464d]">
          مقالات دسته‌بندی: {category}
        </h1>
        <CategoryClient articles={articles} category={category} />
      </div>
      <BackButton />
      <NavigationMenu />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
