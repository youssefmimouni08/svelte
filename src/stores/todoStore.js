// @ts-nocheck

import { v4 } from "uuid";
import { writable } from "svelte/store";

export const todos = writable([]);

// @ts-ignore
export const addTodo = (text) => {
  // @ts-ignore
  todos.update((cur) => {
    const newTodos = [
      ...cur,
      { id: v4(), text, completed: false, createdAt: Date.now() },
    ];
    return newTodos;
  });
};
// @ts-ignore
export const deleteTodo = (id) => {
  // @ts-ignore
  todos.update((todos) => todos.filter((todo) => todo.id !== id));
};
export const completeTodo = (id) => {
  todos.update((todos) => {
    let index = -1;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      todos[index].completed = !todos[index].completed;
    }
    return todos;
  });
};
