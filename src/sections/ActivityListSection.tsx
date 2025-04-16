'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import ResponsiveWrapper from "@/components/Wrapper";
import Robot from "../../public/robot.svg";
import Gaming from "../../public/gaming.png";
import Programmer from "../../public/Programmer.png";
import Exhibition from "../../public/exhibition.png";

import { StaticImageData } from "next/image";

interface ActivityCardProps {
  img: StaticImageData | string;
  title: string;
  content: string;
}

function ActivityCard({ img, title, content }: ActivityCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex flex-1 flex-col bg-white p-8 rounded-2xl space-y-2 min-h-[300px] transition-all shadow-lg border border-amber-200 hover:border-amber-400"
    >
      <div className="relative h-[150px] w-full">
        <Image 
          src={img} 
          alt={title}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <h4 className="text-center text-2xl font-bold mt-4 text-gray-900">{title}</h4>
      <p className="text-gray-600 text-center">{content}</p>
    </motion.div>
  );
}

export default function ActivityListSection() {
  return (
    <section className="py-16 bg-white">
      <ResponsiveWrapper className="flex flex-col space-y-8">
        <div className="w-full space-y-2">
            <hr />
            <br />
            <br />
            <br />
          <motion.h4 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-primary font-semibold"
          >
            ACTIVITIES
          </motion.h4>
          <motion.h1 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-center text-4xl md:text-5xl font-bold text-gray-900"
          >
            What&rsquo;s Included?
          </motion.h1>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-6 mb-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <ActivityCard 
              img={Gaming} 
              title="Esports" 
              content="High-intensity competitive gaming featuring PUBG Mobile & FreeFire" 
            />
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <ActivityCard 
              img={Robot} 
              title="Robotics" 
              content="AI-driven robotics competitions with various options" 
            />
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <ActivityCard 
              img={Programmer} 
              title="Hackathon" 
              content="24-48 hour coding marathon with mentorship from industry professionals" 
            />
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <ActivityCard 
              img={Exhibition} 
              title="Tech Exhibition" 
              content="Showcase of cutting-edge innovations in AI, IoT, and sustainable technologies" 
            />
          </motion.div>
        </motion.div>
      </ResponsiveWrapper>
    </section>
  );
}