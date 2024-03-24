import { Badge, Button, Card, CardBody, CardHeader, Divider, Image } from '@nextui-org/react'
import DeleteTodo from './DeleteTodo'
import { FaPen } from 'react-icons/fa'
// import { useState } from 'react'

function ToDo ({ todo, openEditModal, loading }) {
  const { title, description, _id, status, important } = todo
  // const [visible, setvisible] = useState(false)

  // const isVisible = ({ important }) => {
  //   if ({ important }.value === false) {
  //     setvisible(true)
  //   } else if ({ important }.value === true) {
  //     setvisible(false)
  //   }
  // }

  const isVisible = (i) => {
    if (i.value === false) {
      i = true
    } else if (i.value === true) {
      i = false
    }
    console.log('IMPORTANT', i)
  }

  return (
    <Card className='w-full' loading={loading}>
      <Badge
        content=''
        color='danger'
        placement='top-right'
        isInvisible={isVisible({ important })}
        // isInvisible={visible}
      >
        <CardHeader className='flex flex-row gap-3 w-full'>
          <Image
            alt='image de la todo'
            radius='sm'
            src='../public/images/todo.jpeg'
            className='w-40 object-cover min-w-40 min-h-40'
          />
          <div className='flex flex-col flex-grow'>
            <CardHeader>
              <div className='flex flex-col flex-grow'>
                <p className='text-md'>{title}</p>
                <p className='text-tiny text-default-800'>{status}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className='text-small text-default-500'>{description}</p>
            </CardBody>
          </div>
          <div className='flex flex-col gap-4'>
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
            <DeleteTodo id={_id} />
          </div>
        </CardHeader>
      </Badge>
    </Card>
  )
}

export default ToDo
