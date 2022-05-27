import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import users from './json/users.json'

const colors = ['#A01862', '#039A88', '#F2427D', '#2C5249', '#CE7049', '#B259CD', '#014B84']

function App() {
  
  const createNumberRandow = (array) => {
    return Math.floor(Math.random()* array.length)
  }

  const indexColorRandom = createNumberRandow(colors);
  const indexUserRandom = createNumberRandow(users);

  const [colorRandom, setColorRandom] = useState('#039A88');
  const [userRandom, setUserRandom] = useState(users[indexUserRandom]);
 
  const result = () => {
    setColorRandom(colors[indexColorRandom]);
    setUserRandom(users[indexUserRandom]);
     
  }
  const appStyle = {
    backgroundColor: colorRandom
  }

  return (
    <div className="App" style={appStyle}>
      <QuoteBox 
        result={result}
        userRandom={userRandom}
        colorRandom={colorRandom}
      /> 
    </div>
  )
}

export default App
