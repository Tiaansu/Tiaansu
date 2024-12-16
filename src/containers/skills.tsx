import Container from '@/components/site/container';
import { Badge } from '@/components/ui/badge';
import { promises as fs } from 'fs';

type Skills = {
    title: string;
    skills: string[];
};

export default async function Skills() {
    const file = await fs.readFile(
        process.cwd() + '/src/data/skills.json',
        'utf8'
    );
    const skills = JSON.parse(file) as Skills[];

    return (
        <Container>
            <h1 className='text-3xl font-bold'>Skills</h1>
            {skills.map((skill) => (
                <div key={skill.title} className='flex flex-col'>
                    <h3>{skill.title}</h3>
                    <div className='flex gap-2 flex-wrap'>
                        {skill.skills.map((skill) => (
                            <Badge key={skill}>{skill}</Badge>
                        ))}
                    </div>
                </div>
            ))}
        </Container>
    );
}
