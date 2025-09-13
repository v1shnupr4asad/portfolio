import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Vishnu Prasad Venugopal
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full-Stack Developer • MERN Stack • DevOps Learner
        </motion.p>
        <div className="flex gap-4">
          <a
            href="/Vishnu_Prasad_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg text-gray-700">
          I’m a Computer Science student passionate about building scalable web
          applications and solving real-world problems. I specialize in MERN
          stack development and I’m currently exploring DevOps, deployment, and
          scalable architecture.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT Auth",
            "Docker",
            "Linux/WSL",
            "Tailwind CSS",
            "Framer Motion",
            "GitHub",
            "CI/CD",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-gray-100 py-20 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Paytm Clone",
              desc: "Replica of Paytm with authentication, balance, and transactions.",
              stack: ["React", "Node.js", "MongoDB"],
              link: "#",
              code: "#",
            },
            {
              name: "Quiz Platform",
              desc: "Quiz app with admin & user flows, JWT auth, and score tracking.",
              stack: ["Express", "MongoDB", "JWT"],
              link: "#",
              code: "#",
            },
            {
              name: "Blog App",
              desc: "Full-stack blog app with React Router frontend & Node backend.",
              stack: ["React", "Express", "MongoDB"],
              link: "#",
              code: "#",
            },
          ].map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
              <p className="text-gray-600 mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.stack.map((s, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={proj.link} className="text-blue-600 hover:underline">
                  Live
                </a>
                <a href={proj.code} className="text-gray-600 hover:underline">
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="mb-4">Let’s connect! Reach me at:</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:your-email@example.com" className="hover:underline">
            Email
          </a>
          <a href="https://github.com/yourgithub" className="hover:underline">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
