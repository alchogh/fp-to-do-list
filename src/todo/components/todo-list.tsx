import { Button } from '../../components/ui/Button'
import type { Todo } from '../type'

interface TodoListProps {
  todo: Todo
  handleDeleteTodo: (id: number) => void
  handleEditTodo: (id: number) => void
}

export const TodoList = ({
  todo,
  handleDeleteTodo,
  handleEditTodo,
}: TodoListProps) => {
  return (
    <li className="flex flex-row gap-2 w-full">
      <p className="flex-1">{todo.text}</p>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Delete
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => handleEditTodo(todo.id)}
      >
        Edit
      </Button>
    </li>
  )
}
