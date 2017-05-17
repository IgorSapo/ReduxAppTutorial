import { v4 } from 'uuid';

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: 'first task',
      completed: true,
    },
    {
      id: v4(),
      text: 'second task',
      completed: true,
    },
    {
      id: v4(),
      text: 'third task',
      completed: false,
    },
  ],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(5000).
    then(
      () => {
        switch (filter) {
          case 'all':
            return fakeDatabase.todos;
          case 'active':
            return fakeDatabase.todos.filter(todo => !todo.completed);
          case 'completed':
            return fakeDatabase.todos.filter(todo => todo.completed);
          default:
            throw new Error(`Unknown filter: ${filter}`);
        }
      }
    );
