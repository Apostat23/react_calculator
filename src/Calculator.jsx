import { useState } from 'react'

export const Calculator = ({title = 'Calculator App'}) => {
  const [operators, setOperators] = useState('')
  const [result, setResult] = useState('')
  const operatorsHandler = (input) => setOperators(previous => previous + input)
  const evaluate = () => setResult(() => eval(operators))
  const clearDisplay = () => { setOperators(() => '') }
  const clearAll = () => {
    setResult(() => '') 
    setOperators(() => '')
  }

  return (
    <>
      <h1> { title } </h1>
      <p> {operators} = {result} </p>
      <div className='calculator'>
        {[1,2,3,4,5,6,7,8,9,0,'+','-','/','*','**(1/','(',')'].map(
          i => (<button key={i} onClick={() => operatorsHandler(i)}> {i} </button>)
        )}
        <button onClick={evaluate}>=</button>
        <button onClick={clearDisplay}>CC</button>
        <button onClick={clearAll}>CA</button>
      </div>
    </>
  )
}
