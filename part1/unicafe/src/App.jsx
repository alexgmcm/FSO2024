import { useState } from 'react'

const Button = ({text,clickHandler}) => {
return(
  <>
  <button onClick={clickHandler}>{text}</button>
  </>
)
}

const StatisticLine = ({name, val}) => {
  return(
    <tr><td>{name}</td> <td>{val}</td></tr>
  )

}

const Statistics = ({stats}) => {
  const valMap = {"good":1,"neutral":0,"bad":-1};
  let sum = stats.reduce((acc,cur) => acc+cur.val,0);
  let weightSum = stats.reduce((acc,cur) => acc + (cur.val * valMap[cur.name]),0);
  let average = weightSum/sum;
  let posSum = stats.reduce((acc,cur) => acc + (cur.name==="good" ?  cur.val : 0),0);
if (sum > 0) {
return (
  <>
  <h1>Statistics</h1>
  <table>
  {stats.map((stat,i) => <StatisticLine key={i} name={stat.name} val={stat.val}/> )}
  <StatisticLine name="all" val={sum}/>
  <StatisticLine name="average" val={average}/>
  <StatisticLine name="positive" val={posSum}/>
  </table>
  </>
)
}
else
return (
  <>
  <h1>Statistics</h1>
  No feedback given.
  </>

)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incStateByOne = (state,setState) => {
    return () => {
      setState(state+1);
    }
  }

  const button_info = [ 
  {state:good,setState:setGood,text:"Good"},
  {state:neutral,setState:setNeutral,text:"Neutral"},
  {state:bad,setState:setBad,text:"Bad"}
]
let stats = [
  {name:"good",val:good},
  {name:"neutral",val:neutral},
  {name:"bad",val:bad}
]
  return (
    <>
    <h1>give feedback</h1>
    {button_info.map((button,i) => <Button key={i} text={button.text} clickHandler={incStateByOne(button.state,button.setState)}/> )}
    
    <Statistics stats={stats} />
  </>
  )
}

export default App