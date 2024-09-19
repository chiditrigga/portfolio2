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

const page = () => {
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
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
    <motion.div
  initial={{opacity:0,y:100}}
  animate={{opacity:1,y:0}}
  transition={{duration:1.3}}
  className="fixed bottom-0 left-0 right-0 flex items-center justify-center h-fit w-full bg-transparent">
  <FloatingDock
    mobileClassName="translate-y-20" 
    items={links}
  />
</motion.div>

    </>
  )
}

export default page