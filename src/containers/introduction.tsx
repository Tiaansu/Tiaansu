import Container from '@/components/site/container';
import Link from 'next/link';

export default function Introduction() {
    return (
        <Container>
            <h1 className='text-3xl font-bold'>
                Kumusta! I&apos;m Marlon{' '}
                <span
                    role='img'
                    aria-label='waving hand'
                    className='animate-wave inline-block origin-[70%_70%]'
                >
                    👋
                </span>
            </h1>
            <p className='text-lg leading-7'>
                I&apos;m a full-stack software engineer that focuses more on
                back-end.{' '}
                <Link
                    href='mailto:dev.marlon.cabading@gmail.com'
                    className='text-primary underline underline-offset-2'
                >
                    Get in touch
                </Link>
            </p>
        </Container>
    );
}
