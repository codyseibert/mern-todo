import {API_URL } from './config'

export default function({id, text, completed}) {
  return fetch(`${API_URL}/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
      completed
    }),
  })
    .then((response) => response.json())
}