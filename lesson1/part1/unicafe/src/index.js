import React, { useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
) 

const GoodStat = (props) => <td>good {props.good}</td>
const NeutralStat = (props) => <td>neutral {props.neutral}</td>
const BadStat = (props) => <td>bad {props.bad}</td>
const AllStat = (props) => <td>all {props.all}</td>
const AverageStat = (props) => <td>average {props.average}</td>
const PositiveStat = (props) => <td>positive {props.positive} %</td>

const Statistics = (props) => {
    if(props.all === 0){
        return <p>No feedback given</p>
    }
    else{
        return(
            <div>
            <table>
                <tbody>
                    <tr><GoodStat good={props.good} /></tr>
                    <tr><NeutralStat neutral={props.neutral} /></tr>
                    <tr><BadStat bad={props.bad} /></tr>
                    <tr><AllStat all={props.all} /></tr>
                    <tr><AverageStat average={props.average} /></tr>
                    <tr><PositiveStat positive={props.positive} /></tr> 
                </tbody>
            </table>
        </div>
        )
    }
}
    
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const goodClick = () => {
        setGood(good + 1)
        setAll(all + 1)
        setAverage((((good + 1) * 1) + (neutral * 0) + (bad * -1)) / (all + 1))
        setPositive((((good + 1) * 1) / (all + 1)) * 100)
    }

    const neutralClick = () => {
        setNeutral(neutral  + 1)
        setAll(all + 1)
        setAverage(((good * 1) + ((neutral + 1) * 0) + (bad * -1)) / (all + 1))
        setPositive(((((good) * 1) + ((neutral) * 0))/ (all + 1)) * 100)
    }

    const badClick = () => {
        setBad(bad + 1)
        setAll(all + 1)
        setAverage(((good  * 1) + (neutral * 0) + ((bad * + 1) -1)) / (all + 1))
        setPositive(((((good) * 1) + ((bad) * -1))/ (all + 1)) * 100)
    }

    return(
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={goodClick} text="good" />
            <Button handleClick={neutralClick} text="neutral" />
            <Button handleClick={badClick} text="bad" />
  
            <h2>Statistics</h2>
                    <Statistics 
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            all={all}
                            average={average}
                            positive={positive}
                    />   
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));


