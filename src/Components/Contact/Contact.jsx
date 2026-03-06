import { useState } from "react";
import emailjs from "@emailjs/browser";
const details = [
  {
    name: "Address",
    icon: "https://img.icons8.com/ios-filled/512/address.png",
    value: "Bhadrapur, Jhapa",
    link: null,
  },
  {
    name: "Email",
    icon: "https://img.icons8.com/ios-filled/512/gmail.png",
    value: "aiswaryapokharel18@gmail.com",
    link: "mailto:aiswaryapokharel18@gmail.com",
  },
  {
    name: "GitHub",
    icon: "https://img.icons8.com/ios-filled/512/github.png",
    value: "Aiswarya-Pokharel",
    link: "https://github.com/Aiswarya-Pokharel",
  },
  {
    name: "LinkedIn",
    icon: "https://img.icons8.com/ios-filled/512/linkedin.png",
    value: "AIswarya Pokharel",
    link: "https://www.linkedin.com/in/aiswarya-pokharel-5a5915365/",
  },
];

export default function Contact() {
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,

        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(() => {
        setError(true);
        setTimeout(() => setError(false), 3000);
      })
      .finally(() => setSending(false));
  };

  return (
    <div
      id="contact"
      className="bg-[#EEEDEB] relative overflow-hidden px-3 sm:px-6 py-10"
    >
      <div className="text-center mb-8 sm:mb-14">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Let's <span className="italic text-[#924399]">Connect</span>
        </h1>
        <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#924399] to-[#007B7B] mx-auto mt-3 sm:mt-5 rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start">
        <div>
          <p className="italic text-[#0B2E33] font-semibold text-sm sm:text-base border-b border-[#0B2E33]/20 pb-4 sm:pb-6 mb-5 sm:mb-8 leading-relaxed">
            "Open to new opportunities,
            <br />
            collaborations, and conversations."
          </p>

          <div className="space-y-1 sm:space-y-2">
            {details.map((d, i) => {
              const Tag = d.link ? "a" : "div";
              return (
                <Tag
                  key={i}
                  href={d.link || undefined}
                  target={d.link ? "_blank" : undefined}
                  rel={d.link ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl
                             transition-all duration-200 cursor-pointer
                             hover:bg-[#f2f0ef] hover:shadow-md hover:translate-x-1
                             active:scale-[0.98]"
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-[#f2f0ef] shadow flex items-center justify-center flex-shrink-0">
                    <img
                      src={d.icon}
                      alt={d.name}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="uppercase text-[9px] sm:text-xs tracking-[2px] font-bold text-black">
                      {d.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-700 truncate">
                      {d.value}
                    </div>
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-5 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#924399] to-[#007B7B]" />

          <div className="text-base sm:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">
            Send a Message
          </div>
          <div className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
            I'll get back to you as soon as possible.
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div
                className={`space-y-1 ${focused === "name" ? "text-[#924399]" : "text-gray-500"}`}
              >
                <label className="text-[10px] sm:text-xs font-bold uppercase tracking-[1.5px]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full px-3 py-2.5 sm:p-3 text-sm rounded-lg border border-[#e8e4e0]
                             bg-[#faf8f5] focus:bg-white focus:border-[#924399] text-black
                             focus:ring-2 focus:ring-[#924399]/10 outline-none transition"
                />
              </div>

              <div
                className={`space-y-1 ${focused === "email" ? "text-[#924399]" : "text-gray-500"}`}
              >
                <label className="text-[10px] sm:text-xs font-bold uppercase tracking-[1.5px]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="......@gmail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full px-3 py-2.5 sm:p-3 text-sm rounded-lg border border-[#e8e4e0] text-black
                             bg-[#faf8f5] focus:bg-white focus:border-[#924399]
                             focus:ring-2 focus:ring-[#924399]/10 outline-none transition"
                />
              </div>
            </div>

            <div
              className={`space-y-1 ${focused === "message" ? "text-[#924399]" : "text-gray-500"}`}
            >
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-[1.5px]">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message here..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
                className="w-full px-3 py-2.5 sm:p-3 text-sm rounded-lg border border-[#e8e4e0] text-black
                           bg-[#faf8f5] focus:bg-white focus:border-[#924399]
                           focus:ring-2 focus:ring-[#924399]/10 outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full py-2.5 sm:py-3 rounded-lg text-white text-sm sm:text-base
             font-semibold tracking-[1px] bg-[#007B7B]
             hover:opacity-90 active:scale-[0.98] transition-all duration-200
             disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send a Message"}
            </button>

            {submitted && (
              <div
                className="flex items-center gap-2 text-green-600 text-xs sm:text-sm
                  bg-green-50 border border-green-200 rounded-lg p-2.5 sm:p-3"
              >
                Message sent! I'll be in touch soon.
              </div>
            )}

            {error && (
              <div
                className="flex items-center gap-2 text-red-600 text-xs sm:text-sm
                  bg-red-50 border border-red-200 rounded-lg p-2.5 sm:p-3"
              >
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
