import { useAddHook } from '@/todo/hooks/use-add-hook'
import { TodoList } from './components/todo-list'

export default function TodoContainer() {
  const { todos, handleAddTodo, todo, setTodo, handleDeleteTodo } = useAddHook()

  return (
    <section className="text-center flex flex-col items-center justify-center gap-10">
      <form className="flex flex-row gap-2" onSubmit={handleAddTodo}>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md p-2"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
          Add
        </button>
      </form>

      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <TodoList
            todo={todo}
            key={todo.id}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </section>
  )
}
