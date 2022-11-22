const Course = ({course}) => (
    <>
    {course.map(c =>
      <div>
      <Header course={c.name}/>
      <Content parts={c.parts}/>
      <Total parts={c.parts}/>
      </div>
      )}
    </>
)
const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const total = parts.reduce((acc,val) => acc + val.exercises, 0)
  return (<>
    <h2>total of {total} exercises</h2>
  </>)
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part =>
      <Part part={part} key={part.id}/>)} 
  </>

export default Course