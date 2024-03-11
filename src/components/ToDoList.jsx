import ToDo from './Todo'

function ToDoList ({ todos }) {
  return (
    <div className='flex flex-col gap-4 py-2 px-4'>
      {
        todos.map((todo) => {
          return (
            <ToDo
              key={todo.title}
              title={todo.title}
              description={todo.description}
            />
          )
        })
     }
    </div>
  )
}

export default ToDoList
