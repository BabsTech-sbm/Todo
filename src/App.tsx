import { useState } from 'react'
import Todo from "./components/Todo.tsx";
import AddTask from "./components/AddTask.tsx";
import ToggleTheme from "./components/ToggleTheme.tsx";
import { TodoProvider } from './Context/TodoContext.tsx';

function App() {
const [showAddTask, setShowAddTask] = useState(false)

const [word, setWord] = useState("")
function show(){
  setShowAddTask(prev => !prev)
}
  return (
    <TodoProvider>
    <div className=" bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center flex-col">
      
        <ToggleTheme/>
        <Todo/>
        <AddTask showAddTask={showAddTask} setShowAddTask={setShowAddTask} show={show}/>
      <button onClick={show} class="dark:bg-blue-400 dark:text-gray-900 py-2 px-4 rounded-md hover:bg-blue-500 bg-blue-600 dark:hover:bg-blue-700 text-white"> ADD TASK</button>
      
    </div>
     </TodoProvider>
  );
}

export default App
