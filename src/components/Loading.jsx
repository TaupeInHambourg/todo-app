import { CircularProgress } from '@nextui-org/react'

function Loading () {
  return (
    <div class='flex w-full justify-center '>
      <CircularProgress size='md' aria-label='Loading...' color='primary' />
    </div>
  )
}

export default Loading
