import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json' 

function App() {
  
  const getRandomFromArray = (arr) => {
  const indexRandom = Math.floor(arr.length * Math.random())
  return arr[indexRandom]
}

const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))
const [randomColor, setRandomColor] = useState(getRandomFromArray(colors))

  const handleClick = () =>{
  setQuoteRandom (getRandomFromArray(quotes))
  setRandomColor(getRandomFromArray(colors))
}

const objStyle = {backgroundColor: randomColor}

  return (
    <div className="App" style={objStyle}>
      <QuoteBox 
      quoteRandom={quoteRandom}
      handleClick={handleClick}
      randomColor={randomColor}
      />
    </div>
  )
}

export default App
