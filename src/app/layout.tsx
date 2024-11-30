import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import Providers from './providers';

export const viewport: Viewport = {
    themeColor: '#6d28d9',
};

export const metadata: Metadata = {
    title: 'Tiaansu',
    description: "Tiaansu's personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
