import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import createTodoRequest from '../api/createTodoRequest';

export const CreateTodoForm = () => {
  const [text, setText] = useState('');

  const queryClient = useQueryClient();

  const { mutate: createTodo } = useMutation(
    (newTodo) => createTodoRequest(newTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) return;
        createTodo({
          text,
        });
        setText('');
      }}
    >
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      />
      <button>Create</button>
    </form>
  );
};
