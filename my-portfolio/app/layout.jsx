"use client";
import "./globals.css";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto leading-r">
          <div
            className="leading-relaxed text-slate-200 antialiased selection:bg-teal-300
           selection:text-teal-900">
            <div
              className="z-[-10] bg-slate-950 fixed inset-0
             bg-[radial-gradient(circle_500px_at_50%_200px,#034a4391,transparent)]"></div>
          </div>
        </div>
        <Overview />
        <Skills />
        {/* <Project /> */}
        <Contact />

        {children}
      </body>
    </html>
  );
}
