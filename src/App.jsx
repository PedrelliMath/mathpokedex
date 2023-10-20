import { useState } from 'react'
import './App.css'
import CardList from './assets/components/CardList';


function App() {
  const [isVisible, setIsvisible] = useState(true);

  function handleClick(){
    setIsvisible(false);
  }

  return (
    <>
      <h1>Pokedex Matheus Phodas &#128514;</h1>
      { isVisible ? (
        <button onClick={handleClick}>Clique aqui</button>
      ): (
        <CardList></CardList>
      )}
    </>
  )
}

export default App
