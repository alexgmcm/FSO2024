import { useState, useEffect } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
useEffect(() => console.log(anecdotes),[]) //runs only once
const initialVotes =  new Array(anecdotes.length).fill(0);  
const [selected, setSelected] = useState(0);
const [votes, setVotes] = useState(initialVotes);
const [mostVoted,setMostVoted] = useState(0);

 const  getRandomAnecdote = () => {
    let randomIndex = Math.trunc(Math.random()*anecdotes.length);
    setSelected(randomIndex);
  }
  let curVotes = votes; //make mutable copy
  //setMostVoted(curVotes.reduce((iMax,x,i,arr) => x > arr[iMax] ? i : iMax, 0 ));
  const upvoteAnecdote = () => {
    curVotes[selected] += 1;
    setVotes(curVotes);
    setMostVoted(curVotes.reduce((iMax,x,i,arr) => x > arr[iMax] ? i : iMax, 0 ));
    console.log(curVotes);
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br/>
      <button onClick={upvoteAnecdote}>Upvote this anecdote!</button>
      <br/>
      <button onClick={getRandomAnecdote}>Get Random Anecdote!</button>
      <br />
      <h1>Anecdote with most votes</h1>
       {anecdotes[mostVoted]}
    </div>
  )
}

export default App