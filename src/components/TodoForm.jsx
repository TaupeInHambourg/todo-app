import { Button, Input, Select, SelectItem, Switch, Textarea } from '@nextui-org/react'
import { useState } from 'react'

function TodoForm ({ todoToEdit, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    title: todoToEdit?.title || 'Dumb ways to yab',
    description: todoToEdit?.description || 'Se faire guillotiner par un bus',
    status: todoToEdit?.status[0] || 'TODO',
    important: todoToEdit?.important || false
  })

  const handleChange = (event) => {
    setFormData({
      // '...' est un spread operator, il permet de recréer la data en écrasant les valeurs qui changent
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit(formData, todoToEdit?._id)
    onClose()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-5'
    >
      <Input
        type='text'
        label='titre'
        name='title'
        labelPlacement='inside'
        variant='flat'
        value={formData.title}
        onChange={handleChange}
      />
      <Textarea
        type='text'
        label='contenu'
        name='description'
        labelPlacement='inside'
        variant='flat'
        minRows={3}
        maxRows={10}
        value={formData.description}
        onChange={handleChange}
      />
      <Select
        name='status'
        label='Status'
        variant='flat'
        onChange={handleChange}
        value={formData.status}
        defaultSelectedKeys={[formData.status]}
      >
        <SelectItem key='TODO' value='TODO' textValue='To do'>To do</SelectItem>
        <SelectItem key='IN-PROGRESS' value='IN-PROGRESS' textValue='En cours'>En cours</SelectItem>
        <SelectItem key='DONE' value='DONE' textValue='Validée'>Validée</SelectItem>
        <SelectItem key='CANCELED' value='CANCELED' textValue='Annulée'>Annulée</SelectItem>
        <SelectItem key='ARCHIVED' value='ARCHIVED' textValue='Archivée'>Archivée</SelectItem>
      </Select>
      <Switch
        label='important'
        value={formData.important}
        isSelected={formData.important}
        onValueChange={
          (isChecked) => setFormData({ ...formData, important: isChecked })
        }
      >
        Important
      </Switch>
      <Button
        type='submit'
        color='default'
      >
        {todoToEdit ? 'Modifier' : 'Ajouter'}
      </Button>
    </form>
  )
}

export default TodoForm
