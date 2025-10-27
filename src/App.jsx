import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {/* Logo Section */}
      <header className="text-center mb-10">
        <img
          src="/vite.svg"
          alt="Karthikeya Logo"
          className="w-20 mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold">Gurram Karthikeya</h1>
        <p className="text-lg text-gray-400">
          Full Stack Developer | MERN | AI & ML Student
        </p>
      </header>

      {/* Skills */}
      <section className="max-w-2xl text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Skills</h2>
        <p className="text-gray-300">
          React, JavaScript, Node.js, Express, MongoDB, HTML, CSS, Git
        </p>
      </section>

      {/* Project */}
      <section className="max-w-2xl text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">Projects</h2>
        <div className="bg-gray-800 p-5 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold">Box Cricket Booking System</h3>
          <p className="text-gray-300 mt-2">
            A full-stack web application to book box cricket grounds, manage
            schedules, and payments. Includes admin panel and MongoDB storage.
          </p>
          <div className="mt-4 space-x-4">
            <a
              href="https://cricket-fronted.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Karthikeyanetha1/box-cricket-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-400">
          Contact & Links
        </h2>
        <p>Email: <a href="mailto:karthikeyanetha7@gmail.com" className="text-blue-400">karthikeyanetha7@gmail.com</a></p>
        <p>Phone: <a href="tel:8688496208" className="text-blue-400">8688496208</a></p>
        <div className="mt-3 space-x-6">
          <a
            href="https://www.linkedin.com/in/karthikeya-gurram-59209726a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Karthikeyanetha1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} G. Karthikeya. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
