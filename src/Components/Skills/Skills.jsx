import { motion } from "framer-motion";

const skills = [
  {
    icon: "https://cdn-icons-png.freepik.com/256/1051/1051277.png?semt=ais_white_label",
    name: "HTML",
    color: "#E34F26",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    name: "CSS",
    color: "#1572B6",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    name: "JavaScript",
    color: "#F7DF1E",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png",
    name: "React",
    color: "#61DAFB",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
  {
    icon: "https://img.icons8.com/color/512/c-programming.png",
    name: "C",
    color: "#A8B9CC",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    name: "C++",
    color: "#00599C",
  },
  {
    icon: "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
    name: "Figma",
    color: "#F24E1E",
  },
  {
    icon: "https://www.svgrepo.com/show/303548/git-icon-logo.svg",
    name: "Git",
    color: "#F05032",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    name: "Firebase",
    color: "#FFCA28",
  },
  {
    icon: "https://img.beget.com/cp/plain/shared/KBvTEypMgGS5TZy6ry4-CM3bdLaDEEVz/supabase-logo2x.png@.webp",
    name: "Supabase",
    color: "#3ECF8E",
  },
  {
    icon: "https://imgs.search.brave.com/-rvijjkOvULEa0bhauyFVgy3CZWOkZEe8RAZBJcbjHA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW5vZGUtanMtaWNv/bi1zdmctZG93bmxv/YWQtcG5nLTExNzQ5/MjUucG5nP2Y9d2Vi/cCZ3PTI1Ng",
    name: "Node.js",
    color: "#339933",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    name: "Python",
    color: "#3776AB",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    name: "Django",
    color: "#092E20",
  },
];

export default function Skills() {
  return (
    <div id="skills" className=" px-4 sm:px-6 bg-[#EEEDEB]">
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          My <span className="italic text-[#924399]">Skills</span>
        </h1>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#924399] to-[#007B7B] mx-auto mt-4 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white rounded-xl sm:rounded-2xl
                       p-3 sm:p-4 md:p-5
                       flex flex-col items-center justify-center gap-2
                       shadow-sm hover:shadow-lg transition-shadow duration-300
                       cursor-pointer overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl sm:rounded-2xl"
              style={{ backgroundColor: skill.color }}
            />

            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors duration-200 text-center leading-tight">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="w-[1000px] h-px bg-[#A0522D]/40 mt-12 mx-auto" />
    </div>
  );
}
