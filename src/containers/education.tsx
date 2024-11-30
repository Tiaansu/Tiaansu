import Container from '@/components/site/container';

type Education = {
    school: string;
    course: string;
    startDate: Date;
    endDate?: Date;
};

const educations: Education[] = [
    {
        school: 'Access Computer College',
        course: 'Information Communication Technology (ICT)',
        startDate: new Date(2020, 7),
        endDate: new Date(2022, 6),
    },
    {
        school: 'Access Computer College',
        course: 'Bachelor of Science in Information Technology (BSIT)',
        startDate: new Date(2022, 7),
    },
];

export default function Education() {
    return (
        <Container>
            <h1 className='text-3xl font-bold'>Education</h1>
            {educations
                .sort(
                    (a, b) =>
                        b.startDate.getFullYear() - a.startDate.getFullYear()
                )
                .map((education) => (
                    <div
                        className='flex items-center justify-between'
                        key={`${
                            education.school
                        }@${education.startDate.getFullYear()}`}
                    >
                        <div className='flex flex-col'>
                            <span className='font-bold'>
                                {education.school}
                            </span>
                            <span>{education.course}</span>
                        </div>
                        <span className='float-right'>
                            {education.startDate.getFullYear()}
                            {' – '}
                            {education.endDate?.getFullYear() ?? 'Present'}
                        </span>
                    </div>
                ))}
        </Container>
    );
}
