import {API_URL } from './config'

export default function(todoText) {
  return fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: todoText,
    }),
  })
    .then((response) => response.json())
}