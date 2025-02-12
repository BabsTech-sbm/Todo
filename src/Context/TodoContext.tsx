import { createContext, useContext, useState } from 'react';
 interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

// Define the context type
interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, description: string) => void;
  toggleTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);




interface TodoProviderProps {
  children: React.ReactNode;
}
export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Function to add a new todo
  const addTodo = (title: string, description: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle a todo's completed status
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};