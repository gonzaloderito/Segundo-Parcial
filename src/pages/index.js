import { motion } from "framer-motion";
import { Inter } from 'next/font/google'
import { AboutView } from '@/components/about/AboutView'
import ThemeCard from "@/components/ThemeCard/ThemeCard";
import LanguagueCard from "@/components/Language/LanguagueCard";
import { BirthdayCardView } from "@/components/Birthday/BirthdayCardView";
import LinkedinCard from "@/components/LinkedinCard/LinkedinCard";
import ProjectsCard from "@/components/ProjectsCard/ProjectsCard";
import GithubCard from "@/components/GitHubCard/GithubCard";
import Skills from "@/components/SkillsCard/Skills";
import ExpCard from "@/components/ExpCard/ExpCard";
import TimeCard from "@/components/TimeCard/TimeCard";
import EmailCard from "@/components/EmailCard/EmailCard";
import Head from "next/head";






const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
      <Head>
        <title>Gonzalo De Rito | Frontend Developer</title>
        <meta name="theme-color" content="#3F275C" />
        <meta name="apple-mobile-web-app-status-bar" content="#3F275C" />



      </Head>



      <motion.div
        initial={{ opacity: 0, y: -2000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100, duration: 1 }}
        transition={{ duration: 2.5, delay: 0.5, type: "spring" }}
        className="flex flex-col m-5"
      >
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
          <AboutView />
          <LanguagueCard />
          <ThemeCard />
          <BirthdayCardView />
          <LinkedinCard />
          <ProjectsCard />
          <GithubCard />
          <Skills />
          <ExpCard />
          <TimeCard />
          <EmailCard />





        </div>
      </motion.div>
    </>
  )
}
