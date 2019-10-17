import React, {useState, useEffect} from 'react'

import './styles.css'

import MostraVoltas from './MostraVoltas'
import MostraTempo from './MostraTempo'
import Button from './Button'

function App() {
  const [numVoltas, setNumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() =>{
    let timer = null
    if (running) {
      timer = setInterval(() => {
        //console.log('chamou')
        setTempo(old => old + 1)
      }, 1000)  
    }
    return () => {
      if (timer) { // truthy valor que é convertido para verdadeiro
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
    //numVoltas++
    setNumVoltas(numVoltas + 1)
    console.log('increment')
  }

  const decrement = () => {
    //numVoltas--
    if (numVoltas > 0) {
      setNumVoltas(numVoltas - 1)
    }
    console.log('decrement')
  }

  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div>
      {/*
      <p>
        10<br/>
        Voltas
      </p>      
      <button>+</button>
      <button>-</button>
      <p>
      01:30<br/>
      Tempo médio por volta
      </p>
      <button>Iniciar</button>
      <button>Reiniciar</button>
      */}
      <MostraVoltas voltas={numVoltas}/>
      <Button text='+' className='bigger' onClick={increment}/>
      <Button text='-' className='bigger' onClick={decrement}/>
      {
        numVoltas > 0 &&
        <MostraTempo text='Tempo médio por volta' tempo={Math.round(tempo/numVoltas)}/>
      }
      <MostraTempo text='Tempo total' tempo={tempo}/>

      <Button text={running ? 'Pausar' : 'Iniciar'} onClick={toggleRunning}/>
      <Button text='Reiniciar' onClick={reset}/>
    </div>
  );
}

export default App
