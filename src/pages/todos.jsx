// import Loading from '../components/Loading'
import ToDoList from '../components/ToDoList'
import AddTodo from '../components/buttons/AddTodo'
import { useTodos } from '../hooks/todosHooks'

function Todos () {
  const { todos } = useTodos()
  return (
    <>
      <ToDoList
        todos={todos}
        className='w-full bg-orange-500'
      />
      <AddTodo />
    </>
  )
}

export default Todos
