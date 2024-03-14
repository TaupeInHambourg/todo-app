import { Button } from '@nextui-org/react'
import { MdDelete } from 'react-icons/md'
import { useTodos } from '../hooks/todosHooks'

function DeleteTodo ({ id }) {
  const { deleteTodo } = useTodos()

  const handleDeleteTodo = (event) => {
    deleteTodo(id)
  }
  return (
    <Button
      className='w-8 h-8'
      radius='full'
      color='danger'
      variant='ghost'
      isIconOnly
      onPress={handleDeleteTodo}
    >
      <MdDelete className='w-5 h-5' />
    </Button>
  )
}

export default DeleteTodo
