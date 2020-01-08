import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const anecHighestVotes = (votes) => {
    let c = votes.indexOf(Math.max(...votes))
    return(
        <div>
            <h1>Anedote with most votes</h1>
            <p>{anecdotes[c]}</p>
            <p>has {votes[c]} votes</p>
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
   
    const generateAnecdotes = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))   
    }

    const addVote = () => {
        const copyVotes = [...votes]
        copyVotes[selected] += 1
        setVotes(copyVotes)
        console.log(copyVotes)
    }

    return(
        <div> 
            <h1>Anecdotes of the day</h1>
            <p>{props.anecdotes[selected ]}</p>
            <h4>has {votes[selected]} votes</h4> 
            <button onClick={addVote}>vote</button> 
            <button onClick={generateAnecdotes}>Next Anecdote</button>
            <div>{anecHighestVotes(votes)}</div>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));



  
