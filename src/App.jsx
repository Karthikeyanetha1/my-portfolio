// src/App.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

/* ---- Projects data ---- */
const projects = [
  {
    title: "Box Cricket Booking System",
    desc:
      "Full-stack booking website — booking slots, validation, admin panel.",
    github: "https://github.com/Karthikeyanetha1",
    demo: "#",
    image: "/images/box-cricket.jpg",
    stack: "React • Node • Express • MongoDB",
  },
  // add more projects below if you want
];

/* ---- Main component ---- */
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold">G. Karthikeya</h1>
          <p className="text-sm text-gray-300">B.Tech CSE (AI & ML) • Full-Stack Developer</p>
        </div>

        <nav className="flex gap-3 items-center">
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-4xl mx-auto p-6">
        <section className="text-center mb-6 px-4">
          <motion.h2
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="text-xl md:text-3xl font-semibold mb-2 max-w-3xl mx-auto"
          >
            I build fast, simple websites — React, Node.js & MongoDB.
          </motion.h2>

          <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
            Recent: Box Cricket Booking System — booking slots, validation, admin panel.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20"
              href="https://github.com/Karthikeyanetha1"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>

            <a
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 rounded-lg hover:bg-blue-800"
              href="https://www.linkedin.com/in/karthikeya-gurram-59209726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "JavaScript", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Git"].map((s) => (
              <span key={s} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Projects (paste-ready card layout) */}
        <section id="projects" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Projects</h3>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 rounded-2xl overflow-hidden shadow-md flex flex-col"
              >
                {/* image area (controlled size) */}
                <div className="h-36 md:h-44 bg-gray-800 flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="object-contain w-full max-w-xs md:max-w-md h-36 md:h-44"
                    loading="lazy"
                  />
                </div>

                {/* content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">{p.title}</h4>
                    <p className="text-gray-300 text-sm my-2">{p.desc}</p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex gap-3">
                      <a className="text-sm underline" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                      <a className="text-sm underline" href={p.demo} target="_blank" rel="noreferrer">Live demo</a>
                    </div>
                    <span className="text-xs text-gray-400">{p.stack || ""}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Contact & Social */}
        <section id="contact" className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Contact & Links</h3>
          <p className="text-gray-300 mb-3">Let's connect — email or call me.</p>

          <div className="flex flex-wrap gap-3 items-center mb-4">
            <a href="mailto:karthikyanethar7@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">
              <FaEnvelope /> karthikyanethar7@gmail.com
            </a>

            <a href="tel:+918688496208" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">
              Call: 8688496208
            </a>

            <a
              href="https://www.linkedin.com/in/karthikeya-gurram-59209726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Karthikeyanetha1"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 text-white"
            >
              GitHub
            </a>
          </div>

          <p className="text-gray-400 text-sm">&copy; 2025 G. Karthikeya. All rights reserved.</p>
        </section>
      </main>
    </div>
  );
}

