import Container from '@/components/site/container';
import { promises as fs } from 'fs';

export default async function AboutMe() {
    const file = await fs.readFile(
        process.cwd() + '/src/data/about-me.json',
        'utf8'
    );
    const aboutMe = JSON.parse(file) as string[];

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
