import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import momento from './img/momento-instagram-clone.png';
import linkedin from './img/linkedin-clone.png';
import AI from './img/AI-chat-IMG.png';

export const metadata = {
  title: "Home",
  description:
    "Areeb Safdar - Frontend Developer Portfolio showcasing modern web development projects and skills",
};

const projects = [
  {
    id: 1,
    name: "Momento - Instagram Clone",
    description:
      "A full-featured Instagram clone with social media feed, user posts, and engagement features. Built with React and Material-UI.",
    image: momento,
    tech: ["React.js", "Next.js", "Material-UI", "Redux"],
    github: "https://github.com/AreebSafdar",
    demo: null,
  },
  {
    id: 2,
    name: "LinkedIn Clone",
    description:
      "Professional networking platform featuring user profiles, connection requests, and feed with posts in a clean responsive layout.",
    image: linkedin,
    tech: ["React", "Next.js", "Material-UI", "Axios"],
    github: "https://github.com/AreebSafdar",
    demo: null,
  },
  {
    id: 3,
    name: "AI Chat & Image Generator",
    description:
      "AI-powered application with chat interface and image generation capabilities. Modern UI with Tailwind CSS.",
    image: AI,
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/AreebSafdar",
    demo: null,
  },
];

const technologies = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
  { name: "Tailwind", icon: "/icons/tailwindcss.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "VS Code", icon: "/icons/vscode.svg" },
];

export default function Homepage() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Areeb Safdar
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 font-mono font-medium mb-6">
            Frontend Developer
          </h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed mb-10">
            Innovative and detail-oriented Frontend Developer with a strong
            foundation in modern web technologies. Passionate about building clean,
            responsive, and user-friendly web interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/Project" className="btn-primary">
              View My Work
            </Link>

            <Link href="/Contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in modern web development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/Project"
              className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS & TECHNOLOGIES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-4 group"
              >
                <div className="w-16 h-16 relative group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 text-center">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/Skill"
              className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <Link
            href="/Contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
