import Link from 'next/link';

interface Article {
  slug: string;
  category: string;
  title: string;
  date: string;
}

interface ArticleNavigationProps {
  articles: Article[];
  currentArticle: Article;
}

const ArticleNavigation: React.FC<ArticleNavigationProps> = ({ articles, currentArticle }) => {
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const currentIndex = sortedArticles.findIndex(article => article.slug === currentArticle.slug && article.category === currentArticle.category);

  const previousArticle = sortedArticles[currentIndex + 1];
  const nextArticle = sortedArticles[currentIndex - 1];

  return (
    <div className="m-12 pt-6 border-t border-gray-200">
      <h3 className="text-xl  text-[#56464d] mb-4 text-center">مقالات پیشنهادی:</h3>
      <div className="flex justify-between gap-4">
        {previousArticle ? (
          <Link href={`/blog/${previousArticle.category}/${previousArticle.slug}`} className="flex-1 text-center py-4 px-6 rounded-lg bg-gray-50 hover:bg-blue-50 shadow-sm border border-gray-200 transition duration-300 ease-in-out hover:shadow-md">
            <span className="block text-[#56464d] font-medium">← {previousArticle.title}</span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {nextArticle ? (
          <Link href={`/blog/${nextArticle.category}/${nextArticle.slug}`} className="flex-1 text-center py-4 px-6 rounded-lg bg-gray-50 hover:bg-blue-50 shadow-sm border border-gray-200 transition duration-300 ease-in-out hover:shadow-md">
            <span className="block text-[#56464d] font-medium">{nextArticle.title} →</span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
      </div>
    </div>
  );
};

export default ArticleNavigation;