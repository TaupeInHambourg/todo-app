import { Card, CardHeader, Image } from '@nextui-org/react'

function ToDo ({ title, description }) {
  return (
    <Card>
      <CardHeader className='flex gap-3'>
        <Image
          alt='nextui logo'
          height={40}
          radius='sm'
          src='data:image/png;base64,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'
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
