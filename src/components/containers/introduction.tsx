import Link from 'next/link';
import Container from '@/components/site/container';

export default function Introduction() {
  return (
    <Container>
      <h1 className='text-3xl font-bold'>
        Kumusta!{' '}
        <span
          role='img'
          aria-label='waving hand'
          className='animate-wave inline-block origin-[70%_70%]'
        >
          👋
        </span>
      </h1>
      <p className='text-lg leading-7'>
        I&apos;m Marlon, welcome to my website! I&apos;m a software engineer
        specialized in backend development.{' '}
        <Link
          href='mailto:jobs.marlon.cabading@gmail.com'
          className='text-primary underline underline-offset-2'
        >
          Get in touch
        </Link>
      </p>
    </Container>
  );
}
