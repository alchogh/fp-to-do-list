import { useState } from 'react'
import type { Todo } from '../type/index'
import { addTodo, deleteTodo } from '../lib/todo-logic'

export const useTodoHook = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todo.trim()) {
      setTodos(addTodo(todos, todo))
      setTodo('')
    }
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(deleteTodo(todos, id))
  }

  const handleEditTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: todo.text } : todo,
      ),
    )
  }

  return {
    todos,
    handleAddTodo,
    todo,
    setTodo,
    handleDeleteTodo,
    handleEditTodo,
  }
}
