import Image from 'next/image';
import momento from '../img/momento-instagram-clone.png';
import linkedin from '../img/linkedin-clone.png';
import AI from '../img/AI-chat-IMG.png';


export const metadata = {
  title: {
    default: "Portfolio | Areeb Safdar",
    template: "%s | Portfolio",
  },
  description:
    "Areeb Safdar portfolio showcasing frontend developer projects and skills",
};

export default function Homepage() {
  return (
    <div className="px-6 md:px-20 lg:px-28 font-sans">

      {/* HERO SECTION */}
      <section className="text-center mt-32">
        <h1 className="text-5xl font-extrabold text-purple-700">
          Hi, I'm <span className="text-purple-900">AREEB SAFDAR</span>
        </h1>

        <h3 className="text-2xl mt-4 text-gray-700 font-semibold">
          A Frontend Developer
        </h3>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Innovative and detail-oriented Frontend Developer with a strong
          foundation in modern web technologies. Passionate about building clean,
          responsive, and user-friendly web interfaces.
        </p>

        {/* Buttons */}
        <div className="mt-8 space-x-4">
          <a
            href="/Project"
            className="px-6 py-3 rounded-lg text-white font-medium bg-linear-to-r from-purple-700 via-fuchsia-600 to-pink-500"
          >
            View My Work
          </a>

          <a
            href="/contact"
            className="px-6 py-3 rounded-lg font-medium bg-linear-to-r from-pink-200 to-purple-100 text-gray-800"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="mt-32">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD */}
          <div className="border rounded-xl p-5 shadow hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 rounded mb-4">
              <Image src={momento} alt="instagram clone"></Image>
            </div>
            <h3 className="text-xl font-semibold">Momento Instagram clone</h3>
            <p className="text-gray-600 mt-2">
              Momento Instagram clone application interface showing social media feed with user posts and engagement features
            </p>
          </div>

          <div className="border rounded-xl p-5 shadow hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 rounded mb-4">
              <Image src={linkedin} alt="linkedin clone"></Image>
            </div>
            <h3 className="text-xl font-semibold">linkedin clone</h3>
            <p className="text-gray-600 mt-2">
              LinkedIn clone profile dashboard featuring user profile section at top, connection requests area, and feed displaying shared posts and professional updates in a clean responsive layout with blue accent colors
            </p>
          </div>

          <div className="border rounded-xl p-5 shadow hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 rounded mb-4">
              <Image src={AI} alt="AI-Chat-Image"></Image>
            </div>
            <h3 className="text-xl font-semibold">Ai-Chat-Image</h3>
            <p className="text-gray-600 mt-2">
              AI chat and image generation application interface with user input area, chat history display, and image generation features.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="mt-32 text-center">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

          <div className="p-6 border rounded-xl shadow">
            <div className="mx-auto bg-purple-300 text-white w-14 h-14 flex items-center justify-center rounded-full text-2xl">
              ✦
            </div>
            <h4 className="font-semibold mt-4">Editing</h4>
            <p className="text-gray-600 text-sm">
              PicLumen, CapCut, Snap, InVideo
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <div className="mx-auto bg-blue-300 text-white w-14 h-14 flex items-center justify-center rounded-full text-2xl">
              ⚙
            </div>
            <h4 className="font-semibold mt-4">Frameworks</h4>
            <p className="text-gray-600 text-sm">React.js, Next.js, Tailwind, Material-UI, Bootstrap</p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <div className="mx-auto bg-blue-400 text-white w-14 h-14 flex items-center justify-center rounded-full text-2xl">
              {"</>"}
            </div>
            <h4 className="font-semibold mt-4">Programming Languages</h4>
            <p className="text-gray-600 text-sm">HTML, CSS, JavaScript</p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <div className="mx-auto bg-blue-400 text-white w-14 h-14 flex items-center justify-center rounded-full text-2xl">
              🎨
            </div>
            <h4 className="font-semibold mt-4">Graphic Design</h4>
            <p className="text-gray-600 text-sm">PicLumen, PixelLab</p>
          </div>

          <div className="p-6 border rounded-xl shadow">
            <div className="mx-auto bg-blue-500 text-white w-14 h-14 flex items-center justify-center rounded-full text-2xl">
              ⚡
            </div>
            <h4 className="font-semibold mt-4">Tools</h4>
            <p className="text-gray-600 text-sm"> Github, Visual Studio Code
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="text-center mt-32 mb-20">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          I'm always open to discussing new projects and creative ideas.
        </p>

        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </section>

    </div>
  );
}


