import { useEffect, useState } from "react"
import MainBox from "./components/MainBox"
import './App.css'

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

  useEffect(()=>getQuote(),[])

  return (

    <div className="App">
      <MainBox quote={quote} getQuote={getQuote} />
    </div>
  )
}

export default App
