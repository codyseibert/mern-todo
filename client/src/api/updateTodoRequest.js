import { API_URL } from "./config"

export default (todo, token) => {
  return fetch(`${API_URL}/todos/${todo._id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      text: todo.text,
      completed: todo.completed
    })
  })
    .then(response => response.json())
}