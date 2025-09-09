import { createFileRoute } from '@tanstack/react-router'

import { useAddHook } from '@/hooks/use-add-hook'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { todos, handleAddTodo, todo, setTodo } = useAddHook()

  return (
    <div className="text-center flex flex-col items-center justify-center">
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

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}
