const API_URL = `http://localhost:8080`

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1NDQzNDk4Mn0.nISvbfgjWAE5zJC7gp36XmPLYKxwHgcaU2s_JwKtWp4';

export default () => {
  return fetch(`${API_URL}/todos`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    }
  })
    .then(response => response.json())
}