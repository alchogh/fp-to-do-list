import { useState } from 'react'
import type { Todo } from '../type/index'

export const useAddHook = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodos([...todos, { id: Date.now(), text: todo }])
    setTodo('')
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return { todos, handleAddTodo, todo, setTodo, handleDeleteTodo }
}
