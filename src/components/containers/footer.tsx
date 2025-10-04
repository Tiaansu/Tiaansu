import { LinkIcon } from 'lucide-react';
import Link from 'next/link';
import NowPlaying from '@/components/now-playing';
import Container from '@/components/site/container';

export default function Footer() {
  return (
    <Container>
      <footer className='space-y-1'>
        <p>
          All rights reserved &copy; {new Date().getFullYear()}{' '}
          <span className='text-primary'>Tiaansu</span>.{' '}
          <Link
            href='https://github.com/tiaansu/tiaansu'
            className='inline-flex items-center gap-1'
          >
            Source
            <LinkIcon className='size-3.5' />
          </Link>
        </p>
        <NowPlaying />
      </footer>
    </Container>
  );
}
