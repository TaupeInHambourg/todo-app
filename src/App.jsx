import './App.css'
import Clock from './components/Clock'

function App () {
  return (
    <>
      <Clock interval={10} />
      <Clock interval={200} />
    </>
  )
}

export default App
