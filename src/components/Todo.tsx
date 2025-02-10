import React from 'react'
import { useTodos } from '../Context/TodoContext.tsx';
const Todo = () => {
  const { todos, toggleTodo } = useTodos();
  return (
    <ul className=" w-full flex justify-center items-center dark:text-gray-200 text-gray-900 font-sans">
      {todos.map((todo) => (
      <li className=' flex gap-2'>
    
<span>{todo.title}</span>
<span>{todo.description}</span>
      </li>
      ))}
      
    </ul>
  );
    
  
}

export default Todo