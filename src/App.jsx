import './App.css'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import data from './data'

// icon
import earthicon from './assets/earthicon.png'
import locationicon from './assets/locationicon.png'

function App() {
  const cardElements = data.map((card) => {
    return <Card mapicon={locationicon} key={card.id} data={card} />
  })
  console.log(cardElements)

  return (
    <div className='app--container'>
      <Navbar img={earthicon} />
      {cardElements}
    </div>
  )
}

export default App
