import TopNav from '@/components/TopNav';
import Slider from '@/components/Slider';
import React from 'react';
import AboutSection from '../components/AboutSection';
import SkillCard from '../components/SkillCard';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { HiAcademicCap } from "react-icons/hi";
import Footer from "../components/Footer";
import NavigationMenu from "../components/NavigationMenu";
import ArticleSlider from "../components/ArticleSlider";
import { GrArticle } from "react-icons/gr";

const page = () => {
 
  return (
    <div className='bg-[#fff8e1] min-h-screen'>
      <TopNav/>
      <Slider/>  
      <AboutSection />
      <section id="skill" className="pb-5  md:m-24">
        <h2 className="font-bold text-4xl text-[#56544d] mx-auto text-center mt-14">مهارتهای من</h2>
        <div className="flex justify-center items-center">
          <span className="before:block before:w-14 before:h-1 before:bg-[#56544d] mt-5"></span>
          <HiAcademicCap className='text-4xl text-[#56544d]  text-center mt-4 '/>
          <span className="after:block after:w-14 after:h-1 after:bg-[#56544d] mt-5"></span>
        </div>
        <div className="flex flex-wrap justify-center">
          <SkillCard
              title="HTML"
              description="دوره html یکی از اولین دوره هایی بود که در مجتمع فنی تهران به صورت حضوری در آن شرکت کرده و مدرک پایان دوره را نیز دریافت کردم." 
              imgSrc="/images/skill/html.jpeg"
              proficiency="90%"
            />
          <SkillCard
              title="TAILWIND"
              description="از آنجایی که هر دانشی نیاز به بروز شدن دارد برای ارتقا سطح دانش خود این دوره را به صورت خودآموز از طریق وب سایتهای مرجع به آموزش خود پرداختم."
              imgSrc="/images/skill/tailwindcss.jpeg"
              proficiency="90%"
            />
          <SkillCard
              title="CSS"
              description="دوره css که مکمل دوره html در مجتمع فنی تهران بود آن زمان به صورت همزمان شرکت کرده و گواهینامه پایان دوره را نیز دریافت کردم." 
              imgSrc="/images/skill/css.jpeg"
              proficiency="90%"
            />
          <SkillCard
              title="REACT"
              description="دوره react .js را ابتدا از طریق وب سایتها و سپس از طریق شرکت در کلاسهای آنلاین مهندس محسن درم بخت و حسام موسوی گذرانده و همچنین برای ارتقا بیشتر در بوتکمپ فرانت پیشرفته دیجینکست شرکت کردم."  
              imgSrc="/images/skill/react.jpeg"
              proficiency="75%"
            />
          <SkillCard
              title="NEXT.JS"
              description="دوره next .js را ابتدا از طریق وب سایتها و سپس از طریق شرکت در کلاسهای آنلاین مهندس محسن درم بخت و حسام موسوی گذرانده و همچنین برای ارتقا بیشتر در بوتکمپ فرانت پیشرفته دیجینکست شرکت کردم."  
              imgSrc="/images/skill/nextjs.jpeg"
              proficiency="75%"
            />
           <SkillCard
              title="REDUX"
              description="دوره redux را ابتدا از طریق وب سایتها و سپس از طریق شرکت در کلاسهای آنلاین مهندس محسن درم بخت و حسام موسوی گذرانده و همچنین برای ارتقا بیشتر در بوتکمپ فرانت پیشرفته دیجینکست شرکت کردم."
              imgSrc="/images/skill/redux.jpeg"
              proficiency="75%"
            />
          <SkillCard
              title="JAVASCRIPT"
              description="دوره javascript را ابتدا از طریق وب سایتها و سپس از طریق شرکت در کلاسهای آنلاین مهندس حسام موسوی گذرانده و همچنین برای ارتقا بیشتر در بوتکمپ فرانت پیشرفته دیجینکست شرکت کردم."   
              imgSrc="/images/skill/javascript.jpeg"
              proficiency="70%"
            />
          <SkillCard
              title="TYPESCRIPT"
              description="دوره typescript را ابتدا از طریق وب سایتها و سپس از طریق شرکت در کلاسهای آنلاین مهندس حسام موسوی گذرانده و همچنین برای ارتقا بیشتر در بوتکمپ فرانت پیشرفته دیجینکست شرکت کردم." 
              imgSrc="/images/skill/typescript.jpeg"
              proficiency="80%"
            />
          <SkillCard
              title="PHP"
              description="همزمان با دوره html , css در شعبه غرب مجتمع فنی تهران در دوره php نیز شرکت کرده و گواهی پایان دوره را نیز دریافت کردم ولی علاقه بیشتر من به قسمت فرانت وب سایت میباشد ." 
              imgSrc="/images/skill/php.jpeg"
              proficiency="50%"
            />
          <SkillCard
              title="API"
              description="در ابتدا برای یادگیری از طریق وب سایتها و فیلمهای یوتیوب سعی در ارتقا دانش خود داشتم، تا اینکه تجربه کار بهتر و اصولی را در کلاسهای دیجینکست بدست آوردم." 
              imgSrc="/images/skill/restapi.jpeg"
              proficiency="75%"
            />
          <SkillCard
              title="GITHUB"
              description="برای ارتقا برنامه نویسی و اهمیت گیت هاب سعی در یادگیری و توسعه خود داشتم و از طریق فیلم های یوتیوب توانستم به دانش خوبی در این زمینه برسم."
              imgSrc="/images/skill/github.jpeg"
              proficiency="75%"
            />
          <SkillCard
              title="SCRUM"
              description="از آنجا که مدیرت کارها بسیار مهم میباشدو به دلیل علاقه فردی خود در کلاس اسکرام مستر شرکت همکاران سیستم شرکت کرده و از این طریق مهارت لازم را بدست آوردم."
              imgSrc="/images/skill/scrum.jpeg"
              proficiency="90%"
            />
          <SkillCard
              title="UI/UX"
              description="نقش  که این زمینه در طراحی سایت دارد سبب شد تا در کلاسهای مجتمع فنی تهران شرکت کنم تا درک بهتری از این موضوع و کار با نرم افزارهای xd - figma را یادبگیرم ." 
              imgSrc="/images/skill/ui.jpeg"
              proficiency="90%"
            />
          <SkillCard
              title="SEO"
              description="از آنجا که طراحی اصولی هر وب سایت باعث ارتقا seo آن نیز میشود، در کلاسهای مدیریت صنعتی شرکت کرده و گواهینامه پایان دوره را نیز دریافت کردم." 
              imgSrc="/images/skill/seo.jpeg"
              proficiency="90%"
            />
          <SkillCard
              title="Campaign Advertising"
              description="این دوره را جهت علاقه شخصی خودم و آشنایی بیشتر در خصوص انواع تبلیغات و چگونگی پیاده سازی یک تبلیغ 360 درجه را در دانشگاه تهران شرکت کردم ." 
              imgSrc="/images/skill/campainadvertising.jpeg"
              proficiency="85%"
            />
        </div>
      </section>
      <ScrollToTopButton />
      <NavigationMenu />
          <h2 className="font-bold text-4xl text-[#56544d] mx-auto text-center mt-14">مقالات جدید : </h2>
          <div className="flex justify-center items-center">
            <span className="before:block before:w-14 before:h-1 before:bg-[#56544d] mt-5"></span>
             <GrArticle className='text-4xl text-[#56544d]  text-center mt-4 '/>
            <span className="after:block after:w-14 after:h-1 after:bg-[#56544d] mt-5"></span>
          </div>
      <ArticleSlider />
      <Footer/>
    </div>
  )
}

export default page;
