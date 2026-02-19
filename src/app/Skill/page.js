import Image from "next/image";

export const metadata = {
  title: "Skills",
  description: "Areeb Safdar's technical skills and expertise in web development technologies",
};

const skillCategories = [
  {
    title: "Frontend Frameworks & Libraries",
    skills: [
      { name: "React", level: 95, icon: "/icons/react.svg" },
      { name: "Next.js", level: 90, icon: "/icons/nextjs.svg" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90, icon: "/icons/javascript.svg" },
      { name: "HTML5", level: 95, icon: "/icons/html5.svg" },
      { name: "CSS3", level: 95, icon: "/icons/css3.svg" },
    ],
  },
  {
    title: "CSS Frameworks",
    skills: [
      { name: "Tailwind CSS", level: 85, icon: "/icons/tailwindcss.svg" },
      { name: "Material-UI", level: 80, icon: null },
      { name: "Bootstrap", level: 75, icon: null },
    ],
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git", level: 70, icon: "/icons/git.svg" },
      { name: "VS Code", level: 90, icon: "/icons/vscode.svg" },
      { name: "GitHub", level: 75, icon: null },
    ],
  },
  {
    title: "State Management & APIs",
    skills: [
      { name: "Redux", level: 75, icon: null },
      { name: "Axios", level: 80, icon: null },
      { name: "REST APIs", level: 85, icon: null },
    ],
  },
];

const otherSkills = [
  "Responsive Web Design",
  "Cross-browser Compatibility",
  "UI/UX Implementation",
  "Performance Optimization",
  "Debugging & Testing",
  "Agile Development",
  "Video Editing",
  "Graphic Design",
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels 
            in various web development technologies and tools.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-mono">
                {category.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {skill.icon && (
                          <div className="w-8 h-8 relative">
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <span className="font-semibold text-gray-800">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-blue-600">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="mt-12 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-mono">
            Additional Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all"
              >
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-gray-700 text-sm font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl shadow-md p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Always Learning
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            I believe in continuous learning and staying updated with the latest 
            web development trends and technologies. Currently exploring advanced 
            React patterns, TypeScript, and modern deployment strategies.
          </p>
        </div>
      </div>
    </div>
  );
}
