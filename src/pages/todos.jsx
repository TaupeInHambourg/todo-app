import ToDoList from '../components/ToDoList'
import AddTodo from '../components/AddTodo'
import { useTodos } from '../hooks/todosHooks'

function Todos () {
  const { todos } = useTodos()
  return (
    <>
      <ToDoList
        todos={todos}
      />
      <AddTodo />
    </>
  )
}

export default Todos
