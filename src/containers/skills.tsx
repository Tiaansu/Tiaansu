import Container from '@/components/site/container';
import { Badge } from '@/components/ui/badge';

type Skills = {
    title: string;
    skills: string[];
};

const skills: Skills[] = [
    {
        title: 'Spoken Languages',
        skills: ['Tagalog/Filipino', 'English'],
    },
    {
        title: 'Programming Languages',
        skills: [
            'C/C++',
            'Javascript/Typescript',
            'HTML',
            'CSS',
            'Java',
            'Python',
            'PHP',
        ],
    },
    {
        title: 'Frameworks and Development Tools',
        skills: [
            'React',
            'Git',
            'GitHub',
            'Hono',
            'Node.js',
            'Next.js',
            'Discord.js',
            'Sapphire.js',
        ],
    },
    {
        title: 'Databases',
        skills: ['MongoDB', 'MySQL', 'SQLite'],
    },
    {
        title: 'Others',
        skills: ['CI/CD'],
    },
];

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
