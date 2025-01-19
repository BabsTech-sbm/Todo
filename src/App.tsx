import { useState } from 'react'
import Todo from "./components/Todo.tsx";
import AddTask from "./components/AddTask.tsx";
import ToggleTheme from "./components/ToggleTheme.tsx";

function App() {
const [showAddTask, setShowAddTask] = useState(false)

const [word, setWord] = useState("")
function show(){
  setShowAddTask(prev => !prev)
}
  return (
    <div className="  overflow-hidden bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center flex-col">
      
        <ToggleTheme/>
        <Todo/>
        <AddTask showAddTask={showAddTask} setShowAddTask={setShowAddTask}/>
      <button onClick={show} class="dark:bg-purple-400 dark:text-gray-900 py-2 px-4 rounded-md hover:bg-purple-500 bg-purple-600 dark:hover:bg-purple-700 text-white"> ADD TASK</button>
      
    </div>
  );
}

export default App
