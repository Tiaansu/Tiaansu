import Link from 'next/link';
import Container from '@/components/site/container';
import { Badge } from '@/components/ui/badge';
import projects from '@/data/projects';

export default function Projects() {
  return (
    <Container>
      <h1 className='text-3xl font-bold'>Projects</h1>
      {projects.map(project => (
        <div key={project.name}>
          <Link
            href={project.url}
            className='hover:text-primary transition-colors ease-in-out'
          >
            <h2 className='text-lg font-bold'>{project.name}</h2>
          </Link>
          <p className='leading-7'>{project.description}</p>
          <div className='flex gap-2 flex-wrap'>
            {project.stacks.map(stack => (
              <Badge key={stack}>{stack}</Badge>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
}
