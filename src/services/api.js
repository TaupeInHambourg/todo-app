import axios from 'axios'
const API_URL = 'http://localhost:3000'

async function getTodos () {
  const todos = await axios.get(API_URL + '/todos')
  return todos.data
}

async function addTodo (todo) {
  const response = await axios.post(API_URL + '/todos', todo)
  return response.data
}

async function deleteTodo (id) {
  console.log(id)
  const response = await axios.delete(API_URL + '/todos', { data: { id } })
  return response.data
}

async function updateTodo (todo) {
  console.log('UPDATE')
  console.log(todo)
  const response = await axios.put(API_URL + '/todos', todo)
  return response.data
}

export {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
}
