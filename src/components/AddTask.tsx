
import { useState } from 'react'
import { useTodos } from '../Context/TodoContext.tsx';

interface AddTaskProps {
  showAddTask: boolean;
  
  show: () => void; 
}
const AddTask: React.FC<AddTaskProps>= ({showAddTask, show}) => {
const [title, setTitle] = useState<string>('')
const [description, setDescription] = useState<string>('')

  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      addTodo(title, description);
      setTitle('');
      setDescription('');
    }
  };
  return (
   <div className={` ${showAddTask ? "flex": "hidden"} fixed inset-0 dark:bg-gray-700 flex items-center justify-center bg-opacity-50 dark:bg-opacity-50 dark:text-gray-200 text-gray-900 font-sans bg-black/10`}>
  <div className=" relative bg-white dark:bg-gray-900 rounded-lg shadow-lg w-96 p-6">
    <h1 className=" text-2xl dark:text-gray-200 text-gray-900 absolute top-4 right-4" onClick={show}>X</h1>
    <h2 className="text-xl font-bold mb-4">ADD TODO</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block dark:text-gray-200 text-gray-700 mb-2">Title</label>
 <input
          type="text"
          onChange ={(e)=>setTitle(e.target.value)}
          value={title}
          className="w-full px-4 py-2 border dark:border-gray-700 border-gray-300 rounded-lg focus:outline-none  focus:border-gray-600 dark:text-gray-200 text-black dark:bg-gray-900"
        />
      </div>
      <div className="mb-4">
        <label className="block dark:text-gray-200 text-gray-700 mb-2">Description</label>
          <textarea
          onChange ={(e)=>setDescription(e.target.value)}
          value={description}
          className="w-full px-4 py-2 border dark:border-gray-700 border-gray-300 rounded-lg focus:outline-none  focus:border-gray-600 dark:text-gray-200 text-black dark:bg-gray-900 resize-none"
           id="todoDescription"
        placeholder="Enter your todo description here..."
        rows="4"
        cols="50"
        required
      />
       
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        onClick={show}
      >
        Submit
      </button>
    </form>
  </div>
    </div>
  )
}

export default AddTask