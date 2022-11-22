import { useState } from 'react'

const Header = () => <h1>give feedback</h1>
const Button = ({handleClick, text}) => {
  return (
    <div>
        <button onClick={handleClick}>{text}</button>
    </div>)
}
const StatisticLine = ({text, value}) => <tr><td>{text}</td> <td>{value}</td></tr>

const Statistics = ({good,bad,neutral}) => {

  let all = good + bad + neutral 
  if(all === 0) {
    return <p>no feedback given</p>
  }
  
  let average = (good - bad) / all
  let positive = (good / all) * 100.0
  let positiveText = positive.toString() + '%'
  return (
    <div>
      <h1>statistics</h1>
      <table>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='average' value={average}/>
      <StatisticLine text='positive' value={positiveText}/>
      </table>
      
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setGoodValue = () => {
    setGood(good + 1)
    console.log(good)
  }

  const setBadValue = () => {
    setBad(bad + 1)
  }
  const setNeutralValue = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <Header/>
      <Button handleClick ={() => setGoodValue()} text='good'/>
      <Button handleClick ={() => setBadValue()} text='bad'/>
      <Button handleClick ={() => setNeutralValue()} text='neutral'/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
      
    </div>
  )
}

export default App