import {useState} from 'react'
import { useTodos } from "../Context/TodoContext.tsx";

const Todo = () => {
  const { todos, toggleTodo } = useTodos();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null); // Track open dropdown ID

  const handleDropdownToggle = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="w-full flex justify-center items-center p-4 relative">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-visible">
        <div className="">
          <table className="w-full border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="bg-blue-500 dark:bg-blue-700 text-white text-left text-sm sm:text-base">
                <th className="p-4">Title</th>
                <th className="p-4">Description</th>
                <th className="p-4 text-center">Toggle</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {todos.map((todo) => (
                <tr
                  key={todo.id}
                  className="border-b border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <td className="p-4">{todo.title}</td>
                  <td className="p-4">{todo.description}</td>
                  <td className="p-4 text-center">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="cursor-pointer w-5 h-5 accent-blue-500"
                    />
                  </td>
                  <td className="p-4 text-center relative">
                    {/* Dropdown Menu */}
                    {openDropdown === todo.id && (
                      <div className=" absolute bottom-full right-0 mb-2 w-32 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-50 ">
                        <button className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                          Edit
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-200 dark:hover:bg-gray-700">
                          Delete
                        </button>
                     
                        
    
                      </div>
                    )}

                    {/* 3 Dots Button */}
                    <button
                      onClick={() => handleDropdownToggle(String(todo.id))}
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xl focus:outline-none"
                    >
                      &#x22EE;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Todo;