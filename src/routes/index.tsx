import { createFileRoute } from '@tanstack/react-router'
import TodoContainer from '../todo'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return <TodoContainer />
}
