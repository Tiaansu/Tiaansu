import Container from '@/components/site/container';

const aboutMe: string[] = [
    `I'm Marlon Cabading also known as Tiaansu.`,
    `I'm a full-stack software engineer that focuses more on back-end.`,
    `I'm passionate about learning and building new things.`,
    `I'm always looking for new and exciting projects.`,
    `I'm currently taking Bachelor of Science in Information Technology at Access Computer College.`,
    `Besides coding, I enjoy playing games and watching anime.`,
];

export default function AboutMe() {
    return (
        <Container>
            <h1 className='text-3xl font-bold'>About Me</h1>
            <ul>
                {aboutMe.map((about, index) => (
                    <li key={index} className='flex gap-3'>
                        <span>{' – '}</span>
                        <span>{about}</span>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
