import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa";

const AboutSection = () => {
  return (
    <>
      <h2 className="font-bold text-4xl text-[#56544d] mx-auto text-center mt-14">
        درباره من
      </h2>
      <div className="flex justify-center items-center">
        <span className="before:block before:w-14 before:h-1 before:bg-[#56544d] mt-5"></span>
        <FaLaptopCode className="text-4xl text-[#56544d]  text-center mt-4 " />
        <span className="after:block after:w-14 after:h-1 after:bg-[#56544d] mt-5"></span>
      </div>
      <section
        id="about"
        className="leading-10 pt-5 pb-5 text-[#56544d] bg-white hover:bg-gradient-to-b from-white to-[#56464d] hover:text-white lg:m-28 flex rounded-lg drop-shadow-xl shadow-[#56464d] border-t-8 border-[#56464d] md:m-10 m-5"
      >
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
           من آزاده شریفی سلطانی هستم؛ علاقه‌مند به برنامه‌نویسی و زبان آلمانی.
تحصیلاتم را در مقطع کاردانی در رشته‌ی نرم‌افزار کامپیوتر از دانشگاه جامع علمی‌کاربردی به پایان رساندم و دوره‌ی کارشناسی را در دانشگاه کومش سمنان ادامه دادم. پس از آن، با علاقه‌ به زبان و آموزش، رشته‌ی آموزش زبان آلمانی را برای مقطع کارشناسی ارشد انتخاب کردم.

در حال حاضر در شرکت فولاد حامیران مشغول به کار هستم و پیش‌تر نیز در شرکت‌های نگین سبز خاورمیانه و پارس فعالیت داشته‌ام. در کنار مسیر شغلی‌ام، برای توسعه‌ی فردی و افزایش دانش مدیریتی، دوره‌ی MBA را در دانشگاه تهران به پایان رسانده‌ام.
          </p>
          <p className=" text-justify lg:pl-20 lg:pr-20 md:pr-4 md:pl-4 pl-10 pr-10 mb-5">
            من در ابتدا در شرکت نگین سبز خاورمیانه، شرکت پارس و فولاد حامیران
            مشغول به کار بودم، و در حال حاضر دارم تجربیات خودم رو تو زمینه
            برنامه نویسی افزایش میدم و همچنین برای توسعه فردی خودم در رشته MBA
            دانشگاه تهران مشغول به ادامه تحصیل می باشم.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
