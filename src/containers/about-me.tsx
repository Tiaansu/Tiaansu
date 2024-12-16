import Container from '@/components/site/container';
import AboutMeData from '@/data/about-me.json';

const aboutMe: string[] = AboutMeData;

export default function AboutMe() {
    return (
        <Container>
            <h1 className='text-3xl font-bold'>About Me</h1>
            <ul>
                {aboutMe.map((about, index) => (
                    <li key={index} className='flex gap-3'>
                        <span>{' – '}</span>
                        <span>{about}</span>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
