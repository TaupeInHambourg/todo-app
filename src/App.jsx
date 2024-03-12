import './App.css'
import ToDoList from './components/ToDoList'
import { addTodo, getTodos } from './services/api'
import { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'

function App () {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getData = async () => {
      const todosData = await getTodos()
      setTodos(todosData)
    }

    getData()
  }, [])

  const handleAddTodo = async (todo) => {
    await addTodo(todo)
  }

  return (
    <>
      <ToDoList
        todos={todos}
      />
      <AddTodo
        onAddTodo={handleAddTodo}
      />
    </>
  )
}

export default App
