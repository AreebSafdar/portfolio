import { MapPin, Calendar, Code } from "lucide-react";

export const metadata = {
  title: "About",
  description: "About Areeb Safdar - Frontend Developer specializing in React, Next.js, and modern web technologies",
};
export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "1+ Years Experience",
      description: "Building modern web applications",
    },
    {
      icon: Calendar,
      title: "Recent Graduate",
      description: "Completed ICS in 2025",
    },
    {
      icon: MapPin,
      title: "Based in Pakistan",
      description: "Rahim Yar Khan",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            I&apos;m <span className="text-blue-600 font-semibold">Areeb Safdar</span>, 
            a passionate Frontend Developer based in Rahim Yar Khan, Pakistan. With over 
            1+ years of experience in building modern web applications, I specialize in 
            creating clean, responsive, and user-friendly interfaces.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 space-y-8">
          {/* Journey */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-mono">
              My Journey
            </h2>
            <p className="text-gray-600 leading-relaxed">
              My journey into web development began with a curiosity about how 
              websites work. Over the past year, I&apos;ve dedicated myself to 
              mastering modern frontend technologies and building projects that 
              solve real-world problems. I believe in continuous learning and 
              staying updated with the latest trends in web development.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-mono">
              Technical Expertise
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              My expertise lies in JavaScript and React-based frameworks like Next.js. 
              I have deep experience in HTML, CSS, and modern CSS frameworks like 
              Tailwind CSS, Material-UI, and Bootstrap. I&apos;m comfortable working 
              with state management libraries like Redux and building responsive, 
              accessible web applications.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I enjoy solving programming challenges, debugging complex issues, and 
              working on projects that push my boundaries. I&apos;m particularly 
              passionate about creating intuitive user interfaces and optimizing 
              web performance.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-mono">
              Education
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">
                Intermediate in Computer Science (ICS)
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                Niccas College, Rahim Yar Khan
              </p>
              <p className="text-gray-500 text-sm">Graduated: 2025</p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-mono">
              Experience
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I&apos;ve worked on various frontend development projects, including 
              social media clones, AI-powered applications, and responsive websites. 
              My experience includes building complete user interfaces from scratch, 
              integrating APIs, implementing responsive designs, and ensuring 
              cross-browser compatibility.
            </p>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-mono">
              Beyond Code
            </h2>
            <p className="text-gray-600 leading-relaxed">
              When I&apos;m not coding, I enjoy exploring my creative side through 
              sketching, painting, and crafting. I&apos;m also passionate about video 
              editing and creating visual content. These creative pursuits help me 
              bring a unique perspective to my development work and keep me inspired.
            </p>
          </section>

          {/* Contact CTA */}
          <section className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-600 mb-4">
              Interested in working together? I&apos;d love to hear from you!
            </p>
            <a
              href="/Contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
