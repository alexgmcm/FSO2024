const Header = (props) => {
    const course = props.course.name;
    
    return (
      <h2> {course} </h2>
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
          <p><b>Number of exercises {sum}</b></p>
        )
        }
    
    const Course = ({course}) => {
    return (
    <div>
          <Header course={course}/>
          <Content parts={course.parts}/>
          <Total parts={course.parts}/>
        </div>
    )
    }
    export default Course