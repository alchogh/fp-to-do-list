import type { Todo } from '../type'

export const addTodo = (todos: Todo[], text: string) => {
  const newTodo = { id: Date.now(), text }
  return [...todos, newTodo]
}

export const deleteTodo = (todos: Todo[], id: number) => {
  return todos.filter((todo) => todo.id !== id)
}
