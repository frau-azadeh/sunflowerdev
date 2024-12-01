import Image from 'next/image';
import { FaLaptopCode } from "react-icons/fa";

const AboutSection = () => {
  return (
    <>
      <h2 className="font-bold text-4xl text-[#56544d] mx-auto text-center mt-14">درباره من</h2>
      <div className="flex justify-center items-center">
        <span className="before:block before:w-14 before:h-1 before:bg-[#56544d] mt-5"></span>
        <FaLaptopCode className='text-4xl text-[#56544d]  text-center mt-4 '/>
        <span className="after:block after:w-14 after:h-1 after:bg-[#56544d] mt-5"></span>
      </div>
      <section id="about" className="leading-10 pt-5 pb-5 text-[#56544d] bg-white hover:bg-gradient-to-b from-white to-[#56464d] hover:text-white lg:m-28 flex rounded-lg drop-shadow-xl shadow-[#56464d] border-t-8 border-[#56464d] md:m-10 m-5">
        <div className="container mx-auto text-center ">      
          <Image
                src="/images/about/azadeh.jpeg"
                alt="Azadeh Sharifi Soltani"
                width={100}
                height={100}
                className="rounded-full mx-auto my-4"
              />
            <h1 className="font-bold text-2xl mb-4">آزاده شریفی سلطانی</h1>
            <p className=" text-justify  lg:pl-20 lg:pr-20 md:pr-4 md:pl-4 pl-10 pr-10">
              من آزاده شریفی سلطانی هستم و یک علاقه مند به برنامه نویسی و زبان آلمانی . اگه بخوام خودم رو کمی معرفی کنم تحصیلاتم رو در مقطع کاردانی تو رشته نرم افزار کامپیوتر در دانشگاه جامع علمی کاربردی به اتمام رسوندم و کارشناسی رو در شهر سمنان در دانشگاه کومش ادامه دادم. بعد از اون رشته آموزش زبان آلمانی رو برای کارشناسی ارشد انتخاب کردم.
            </p>
            <p className=" text-justify lg:pl-20 lg:pr-20 md:pr-4 md:pl-4 pl-10 pr-10 mb-5">
              من در ابتدا در شرکت نگین سبز خاورمیانه، شرکت پارس و فولاد حامیران مشغول به کار بودم، و در حال حاضر دارم تجربیات خودم رو تو زمینه برنامه نویسی افزایش میدم و همچنین برای توسعه فردی خودم در رشته MBA دانشگاه تهران مشغول به ادامه تحصیل می باشم.        
            </p>
          </div>
        </section>
    </>
   
  );
};

export default AboutSection;