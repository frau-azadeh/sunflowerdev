"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Article {
  slug: string;
  category: string;
  title: string;
}

const baseSiteUrl =
  process.env.NEXT_PUBLIC_BASE_SITE_URL || "http://localhost:3000";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [noResults, setNoResults] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://api.mockfly.dev/mocks/ef8e4ba5-5dc1-4b36-9bca-5f59afb45ebe/article`
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          setAllArticles(data);
        } else if (data && Array.isArray(data.articles)) {
          setAllArticles(data.articles);
        } else {
          setAllArticles([]);
        }
      } catch (error) {
        console.error("خطا در دریافت مقالات:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.length > 2) {
      const filteredResults = allArticles.filter((article) =>
        article.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredResults);
      setNoResults(filteredResults.length === 0);
    } else {
      setSearchResults([]);
      setNoResults(false);
    }
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 w-full bg-[#ffe082] z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href={`${baseSiteUrl}`}
              passHref
              className={`text-[#56464d] px-3 py-2 text-lg font-medium h-full rounded-lg ${
                isActive(`${baseSiteUrl}`)
                  ? "bg-[#56464d] text-white"
                  : "hover:bg-[#56464d] hover:text-white"
              }`}
            >
              صفحه اصلی
            </Link>
            <Link
              href={`${baseSiteUrl}/#about`}
              passHref
              className={`text-[#56464d] px-3 py-2 text-lg font-medium h-full rounded-lg ${
                isActive(`${baseSiteUrl}/#about`)
                  ? "bg-[#56464d] text-white"
                  : "hover:bg-[#56464d] hover:text-white"
              }`}
            >
              درباره من
            </Link>
            <Link
              href={`${baseSiteUrl}/#skill`}
              passHref
              className={`text-[#56464d] px-3 py-2 text-lg font-medium h-full rounded-lg ${
                isActive(`${baseSiteUrl}/#skill`)
                  ? "bg-[#56464d] text-white"
                  : "hover:bg-[#56464d] hover:text-white"
              }`}
            >
              مهارت‌های من
            </Link>
            <Link
              href="#contact"
              passHref
              scroll={false}
              className={`text-[#56464d] px-3 py-2 text-lg font-medium h-full rounded-lg ${
                isActive("#contact")
                  ? "bg-[#56464d] text-white"
                  : "hover:bg-[#56464d] hover:text-white"
              }`}
            >
              ارتباط با من
            </Link>
            <Link
              href={`${baseSiteUrl}/blog`}
              passHref
              className={`text-[#56464d] px-3 py-2 text-lg font-medium h-full rounded-lg ${
                isActive(`${baseSiteUrl}/article`)
                  ? "bg-[#56464d] text-white"
                  : "hover:bg-[#56464d] hover:text-white"
              }`}
            >
              مقالات من
            </Link>
          </div>

          {/* search */}
          <div className="relative flex-1 max-w-xs ml-4">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="جستجو..."
              className="w-full px-3 py-2 rounded-lg text-[#56464d] bg-white focus:outline-none"
            />
            <div className="absolute right-0 w-full bg-white shadow-lg rounded-lg mt-2 z-50">
              {searchResults.length > 0 ? (
                searchResults.map((article) => (
                  <Link
                    className="block px-4 py-2 text-[#56464d] hover:bg-blue-50 hover:rounded-lg"
                    key={article.slug}
                    href={`/blog/${article.category}/${article.slug}`}
                    passHref
                  >
                    {article.title}
                  </Link>
                ))
              ) : (
                noResults && (
                  <div className="px-4 py-2 text-[#56464d]">مقاله‌ای پیدا نشد.</div>
                )
              )}
            </div>
          </div>

          {/* responsive for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-[#56464d] text-white p-2 rounded focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* show nav mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#ffe082] text-right px-4 py-2">
          <Link
            className="block text-[#56464d] px-3 py-2 text-lg font-medium hover:bg-[#56464d] hover:text-white"
            href={`${baseSiteUrl}`}
            passHref
          >
            صفحه اصلی
          </Link>
          <Link
            className="block text-[#56464d] px-3 py-2 text-lg font-medium hover:bg-[#56464d] hover:text-white"
            href={`${baseSiteUrl}/#about`}
            passHref
          >
            درباره من
          </Link>
          <Link
            className="block text-[#56464d] px-3 py-2 text-lg font-medium hover:bg-[#56464d] hover:text-white"
            href={`${baseSiteUrl}/#skill`}
            passHref
          >
            مهارت‌های من
          </Link>
          <Link
            className="block text-[#56464d] px-3 py-2 text-lg font-medium hover:bg-[#56464d] hover:text-white"
            href="/#contact"
            passHref
            scroll={false}
          >
            ارتباط با من
          </Link>
          <Link
            className="block text-[#56464d] px-3 py-2 text-lg font-medium hover:bg-[#56464d] hover:text-white"
            href={`${baseSiteUrl}/blog/`}
            passHref
          >
            مقالات من
          </Link>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
