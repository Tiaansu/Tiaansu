import AboutMe from '@/components/containers/about-me';
import Education from '@/components/containers/education';
import Footer from '@/components/containers/footer';
import Introduction from '@/components/containers/introduction';
import Projects from '@/components/containers/projects';
import Skills from '@/components/containers/skills';

export default function Home() {
  return (
    <main className='w-screen h-screen px-4 py-8 flex flex-col items-center gap-10 overflow-hidden overflow-y-scroll'>
      <Introduction />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
      <Footer />
    </main>
  );
}
