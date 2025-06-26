import './App.css'
import { useState } from "react"

const App = () => {

  const [conselho, setConselho] = useState("")

  const buscar = () =>{
    fetch("https://api.adviceslip.com/advice")
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data)
      setConselho(data.slip.advice)
    })
    .catch((err )=> console.log(err))
  }
    return(
      <div className='glass-card'>
        <h1>Conselhos do dia</h1>
        <p>Clique no botão abaixo para receber um conselho aleatório!</p>
        <p> {conselho} </p>
        <button onClick={buscar}>Gerar Conselho</button>
      </div>
    )
  
}

export default App