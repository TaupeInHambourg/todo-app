import { Card, CardHeader, Image } from '@nextui-org/react'

function ToDo ({ title, description, image }) {
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
        <div className='flex flex-col'>
          <p className='text-md'>{title}</p>
          <p className='text-small text-default-500'>{description}</p>
        </div>
      </CardHeader>
    </Card>
  )
}

export default ToDo
