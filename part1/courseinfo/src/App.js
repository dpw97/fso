const Header = (props) => {
  console.log(props.course.name)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p> {props.p.name} {props.p.exercises}</p>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part p={props.course.parts[0]}/>
      <Part p={props.course.parts[1]}/>
      <Part p={props.course.parts[2]}/>
    </div>
  )
  
}

const Footer = (props) => {
  console.log(props.course.parts[0].exercises)
  const sum = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}
const App = () => {
  
   
  const course = {
    name:'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name:'State of a component',
      exercises: 14
    }
  ]
}
  

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Footer course={course}/>
    </div>
  )
}

export default App