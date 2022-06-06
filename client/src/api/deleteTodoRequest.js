import { API_URL, token } from "./config"

export default (todo) => {
  return fetch(`${API_URL}/todos/${todo._id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    },
  })
}