export default function Skills() {
  const programming = [
    { name: "JavaScript", level: 70 },
    { name: "HTML / CSS", level: 95 },
  ];

  const tools = [
    { name: "Github", level: 50 },
    { name: "Visual Studio", level: 85 },
  ];

  const framework = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Material UI", level: 70 },
    { name: "Bootstrap", level: 60 },
  ];

  const renderSkills = (skills) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {skills.map((skill) => (
        <div key={skill.name} className="bg-white p-4 rounded-lg shadow">
          <p className="font-semibold mb-2">{skill.name}</p>
          <div className="w-full bg-gray-200 h-3 rounded">
            <div
              className="h-3 rounded bg-blue-600"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Programming Languages</h2>
        {renderSkills(programming)}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Tools & Technologies</h2>
        {renderSkills(tools)}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Framework</h2>
        {renderSkills(framework)}
      </section>
    </div>
  );
}

