import { API_URL, token } from "./config"

export default (todo) => {
  return fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      text: todo.text,
      completed: false
    })
  })
    .then(response => response.json())
}