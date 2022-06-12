import React, {
  useContext,
  useState,
  useEffect,
} from 'react';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';

import readTodosRequest from '../api/readTodosRequest';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoForm } from '../components/CreateTodoForm';
import { TokenContext } from '../App';

export const TodoPage = () => {
  const [token] = useContext(TokenContext);
  const [page, setPage] = useState(0);

  const {
    isLoading,
    refetch,
    data: todos,
  } = useQuery(['todos', page], () =>
    readTodosRequest(token, page)
  );

  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <div>
      <h1>MERN TODO APP</h1>
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => (
          <TodoItem todo={todo} key={todo._id} />
        ))
      )}

      <button
        onClick={() => {
          setPage((lastPage) => Math.max(0, lastPage - 1));
        }}
        disabled={page === 0}
      >
        {'<'}
      </button>
      <button
        onClick={() => {
          setPage((lastPage) => lastPage + 1);
        }}
        disabled={todos.length < 2}
      >
        {'>'}
      </button>

      <CreateTodoForm />
    </div>
  );
};
