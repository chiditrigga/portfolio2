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

import Link from "next/link";
import { FloatingDock } from "./component/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Vortex } from "./component/ui/vortex";

export default function Home() {

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <Image
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];



  const words = [
    {
      text: `Build `,
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (



  <>


   














  
  <HeroParallax products={products} />;


 
  <div className="flex items-center justify-center h-fit w-full bg-slate-100">
      <FloatingDock
        mobileClassName="translate-y-20" 
        items={links}
      />
    </div>
   
  
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