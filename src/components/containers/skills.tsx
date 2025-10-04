import Container from '@/components/site/container';
import { Badge } from '@/components/ui/badge';
import skills from '@/data/skills';

export default function Skills() {
  return (
    <Container>
      <h1 className='text-3xl font-bold'>Skills</h1>
      {skills.map(skill => (
        <div key={skill.title} className='flex flex-col'>
          <h3 className='font-semibold'>{skill.title}</h3>
          <div className='flex gap-2 flex-wrap'>
            {skill.items.map(item => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
}
