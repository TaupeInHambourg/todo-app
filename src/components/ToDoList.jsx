import { useDisclosure } from '@nextui-org/react'
import ToDo from './Todo'
import { useState } from 'react'
import AddTodoModal from './AddTodoModal'

function ToDoList ({ todos }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [todoToEdit, setTodoToEdit] = useState()

  /**
   * permet de mettre à jour todo en fonction de celui qui est cliqué
   */
  const handleOpenEditModal = (todo) => {
    setTodoToEdit(todo)
    onOpen()
  }
  return (
    <>
      <div className='flex flex-col gap-4 py-2 px-4'>
        {
        todos.map((todo) => {
          return (
            <ToDo
              key={todo._id}
              image={todo.images[0]}
              title={todo.title}
              description={todo.description}
              id={todo._id}
              todo={todo}
              openEditModal={handleOpenEditModal}
            />
          )
        })
     }
      </div>

      <AddTodoModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        todoToEdit={todoToEdit}
      />

    </>
  )
}

export default ToDoList
