const Header = (props) => {
const course = props.course.name;

return (
  <h1> {course} </h1>
)
}

const Part = (props) => {
  const part = props.part
  return (
    <p >{part.name} {part.exercises}</p>
  )
}
const Content = (props) => {
  const parts = props.parts

  return (
    <>
    {parts.map((part,i) => <Part part={part} key={i}/>)}
    </>
  )
  }

const Total = (props) => {
    const parts = props.parts
    let sum = parts.reduce((acc,cur) => acc+cur.exercises,0);
    return (
      <p>Number of exercises {sum}</p>
    )
    }

  


const App = () => {


  

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
   const parts = [part1,part2,part3]
   const course = {name:'Half Stack application development',
   parts: parts}

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App