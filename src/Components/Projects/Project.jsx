import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import ecommerce from "../../assets/projects/e-commerce.png";
import movie from "../../assets/projects/movie.png";
import carebridge from "../../assets/projects/carebridge.png";

const projects = [
  {
    name: "Movie App",
    description: "A movie app built with React and Tailwind CSS.",
    image: movie,
    link: "https://aiswarya-pokharel.github.io/MovieApp/",
    tags: ["React", "Tailwind CSS"],
  },
  {
    name: "CareBridge",
    description:
      "A healthcare platform built with React, Tailwind CSS and NodeJs.",
    image: carebridge,
    link: "",
    tags: ["React", "Tailwind CSS", "NodeJs"],
  },
  {
    name: "E-commerce Website",
    description: "An e-commerce platform built with React and Tailwind CSS.",
    image: ecommerce,
    link: "https://aiswarya-pokharel.github.io/E-commerce-Website/",
    tags: ["React", "Tailwind CSS"],
  },
];

export default function Project() {
  const [active, setActive] = useState(null);

  return (
    <div id="project" className="py-10 sm:py-14 px-3 sm:px-6 bg-[#EEEDEB]">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Featured <span className="italic text-[#924399]">Projects</span>
        </h1>
        <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#924399] to-[#007B7B] mx-auto mt-3 rounded-full" />
      </div>

      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            onClick={() => setActive(active === index ? null : index)}
            className="bg-[#f2f0ef] rounded-xl overflow-hidden shadow-md hover:shadow-xl
                       transition-shadow duration-300 flex flex-col relative group cursor-pointer"
          >
            <div className="relative h-36 xs:h-40 sm:h-44 md:h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div
                className={`absolute inset-0 bg-black/55 flex items-center justify-center
                              transition-opacity duration-300
                              ${active === index ? "opacity-100" : "opacity-0"}`}
              >
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 sm:gap-2
                               px-4 sm:px-5 py-1.5 sm:py-2
                               bg-white text-[#924399]
                               text-xs sm:text-sm font-semibold rounded-full
                               hover:bg-[#924399] hover:text-white
                               active:scale-95 transition-all duration-200"
                  >
                    <FiExternalLink size={12} />
                    View Live
                  </a>
                ) : (
                  <span
                    className="px-4 py-1.5 bg-white/20 border border-white/40
                                   text-white text-xs sm:text-sm rounded-full"
                  >
                    Coming Soon
                  </span>
                )}
              </div>
            </div>

            <div className="p-3.5 sm:p-5 md:p-6 flex flex-col flex-1">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1">
                {project.name}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-0.5 sm:py-1
                               text-[9px] sm:text-xs font-medium rounded-full
                               bg-[#924399]/10 text-[#924399]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-[1000px] h-px bg-[#A0522D]/40 mt-12 mx-auto" />
    </div>
  );
}
