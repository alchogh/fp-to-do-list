import { useTodoHook } from '@/todo/hooks/use-todo-hook'
import { TodoList } from './components/todo-list'
import { Button } from '../components/ui/Button'

export default function TodoContainer() {
  const {
    todos,
    handleAddTodo,
    todo,
    setTodo,
    handleDeleteTodo,
    handleEditTodo,
  } = useTodoHook()

  return (
    <section className="text-center flex flex-col items-center justify-center gap-10">
      <form className="flex flex-row gap-2" onSubmit={handleAddTodo}>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md p-2"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button size="sm" variant="primary" type="submit">
          Add
        </Button>
      </form>

      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <TodoList
            handleEditTodo={handleEditTodo}
            todo={todo}
            key={todo.id}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </section>
  )
}
