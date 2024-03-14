import { Button, Card, CardHeader, Image } from '@nextui-org/react'
import DeleteTodo from './DeleteTodo'
import { FaPen } from 'react-icons/fa'

function ToDo ({ todo, openEditModal }) {
  const { title, description, image, _id } = todo
  return (
    <Card>
      <CardHeader className='flex gap-3'>
        <Image
          alt='nextui logo'
          height={40}
          radius='sm'
          src={image}
          width={40}
        />
        <div className='flex flex-col flex-grow'>
          <p className='text-md'>{title}</p>
          <p className='text-small text-default-500'>{description}</p>
        </div>
        <div className='flex flex-col'>
          <Button
            className='w-8 h-8'
            radius='full'
            color='primary'
            variant='ghost'
            isIconOnly
            onPress={() => openEditModal(todo)}
          >
            <FaPen className='w-5 h-5' />
          </Button>
        </div>
        <div className='flex flex-col'>
          <DeleteTodo id={_id} />
        </div>
      </CardHeader>
    </Card>
  )
}

export default ToDo
