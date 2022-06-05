import createTodoRequest from './api/createTodoRequest';
import readTodosRequest from './api/readTodosRequest';
import './App.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { CreateTodoForm } from './components/CreateTodoForm';
import { TodoItem } from './components/TodoItem';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';

function App() {
  const { isLoading, data: todos } = useQuery('todos', () =>
    readTodosRequest()
  );

  const queryClient = useQueryClient();

  const { mutate: createTodo } = useMutation(
    (todoText) => createTodoRequest(todoText),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  return (
    <div className="App">
      <h1>Todo App</h1>

      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => (
          <TodoItem todo={todo} key={todo._id} />
        ))
      )}

      <CreateTodoForm createTodo={createTodo} />
    </div>
  );
}

export default App;
