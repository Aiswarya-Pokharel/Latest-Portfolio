import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleLeft, FaAngleRight, FaCalendarAlt } from "react-icons/fa";
import achievement1 from "../../assets/achievements/achievement1.JPG";
import achievement2 from "../../assets/achievements/achievement2.JPG";
import achievement3 from "../../assets/achievements/achievement3.jpg";
import achievement4 from "../../assets/achievements/achievement4.jpg";
import certificate1 from "../../assets/certificates/certificate1.jpg";
import certificate2 from "../../assets/certificates/certificate2.jpg";
import certificate3 from "../../assets/certificates/certificate3.jpg";
import certificate4 from "../../assets/certificates/certificate4.jpg";
import certificate5 from "../../assets/certificates/certificate5.jpg";
import certificate6 from "../../assets/certificates/certificate6.png";

const achievements = [
  {
    id: 1,
    images: [achievement1, certificate1],
    title: "Nepal's Largest All Female Hackathon",
    subtitle: "1st Runner Up — CareBridge Web Application",
    date: "9th–11th July 2025",
    tag: " Winner",
    desc: "Developed a digital care platform connecting careseekers with caretakers. Enabled booking, communication, and service management using React, Tailwind CSS, and Node.js.",
  },
  {
    id: 2,
    images: [achievement4, certificate2],
    title: "Pitch Fest",
    subtitle: "Business Pitch Competition",
    date: "30th August 2025",
    tag: " Pitching",
    desc: "Presented an innovative web solution at a national-level pitch competition. Gained insights into startup thinking, effective pitching, and technology-business intersections.",
  },
  {
    id: 3,
    images: [achievement3, certificate3],
    title: "Nepathon Vol.1",
    subtitle: "National Hackathon — Tourism Web Application",
    date: "31st Oct–2nd Nov 2025",
    tag: " Hackathon",
    desc: "Built a tourism web app exploring Nepal's destinations using JavaScript, n8n automation, and RAG techniques for interactive, data-driven travel insights.",
  },
  {
    id: 4,
    images: [achievement2, certificate4],
    title: "Ideax MBMC",
    subtitle: "National Hackathon — Lost & Found Web Application",
    date: "19th–21st Dec 2025",
    tag: " Innovation",
    desc: "Collaborated with a team to build a functional prototype addressing real-world challenges with modern web technologies at this national-level hackathon.",
  },
  {
    id: 5,
    images: [certificate5, certificate5],
    title: "Flutter Development Workshop",
    subtitle: "7-Day Flutter Development Workshop",
    date: "16th–21st June 2024",
    tag: " Mobile Dev",
    desc: "Learned mobile app development, UI design, and state management. Built cross-platform Flutter applications over 7 intensive workshop days.",
  },
  {
    id: 6,
    images: [certificate6, certificate6],
    title: "Prompt Engineering Event",
    subtitle: "AI & Prompt Optimization Workshop",
    date: "20th Sep 2025",
    tag: " AI",
    desc: "Explored structuring prompts for better AI responses and discovered practical applications of generative AI in problem-solving and productivity.",
  },
  {
    id: 7,
    images: [null, null],
    title: "More Coming Soon",
    subtitle: "Stay Tuned",
    date: "",
    tag: "Next",
    desc: "New achievements and projects will be added soon. Keep watching this space!",
  },
];

