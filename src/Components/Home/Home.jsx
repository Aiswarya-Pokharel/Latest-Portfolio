import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import profile from "../../assets/profile/pic.jpg";
const IconSize = 30;

const icons = [
  {
    id: 1,
    icon: <FaFacebook size={IconSize} />,
    link: "https://www.facebook.com/aishwarya.pokharel.31/",
    label: "Facebook",
    className: "text-[#1877F2] hover:bg-[#1877F2] hover:text-white",
  },
  {
    id: 2,
    icon: <FaGithub size={IconSize} />,
    link: "https://github.com/Aiswarya-Pokharel",
    label: "GitHub",
    className: "text-[#333] hover:bg-[#333] hover:text-white",
  },
  {
    id: 3,
    icon: <FaLinkedin size={IconSize} />,
    link: "https://www.linkedin.com/in/aiswarya-pokharel-5a5915365/",
    label: "LinkedIn",
    className: "text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
  },
];

export default function Home() {
  return (
    <div
      id="home"
      className="relative min-h-screen bg-[#ede6d9] flex items-center overflow-hidden"
    >
      {/* <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[#924399]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full bg-[#007B7B]/10 blur-3xl pointer-events-none" /> */}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-700 leading-tight">
            Hi,👋 <br /> I'm{" "}
            <span className="italic text-[#0B2E33]">Aiswarya Pokharel</span>
          </h1>

          <span className="text-2xl lg:text-4xl font-outfit font-extrabold tracking-[2px] uppercase text-[#924399]  mt-6 block">
            Frontend Developer
          </span>

          <div className="flex items-center gap-8 lg:gap-12 mt-8 lg:ml-28 flex-wrap justify-center md:justify-start">
            {icons.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center
            ${item.className} 
            transition-all duration-300 hover:scale-110 hover:shadow-lg`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-full border-2 border-[#0B2E33]/30 scale-110" />
          <div className="p-[3px] rounded-full bg-gradient-to-br from-[#924399] to-[#007B7B] shadow-2xl">
            <div className="rounded-full overflow-hidden w-52 h-52 md:w-80 md:h-80 bg-white">
              <img
                src={profile}
                alt="Aiswarya Pokharel"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
