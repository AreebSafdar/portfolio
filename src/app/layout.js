import '@/app/globals.css';

import Navbar from "./navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "Areeb Safdar | Frontend Developer Portfolio",
    template: "%s | Areeb Safdar",
    absolute: "",
  },
  description: "Frontend Developer portfolio showcasing modern web development projects and skills. Specializing in React, Next.js, and Tailwind CSS.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
