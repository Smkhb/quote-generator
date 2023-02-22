import { useState } from "react"
import MainBox from "./components/MainBox"

function App() {
  
  const [quote,setQuote] = useState('');

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')
    .then(quotes => quotes.json())
    .then(quote => {
      let randomNum = Math.floor(Math.random() * quote.length)
      setQuote(quote[randomNum])
    })
  }    

  return (


    <div className="App">
      <h1>Hello World!</h1>
      <MainBox quote={quote} getQuote={getQuote} />
    </div>
  )
}

export default App
