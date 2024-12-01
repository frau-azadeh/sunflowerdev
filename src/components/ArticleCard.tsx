import Link from 'next/link';
import Image from 'next/image'
interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  href: string;
}

export default function ArticleCard({
  title,
  description,
  date,
  image,
  href,
}: ArticleCardProps) {
  return (
    <div className="post-slide w-full max-w-xs p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="post-img">
        <Image width={400} height={350} src={image} alt={title} className="rounded-md w-full  object-contain" />
      </div>
      <div className="post-content mt-4">
        <h3 className="post-title text-lg text-[#56464d]">{title}</h3>
        <p className="post-description mt-2 leading-10 text-[#56464d]">{description}</p>
        <span className="post-date text-sm block mt-2 text-[#56464d]">
          <i className="fa fa-clock-o mr-1"></i>
          {date}
        </span>
        <Link href={href} className="read-more inline-block text-blue-500 mt-3">
          ادامه مطلب
        </Link>
      </div>
    </div>
  );
}