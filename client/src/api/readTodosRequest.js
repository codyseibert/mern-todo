import {API_URL } from './config'

export default function() {
  return fetch(`${API_URL}/todos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
}