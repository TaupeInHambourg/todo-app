import { Button } from '@nextui-org/react'
import './App.css'
// import Clock from './components/Clock'
import ToDoList from './components/ToDoList'

const todos = [
  {
    title: 'TODO 1',
    description: 'TODO DESCRIPTION 1'
  },
  {
    title: 'TODO 2',
    description: 'TODO DESCRIPTION 2'
  },
  {
    title: 'TODO 3',
    description: 'TODO DESCRIPTION 3'
  },
  {
    title: 'TODO 4',
    description: 'TODO DESCRIPTION 4'
  }
]

function App () {
  return (
    <>
      <ToDoList
        todos={todos}
      />
      <Button color='primary'>Bouton</Button>
    </>
  )
}

export default App
