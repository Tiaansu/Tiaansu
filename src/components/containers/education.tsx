import Container from '@/components/site/container';
import educations from '@/data/education';

export default function Education() {
  const sorted = educations.sort(
    (a, b) =>
      new Date(b.startDate).getFullYear() - new Date(a.startDate).getFullYear(),
  );

  return (
    <Container>
      <h1 className='text-3xl font-bold'>Education</h1>
      {sorted.map(education => {
        const startDate = new Date(education.startDate);
        const endDate = education.endDate
          ? new Date(education.endDate).getFullYear()
          : 'Present';

        return (
          <div
            key={education.program}
            className='flex items-start justify-between'
          >
            <div className='flex flex-col'>
              <span className='font-bold'>{education.school}</span>
              <span className='text-sm'>{education.program}</span>
            </div>
            <span className='float-right'>
              {startDate.getFullYear()} - {endDate}
            </span>
          </div>
        );
      })}
    </Container>
  );
}
