import { API_URL } from "./config"

export default (token, page) => {
  return fetch(`${API_URL}/todos?page=${page}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    }
  })
    .then(response => response.json())
}