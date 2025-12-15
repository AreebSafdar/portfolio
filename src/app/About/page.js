export const metadata = {
  title: "About | Portfolio",
  description: "About Areeb - Frontend Developer Portfolio",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Journey</h2>
        <p>
          I&apos;m Areeb Safdar, A frontend developer based in Rahim Yar Khan. I have over 1+ years of experience in building modern web applications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">My Skills</h2>
        <p>
          My expertise lies in JavaScript and React-based frameworks like Next.js. I also have deep experience in HTML, CSS, Material UI, Bootstrap, Tailwindcss and JS.
        </p>
        <p>
          I enjoy solving programming challenges, debugging, and working on coding projects.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p>
          I completed my intermediate in 2025 as an ICS student at Niccas College, Rahim Yar Khan.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <p>I&apos;ve worked on frontend development and creating websites.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Personal Interests</h2>
        <p>
          In my free time, sketching, painting, crafting, and video editing.
        </p>
      </section>
    </div>
  );
}

