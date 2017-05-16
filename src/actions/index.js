import { v4 } from 'uuid';
import * as api from '../api';

const recieveTodos = (filter, response) => ({
  type: 'RECIEVE_TODOS',
  filter,
  response,
})

export const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(response =>
    recieveTodos(filter, response)
  );

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});
