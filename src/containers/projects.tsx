import Container from '@/components/site/container';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

type Project = {
    name: string;
    stacks: string[];
    description: string;
    url: string;
};

const sideProjects: Project[] = [
    {
        name: 'samp-cron',
        description: 'A cron plugin for SAMP/open.mp.',
        stacks: ['Rust'],
        url: 'https://github.com/tiaansu/samp-cron',
    },
    {
        name: 'strada',
        description: 'A simple kanban-style task tracker app',
        stacks: ['Typescript', 'Next.js', 'Prisma', 'MongoDB'],
        url: 'https://github.com/tiaansu/strada',
    },
    {
        name: 'tasks-tracker',
        description: 'A very simple tasks tracker',
        stacks: ['Typescript', 'Next.js', 'Prisma', 'MongoDB'],
        url: 'https://github.com/tiaansu/tasks-tracker',
    },
    {
        name: 'social-profiles',
        description: 'A simple app to share your social profiles',
        stacks: ['Typescript', 'Next.js', 'Prisma', 'MongoDB'],
        url: 'https://github.com/tiaansu/social-profiles',
    },
];

export default function Projects() {
    return (
        <Container>
            <h1 className='text-3xl font-bold'>Side Projects</h1>
            {sideProjects.map((project) => (
                <div key={project.name}>
                    <Link
                        href={project.url}
                        className='hover:underline underline-offset-2'
                    >
                        <h2 className='text-lg font-bold'>{project.name}</h2>
                    </Link>
                    <p className='leading-7'>{project.description}</p>
                    <div className='flex gap-2 flex-wrap'>
                        {project.stacks.map((stack) => (
                            <Badge key={stack}>{stack}</Badge>
                        ))}
                    </div>
                </div>
            ))}
        </Container>
    );
}
