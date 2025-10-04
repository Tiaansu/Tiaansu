import Container from '@/components/site/container';
import aboutMe from '@/data/about-me';

export default function AboutMe() {
  return (
    <Container>
      <h1 className='text-3xl font-bold'>About Me</h1>
      <ul>
        {aboutMe.map(about => (
          <li key={about} className='flex gap-3'>
            <span>&ndash;</span>
            <span>{about}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
