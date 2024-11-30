import { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
    return (
        <div className='space-y-2 md:space-y-5 w-[600px] max-sm:w-[350px] max-w-[600px] max-sm:max-w-[350px]'>
            {children}
        </div>
    );
}
