import React, {
  useState,
  useCallback,
  useEffect,
} from 'react';
import styles from './TodoItem.module.css';
import { BsFillTrashFill } from 'react-icons/bs';
import updateTodoRequest from '../api/updateTodoRequest';
import deleteTodoRequest from '../api/deleteTodoRequest';
import { useMutation, useQueryClient } from 'react-query';
import { debounce } from 'lodash';

export const TodoItem = ({ todo }) => {
  const [text, setText] = useState(todo.text);
  const [completed, setCompleted] = useState(
    todo.completed
  );

  const queryClient = useQueryClient();

  const { mutate: deleteTodo } = useMutation(
    () => deleteTodoRequest(todo._id),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const { mutate: updateTodo } = useMutation(
    (todo) => updateTodoRequest(todo),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  const debounceUpdateTodo = useCallback(
    debounce(updateTodo, 500),
    [updateTodo]
  );

  useEffect(() => {
    if (
      text === todo.text &&
      completed === todo.completed
    ) {
      return;
    }
    debounceUpdateTodo({
      id: todo._id,
      text,
      completed,
    });
  }, [text, completed]);

  return (
    <div className={styles.item}>
      <input
        onChange={() => setCompleted(!completed)}
        checked={completed}
        type="checkbox"
      />
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
      />
      <button onClick={deleteTodo}>
        <BsFillTrashFill />
      </button>
    </div>
  );
};
