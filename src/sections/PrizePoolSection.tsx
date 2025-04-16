'use client';

import { motion } from "framer-motion";
import ResponsiveWrapper from "@/components/Wrapper";


type CompetitionType = {
    name: string;
    category: "Robotics" | "Esports" | "Coding";
    description: string;
  };
  
  const competitions: CompetitionType[] = [
    {
      name: "Robot Wars: AI-driven robot battles",
      category: "Robotics",
      description: "Battle it out with AI-powered bots in an intense robotic arena.",
    },
    {
      name: "Maze Solver Challenge: Navigation and automation",
      category: "Robotics",
      description: "Build robots that can navigate complex mazes with speed and precision.",
    },
    {
      name: "Robotic War: Competitive robotics warzone",
      category: "Robotics",
      description: "Test your engineering and strategy in a competitive robotics warzone.",
    },
    {
      name: "Speedster Bots, Drone Racing & Delivery Bots",
      category: "Robotics",
      description: "High-speed racing with autonomous bots and drones—fastest wins!",
    },
    {
      name: "Hackathon",
      category: "Coding",
      description: "A 48-hour coding sprint to build real-world solutions with mentorship.",
    },
    {
      name: "Science & Robotics Exhibition",
      category: "Coding",
      description: "Showcase innovative tech projects combining code and creativity.",
    },
    {
      name: "PUBG Mobile",
      category: "Esports",
      description: "Gear up and drop in—survival of the sharpest in a tactical battle royale.",
    },
    {
      name: "Free Fire",
      category: "Esports",
      description: "Fast-paced action and strategic plays in this crowd-favorite shooter.",
    },
  ];
  

export function PrizePoolSection() {
  return (
    <section className="bg-white">
      <ResponsiveWrapper className="py-16 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center space-y-8">
         
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.25 }}
            className="text-center"
          >
            <h4 className="text-primary font-semibold text-lg mb-2">
              TECH CHAMPIONSHIP PRIZES
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Total Prize Pool of NPR 6,00,000
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Compete in Asia&apos;s premier tech championship with rewards across 8 categories.
            </p>
          </motion.div>

       
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.25 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {competitions.map((comp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="p-6 bg-white rounded-xl border border-amber-200 hover:border-amber-400 transition-transform transform-gpu shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full 
                    ${comp.category === 'Robotics' ? 'bg-amber-500' : 
                     comp.category === 'Esports' ? 'bg-amber-700' : 'bg-amber-300'}`}
                  />
                  <span className="text-sm font-medium text-gray-500">
                    {comp.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{comp.name}</h3>
                <p className="text-gray-600 mt-2">
  {comp.description}
</p>

              </motion.div>
            ))}
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true, amount: 0.25 }}
            className="mt-12 bg-amber-50 p-8 rounded-2xl border border-amber-200 w-full max-w-4xl shadow-sm"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900">1500+</div>
                <div className="text-sm text-[#DAA520]">Participants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100K+</div>
                <div className="text-sm text-[#DAA520]">Indirect Reach</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">7</div>
                <div className="text-sm text-[#DAA520]">Event Days</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-[#DAA520]">Tech Domains</div>
              </div>
            </div>
          </motion.div>

         <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0.25 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 mb-4">
              Additional benefits for all participants:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="px-4 py-2 bg-amber-100 rounded-full text-[#996515] border border-amber-200">
                Industry Networking
              </div>
              <div className="px-4 py-2 bg-amber-100 rounded-full text-[#996515] border border-amber-200">
                Skill Workshops
              </div>
              <div className="px-4 py-2 bg-amber-100 rounded-full text-[#996515] border border-amber-200">
                Career Opportunities
              </div>
              <div className="px-4 py-2 bg-amber-100 rounded-full text-[#996515] border border-amber-200">
                Tech Exhibitions
              </div>
            </div>
          </motion.div>
        </div>
      </ResponsiveWrapper>
    </section>
  );
}