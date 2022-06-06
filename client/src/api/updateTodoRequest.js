import { API_URL, token } from "./config"

export default (todo) => {
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