export const metadata = {
  title: "Projects | Portfolio",
  description: "Areeb&apos;s project portfolio showcasing web development projects",
};

const projects = [
  {
    name: "Momento - Instagram Clone",
    description:
      "Momento Instagram clone application interface showing social media feed with user posts and engagement features",
    tech: ["React.js", "JavaScript", "Next.js", "Material-UI", "Redux", "CSS(MUI sx props)"],
  },
  {
    name: "LinkedIn Clone",
    description:
      "LinkedIn clone profile dashboard featuring user profile section at top, connection requests area, and feed displaying shared posts and professional updates in a clean responsive layout with blue accent colors",
    tech: ["React", " Next.js", "Material-UI", "Axios"]
  },
   {
    name: "Ai-Chat-Image",
    description:
"              AI chat and image generation application interface with user input area, chat history display, and image generation features.",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid gap-6 grid-cols-1 md:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.name}
          className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
        >
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


