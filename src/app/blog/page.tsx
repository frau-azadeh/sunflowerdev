import { Metadata } from "next";
import ArticlesClient from "@/components/ArticlesClient";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import NavigationMenu from "@/components/NavigationMenu";
interface ArticleData {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  category: string;
  href: string;
}

// data for seo
export const metadata: Metadata = {
  title: "بلاگ - مقالات تخصصی برنامه نویسی",
  description: "در این بخش از وب‌سایت آزاده شریفی سلطانی، مقالات تخصصی و آموزنده در زمینه برنامه نویسی و توسعه وب منتشر می‌شود.",
  keywords: ["بلاگ", "برنامه نویسی", "مقالات تخصصی", "توسعه وب", "آموزش برنامه نویسی"],
  openGraph: {
    title: "بلاگ - مقالات تخصصی برنامه نویسی",
    description: "در این بخش از وب‌سایت آزاده شریفی سلطانی، مقالات تخصصی و آموزنده در زمینه برنامه نویسی و توسعه وب منتشر می‌شود.",
    url: "https://sunflower-dev.com/blog",
    siteName: "وب سایت آزاده شریفی سلطانی",
    images: [
      {
        url: "/images/react/what-is-the-react.jpeg",
        width: 1200,
        height: 630,
        alt: "تصویری از مقالات بلاگ",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "بلاگ - مقالات تخصصی برنامه نویسی",
    description: "در این بخش از وب‌سایت آزاده شریفی سلطانی، مقالات تخصصی و آموزنده در زمینه برنامه نویسی و توسعه وب منتشر می‌شود.",
    creator: "@Azadeh_sharifi",
    images: ["/images/react/what-is-the-react.jpeg"],
  },
};

async function fetchArticles(): Promise<ArticleData[]> {
  const response = await fetch(
    "https://api.mockfly.dev/mocks/ef8e4ba5-5dc1-4b36-9bca-5f59afb45ebe/article",
    { cache: "no-store" }
  );
  const data = await response.json();
  return Array.isArray(data) ? data : data.articles || [];
}

export default async function ArticlesPage() {
  const articles = await fetchArticles();

  return (
    <>
      <TopNav />
      <main className="container mx-auto py-12">
        <ArticlesClient articles={articles} />
      </main>
      <ScrollToTopButton />
      <BackButton />
      <NavigationMenu />
      <Footer />
    </>
  );
}