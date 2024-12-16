import Container from '@/components/site/container';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import ProjectsData from '@/data/projects.json';

type Project = {
    name: string;
    stacks: string[];
    description: string;
    url: string;
};

const sideProjects = ProjectsData as unknown as Project[];

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
