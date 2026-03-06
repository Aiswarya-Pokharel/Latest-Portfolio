import { motion } from "framer-motion";
import profile from "../../assets/profile/aishu1.jpeg";

export default function About() {
  return (
    <div id="about" className="py-12 px-4 bg-[#EEEDEB]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          About <span className=" text-[#924399]">Me</span>
        </h1>
        <div className="w-12 h-0.5 bg-gradient-to-r from-[#924399] to-[#007B7B] mx-auto mt-4 rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 relative"
        >
          <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-8 border-[#A0522D] z-0" />

          <img
            src={profile}
            alt="Aiswarya Pokharel"
            className="relative z-10 w-64 h-64 object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <p className="text-gray-800  italic font-outfit text-[16px] leading-relaxed">
            A passionate frontend developer with a strong interest in building
            clean, responsive, and user-friendly web applications. I enjoy
            transforming ideas into interactive digital experiences using{" "}
            <span className="font-semibold italic text-[#007B7B]">React</span>{" "}
            and{" "}
            <span className="font-semibold italic text-[#007B7B]">
              Tailwind CSS
            </span>
            .
          </p>

          <p className="text-gray-800 italic font-outfit text-[16px] leading-relaxed">
            I love participating in hackathons, exploring modern UI trends, and
            continuously learning new technologies to sharpen my problem-solving
            skills.
          </p>
        </motion.div>
      </div>
      <div className="w-[1000px] h-px bg-[#A0522D]/40 mt-12 mx-auto" />
    </div>
  );
}
