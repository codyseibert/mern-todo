import {API_URL } from './config'

export default function(id) {
  return fetch(`${API_URL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
}