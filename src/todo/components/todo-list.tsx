import type { Todo } from '../type'

interface TodoListProps {
  todo: Todo
  handleDeleteTodo: (id: number) => void
}

export const TodoList = ({ todo, handleDeleteTodo }: TodoListProps) => {
  return (
    <li className="flex flex-row gap-2 w-full">
      <p className="flex-1">{todo.text}</p>
      <button
        className="bg-red-500 text-white rounded-md p-2"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Delete
      </button>
      <button className="bg-green-500 text-white rounded-md p-2">Edit</button>
    </li>
  )
}
