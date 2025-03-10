'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { theme } from '@/lib/theme';
import { Particles } from './magicui/particles';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiTypescript, 
  SiMongodb,
  SiPrisma,
  SiVercel,
  SiGithub,
  SiVite
} from 'react-icons/si';
import { Marquee } from '@/components/magicui/marquee';

const TypingText = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="inline-block"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.03,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const MarqueeTech = () => {
  const techStack = [
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'React', Icon: SiReact },
    { name: 'Tailwind', Icon: SiTailwindcss },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'Prisma', Icon: SiPrisma },
    { name: 'Vercel', Icon: SiVercel },
    { name: 'GitHub', Icon: SiGithub },
    { name: 'Vite', Icon: SiVite },
  ];

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
      <Marquee pauseOnHover className="[--duration:30s]">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 sm:px-5 lg:px-6 py-2 sm:py-3 lg:py-4"
            whileHover={{ 
              scale: 1.05, 
              borderColor: theme.colors.primary,
              backgroundColor: 'rgba(6, 182, 212, 0.1)'
            }}
          >
            <tech.Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-cyan-400" />
            <span className="text-sm sm:text-base lg:text-lg font-medium text-cyan-200">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Particle effect background */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        staticity={20}
        ease={70}
        color={theme.colors.primary}
        size={1}
      />

      {/* Enhanced glow overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `
            radial-gradient(circle at 20% 30%, ${theme.colors.primary}15 0%, transparent 20%),
            radial-gradient(circle at 80% 70%, ${theme.colors.secondary}15 0%, transparent 20%),
            radial-gradient(circle at center, transparent 0%, ${theme.colors.background.darker} 100%)
          `
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="w-full max-w-[2000px] space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h2 
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: theme.colors.primary }}
            >
              <TypingText text="Professional & Affordable" />
            </h2>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              <TypingText text="Web Development" />
              <span 
                className="mt-2 block text-transparent"
                style={{ 
                  backgroundImage: theme.effects.gradientText,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text'
                }}
              >
                <TypingText text="Service in the Philippines" />
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mx-auto max-w-2xl text-lg md:text-xl"
              style={{ color: theme.colors.text.secondary }}
            >
              With more than 100+ sites launched, our modern design and web development team knows how to create functional and good-looking sites!
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col gap-4 sm:flex-row justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="group relative overflow-hidden rounded-full px-8 py-3 text-lg font-semibold text-white transition-all"
              style={{ 
                backgroundColor: theme.colors.primary,
                boxShadow: isHovered ? theme.effects.glow : 'none'
              }}
            >
              <span className="relative z-10">Get Started →</span>
              <motion.div 
                className="absolute inset-0 -z-10"
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`
                }}
              />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, borderColor: theme.colors.primary }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 px-8 py-3 text-lg font-semibold backdrop-blur-sm transition-all hover:bg-white/10"
              style={{ 
                borderColor: `${theme.colors.primary}40`,
                color: theme.colors.text.primary
              }}
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            {[
              { number: '100+', label: 'Websites Launched' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Tech stack marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="w-full overflow-hidden"
          >
            <MarqueeTech />
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span style={{ color: theme.colors.text.muted }} className="text-sm">
            Scroll to Explore Our Services
          </span>
          <div 
            className="h-12 w-8 rounded-full border-2 p-2"
            style={{ borderColor: `${theme.colors.primary}40` }}
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className="h-2 w-full rounded-full"
              style={{ backgroundColor: theme.colors.primary }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
} 