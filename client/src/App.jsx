import './App.css';
import readTodosRequest from './api/readTodosRequest';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const { isLoading, data: todos } = useQuery(
    'todos',
    readTodosRequest
  );

  return (
    <div className="App">
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => (
          <div key={todo._id}>
            {todo.text}
            {`${todo.completed}`}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
