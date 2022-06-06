import './App.css';
import readTodosRequest from './api/readTodosRequest';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';
import { TodoItem } from './components/TodoItem';
import { CreateTodoForm } from './components/CreateTodoForm';

function App() {
  const { isLoading, data: todos } = useQuery(
    'todos',
    readTodosRequest
  );

  return (
    <div className="App">
      <h1>MERN TODO APP</h1>
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => (
          <TodoItem todo={todo} key={todo._id} />
        ))
      )}
      <CreateTodoForm />
    </div>
  );
}

export default App;
