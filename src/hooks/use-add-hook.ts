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

  return { todos, handleAddTodo, todo, setTodo }
}
