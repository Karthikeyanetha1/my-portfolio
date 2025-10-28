// src/App.jsx
import React from "react";
import "./App.css";

const projects = [
  {
    title: "Box Cricket Booking System",
    desc:
      "A full-stack web application to book box cricket grounds, manage schedules, and payments. Includes admin panel and MongoDB storage.",
    github: "https://github.com/Karthikeyanetha1/box-cricket-booking",
    demo: "https://cricket-fronted.vercel.app",
    image: "/images/box-cricket.jpg",
    stack: "React • Node • MongoDB",
  },
];

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="/vite.svg" alt="Logo" className="logo" />
        <h1 className="h1">Gurram Karthikeya</h1>
        <p className="h-sub">Full Stack Developer | MERN | AI & ML Student</p>
      </header>

      <section className="section">
        <h2>Skills</h2>
        <p className="lead">React, JavaScript, Node.js, Express, MongoDB, HTML, CSS, Git</p>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Box Cricket Booking System</h3>
          <p className="lead" style={{ marginTop: "0.5rem" }}>
            A full-stack web application to book box cricket grounds, manage schedules,
            and payments. Includes admin panel and MongoDB storage.
          </p>

          <div className="project-links" style={{ marginTop: "0.8rem" }}>
            <a href="https://cricket-fronted.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/Karthikeyanetha1/box-cricket-booking" target="_blank" rel="noreferrer">GitHub Repo</a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Contact & Links</h2>
        <div className="contact-list">
          <div className="contact-item"><a href="mailto:karthikeyanetha7@gmail.com">karthikeyanetha7@gmail.com</a></div>
          <div className="contact-item"><a href="tel:8688496208">Call: 8688496208</a></div>
          <div className="contact-item"><a href="https://www.linkedin.com/in/karthikeya-gurram-59209726a" target="_blank" rel="noreferrer">LinkedIn</a></div>
          <div className="contact-item"><a href="https://github.com/Karthikeyanetha1" target="_blank" rel="noreferrer">GitHub</a></div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} G. Karthikeyeya. All rights reserved.
      </footer>
    </div>
  );
}
