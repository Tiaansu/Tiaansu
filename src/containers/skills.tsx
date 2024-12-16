import Container from '@/components/site/container';
import { Badge } from '@/components/ui/badge';
import SkillsData from '@/data/skills.json';

type Skills = {
    title: string;
    skills: string[];
};

const skills = SkillsData as unknown as Skills[];

export default function Skills() {
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
