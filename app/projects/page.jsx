"use client"

import { PinContainer } from "../component/ui/3d-pin";
import { FloatingDock } from "../component/ui/floating-dock";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconPhone,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import iphone from '../images/iphone.png'
import landingg from '../images/landing.png'
import moviee from '../images/moviee.png'
import countries from "../images/desktop-preview.jpg";
import chat from '../images/chat.png'
import phone from '../images/phoneT.png'
import Advice from "../images/advice.jpg";

const page = () => {
  const websites = [
    {
      title: "Apple Website Clone",
      description: "Next.js, Tailwind, Framer Motion, Aceternity-UI",
      href: "https://iphone-clone-red.vercel.app/",
      image: iphone,
      id: 1,
      github:'https://github.com/chiditrigga/iphoneClone'
    },
    {
      title: "Landing Page",
      description: "Next.js, Tailwind, Swiper.js",
      href: "https://ull.vercel.app/",
      image: landingg,
      id: 2,
      github:'https://github.com/chiditrigga/ull/tree/main/ulll'
    },
    {
      title: "Movie Discovery App",
      description: "React.js, Tailwind, API, Tanstack Query",
      href: "https://movie-discovery-ql1q.vercel.app/",
      image: moviee,
      id: 3,
      github:'https://github.com/chiditrigga/movie-discovery/tree/main/movie'
    },
    {
      title: "All Countries App",
      description: "Next.js, Tailwind, Tanstack Query, Typescript, ShadCN",
      href: "https://countries-pi-two.vercel.app/",
      image: countries,
      id: 4,
      github:'https://github.com/chiditrigga/countries'
    },
    {
      title: "AI Chatbot",
      description: "AI Chatbot with OpenAI API, Vercel SDK",
      href: "https://chat-api-iyor.vercel.app/",
      image: chat,
      id: 5,
      github:'https://github.com/chiditrigga/chat-api'
    },
    {
      title: "Phone Number Validator",
      description: "Next.js, Typescript, Tailwind",
      href: "https://phone-tracker.vercel.app/",
      image: phone,
      id: 6,
      github:'https://github.com/chiditrigga/phoneTracker'
    },
  ];
  


  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
 
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Phone +2348100185232",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "tel:+2348100185232", 
    },
    
    {
      title: "Gmail:chididaniel1998@gmail.com",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:chididaniel1998@gmail.com", 
    },
    
   {
  title: "Linkedin",
  icon: (
    <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  ),
  href: "https://www.linkedin.com/in/chidi-ugwu-43662423a", 
},

 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/ChidiUg85346290",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/chiditrigga",
    },
  ];
  return (
    <>
<div className=" h-full bg-gray-900 ">
  {websites.map((website, index) => (
    <motion.div
      key={website.id}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ margin: "-200px" }} 
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }} 
      className="h-[40rem] w-full flex items-center justify-center mb-16"
    >
      <PinContainer title={website.title} href={website.href}>
        <div className="flex flex-col sm:flex-row w-[90vw] md:w-[60rem] xl:w-[70rem] h-[40rem] sm:w-[50rem] sm:h-[30rem] p-8 bg-gray-800 rounded-lg shadow-2xl border-[2px] border-silver-400">
          <div className="flex flex-col justify-between sm:w-1/2">
            <h3 className="font-bold text-3xl text-slate-100 mb-6">
              {website.title}
            </h3>
            <p className="text-lg text-slate-400 mb-6">
              {website.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={website.href}
                className="text-blue-400 hover:underline text-lg"
              >
                View Website
              </a>
              <a
                href={website.github}
                className="text-blue-400 hover:underline text-lg"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="flex-1 mt-6 sm:mt-0 sm:ml-8 rounded-lg overflow-hidden relative">
            <Image
              src={website.image}
              alt={website.title}
              className="object-cover object-center rounded-lg w-full h-full" 
            />
          </div>
        </div>
      </PinContainer>
    
    </motion.div>
  ))}
    <motion.div

  initial={{opacity:0,y:100}}
  animate={{opacity:1,y:0}}
  transition={{duration:1.3}}
  className="fixed bottom-0 left-0 right-0 flex items-center  justify-center h-fit w-full back bg-gray-900 z-50">
  <FloatingDock
    mobileClassName="translate-y-20 z-50" 
    desktopClassName='z-50'
    
    items={links}
  />
</motion.div>
</div>





  

    </>
  )
}

export default page