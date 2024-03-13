import { Button } from '@nextui-org/react'
import { MdDelete } from 'react-icons/md'

function DeleteTodo ({id, onDelete}) {
  const handleDeleteTodo = (event) => {
    if (onDelete) onDelete(id)
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
