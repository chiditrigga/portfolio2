"use client";
import React from "react";
import { HeroParallax } from "./component/ui/hero-parallax";
import { TypewriterEffectSmooth } from "./component/ui/typewriter-effect";
import iphone from './images/iphone.png'
import landingg from './images/landing.png'
import moviee from './images/moviee.png'
import countries from "./images/desktop-preview.jpg";
import chat from './images/chat.png'
import phone from './images/phoneT.png'
import Advice from "./images/advice.jpg";
import { motion } from "framer-motion";

import Link from "next/link";
import { FloatingDock } from "./component/ui/floating-dock";
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
import { Vortex } from "./component/ui/vortex";
import { BackgroundBeamsWithCollision } from "./component/ui/background-beams-with-collision";

export default function Home() {

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


   













      

       
  
  <HeroParallax products={products} />;


  
  <motion.div
  initial={{opacity:0,y:100}}
  animate={{opacity:1,y:0}}
  transition={{duration:1.5, delay:0.5}}
  className="fixed bottom-0 left-0 right-0 flex items-center justify-center h-fit w-full bg-transparent">
  <FloatingDock
    mobileClassName="translate-y-20" 
    items={links}
  />
</motion.div>

   
    
  </>
  );
}

export const products = [
  {
    title: "Movie App",
    link: "https://movie-discovery-ql1q.vercel.app/",
    thumbnail:
    moviee,
  },
  {
    title: "Iphone",
    link: "https://iphone-clone-red.vercel.app/",
    thumbnail:
      iphone,
  },
 
  {
    title: "Landing Page",
    link: "https://ull.vercel.app/",
    thumbnail:
      landingg,
  },

 




  {
    title: "Countries App",
    link: "https://countries-pi-two.vercel.app/",
    thumbnail:
      countries,
  },
  {
    title: "Chat App",
    link: "https://chat-api-iyor.vercel.app/",
    thumbnail:
      chat,
  },

  {
    title: "Phone Number Validator",
    link: "https://phone-tracker.vercel.app/",
    thumbnail:
      phone,
  },
  {
    title: "Advice Generator",
    link: "https://adviceapp2.vercel.app/",
    thumbnail:
      Advice,
  },



  {
    title: "Movie App",
    link: "https://movie-discovery-ql1q.vercel.app/",
    thumbnail:
    moviee,
  },
  {
    title: "Iphone",
    link: "https://iphone-clone-red.vercel.app/",
    thumbnail:
      iphone,
  },
 
  {
    title: "Landing Page",
    link: "https://ull.vercel.app/",
    thumbnail:
      landingg,
  },

 




  {
    title: "Countries App",
    link: "https://countries-pi-two.vercel.app/",
    thumbnail:
      countries,
  },
  {
    title: "Chat App",
    link: "https://chat-api-iyor.vercel.app/",
    thumbnail:
      chat,
  },

  {
    title: "Phone Number Validator",
    link: "https://phone-tracker.vercel.app/",
    thumbnail:
      phone,
  },
  {
    title: "Advice Generator",
    link: "https://adviceapp2.vercel.app/",
    thumbnail:
      Advice,
  },
 
 
 
 
 
 
];