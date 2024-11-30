import AboutMe from '@/containers/about-me';
import Education from '@/containers/education';
import Footer from '@/containers/footer';
import Introduction from '@/containers/introduction';
import Projects from '@/containers/projects';
import Skills from '@/containers/skills';

export default function Home() {
    return (
        <main className='w-screen h-screen px-4 py-8 flex flex-col items-center gap-10 overflow-x-hidden'>
            <Introduction />
            <AboutMe />
            <Skills />
            <Education />
            <Projects />
            <Footer />
        </main>
    );
}
