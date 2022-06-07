import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';

import readTodosRequest from '../api/readTodosRequest';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoForm } from '../components/CreateTodoForm';
import { TokenContext } from '../App';

export const TodoPage = () => {
  const [token] = useContext(TokenContext);

  const { isLoading, data: todos } = useQuery('todos', () =>
    readTodosRequest(token)
  );
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
      <CreateTodoForm />
    </div>
  );
};
