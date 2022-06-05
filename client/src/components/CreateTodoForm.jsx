import React, { useState } from 'react';
import styles from './CreateTodoForm.module.css';

export const CreateTodoForm = ({ createTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(newTodoText);
    setNewTodoText('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        onChange={(e) => setNewTodoText(e.target.value)}
        type="text"
        value={newTodoText}
      />
      <button className={styles.add} type="submit">
        Add
      </button>
    </form>
  );
};