export default function Achievements() {
  const [current, setCurrent] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);
  const total = achievements.length;

  const go = useCallback(
    (dir) => {
      setCurrent((p) => (p + dir + total) % total);
      setShowPhoto(false);
    },
    [total],
  );

  useEffect(() => {
    if (!isHovered) timerRef.current = setTimeout(() => go(1), 6000);
    return () => clearTimeout(timerRef.current);
  }, [current, isHovered, go]);

  const item = achievements[current];

  return (
    <div id="achievements">
      <div className="px-3 sm:px-4 bg-[#EEEDEB]">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Certificates &amp;{" "}
            <span className="italic text-[#924399]">Achievements</span>
          </h1>
          <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#924399] to-[#007B7B] mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        <div
          className="max-w-4xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl bg-[#f2f0ef] flex flex-col md:flex-row relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setShowPhoto(false);
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#924399] to-[#007B7B] z-10" />

          <div
            className="relative h-44 sm:h-60 md:h-auto md:w-[44%] overflow-hidden cursor-pointer flex-shrink-0 group"
            onClick={() => setShowPhoto((p) => !p)}
          >
            {item.images[0] && (
              <motion.img
                key={`photo-${current}`}
                src={item.images[0]}
                alt="Achievement"
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ opacity: showPhoto ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            )}

            <AnimatePresence>
              {!showPhoto && (
                <motion.div
                  className="absolute inset-0 bg-black/75 backdrop-blur-md flex flex-col items-center justify-center gap-2 sm:gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {item.images[1] ? (
                    <>
                      <img
                        src={item.images[1]}
                        alt="Certificate"
                        className="w-[72%] sm:w-4/5 h-[62%] sm:h-[68%] object-contain rounded-lg sm:rounded-xl shadow-2xl"
                      />
                      <span className="text-[8px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase text-white/50">
                        Certificate of Achievement
                      </span>
                    </>
                  ) : (
                    <span className="text-white/40 text-xs sm:text-sm">
                      Coming Soon
                    </span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                       w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center
                       bg-white/20 border border-white/30 text-white text-xs
                       md:opacity-0 md:group-hover:opacity-100 transition-all duration-300
                       hover:bg-[#924399]/70 active:scale-90"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                       w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center
                       bg-white/20 border border-white/30 text-white text-xs
                       md:opacity-0 md:group-hover:opacity-100 transition-all duration-300
                       hover:bg-[#924399]/70 active:scale-90"
            >
              <FaAngleRight />
            </button>

            <p className="absolute bottom-2 left-0 right-0 text-center text-[8px] sm:text-[10px] text-white/40 md:hidden">
              Tap image to toggle
            </p>
          </div>

          <div
            className="flex-1 p-4 sm:p-6 md:p-10 flex flex-col justify-center"
            onMouseEnter={() => setShowPhoto(true)}
            onMouseLeave={() => setShowPhoto(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#924399]/10 text-[#924399] text-[10px] sm:text-xs font-medium mb-3 sm:mb-4">
                  {item.tag}
                </span>

                <h2 className="text-base sm:text-xl md:text-[1.65rem] font-bold text-gray-900 leading-snug mb-1.5 sm:mb-2">
                  {item.title}
                </h2>

                <p className="text-[9px] sm:text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-2 sm:mb-3">
                  {item.subtitle}
                </p>

                {item.date && (
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[#007B7B] text-[11px] sm:text-sm font-medium mb-3 sm:mb-5">
                    <FaCalendarAlt size={10} />
                    {item.date}
                  </div>
                )}

                <div className="w-8 h-0.5 bg-gradient-to-r from-[#924399] to-[#007B7B] rounded-full mb-3 sm:mb-4" />

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-4 sm:line-clamp-none">
                  {item.desc}
                </p>

                <p className="mt-4 sm:mt-6 text-[9px] uppercase tracking-widest text-gray-300 hidden md:block">
                  Hover to view photo · Click image to toggle
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-7 flex-wrap px-4">
          {achievements.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setShowPhoto(false);
              }}
              className={`h-[6px] sm:h-[7px] rounded-full border-none cursor-pointer transition-all duration-300
              ${
                i === current
                  ? "w-5 sm:w-6 bg-gradient-to-r from-[#924399] to-[#007B7B]"
                  : "w-[6px] sm:w-[7px] bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="w-[1000px] h-px bg-[#A0522D]/40 mt-12 mx-auto" />
      </div>
    </div>
  );
}
