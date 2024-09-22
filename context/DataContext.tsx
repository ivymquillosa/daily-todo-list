"use client"; // Indicate this file is a client component

import { TodoData } from "@/types/commontypes";
import { createContext, useState, useEffect, ReactNode } from "react";

// Define the context type
type TodoContextType = {
  todos: TodoData[];
  addTodo: (newTodo: Omit<TodoData, "id">) => void;
  updateTodo: (updatedTodo: TodoData) => void;
  deleteTodo: (id: string) => void;
  clearAllTodos: () => void
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodoData[]>([]);

  // Fetch default data from API and transform it
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const transformedTodos: TodoData[] = data.map((todo: any) => ({
          id: todo.id.toString(),
          title: todo.title || "No Title",
          description: todo.description || "No description available",
          completed: todo.completed || false,
        }));

        // Sort the todos immediately after fetching
        const sortedTodos = sortTodos(transformedTodos);
        setTodos(sortedTodos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const sortTodos = (todos: TodoData[]) => {
    return todos.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
  };

  const addTodo = (newTodo: Omit<TodoData, "id">) => {
    const id = Date.now().toString();
    const todoWithId = { ...newTodo, id };

    // Add and set sorted todos
    setTodos((prevTodos) => sortTodos([todoWithId, ...prevTodos]));
    localStorage.setItem("todos", JSON.stringify([todoWithId, ...todos]));
  };

  const updateTodo = (updatedTodo: TodoData) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );

    // Set sorted todos
    setTodos(sortTodos(updatedTodos));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    // Set sorted todos
    setTodos(sortTodos(updatedTodos));
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const clearAllTodos = () => {
    setTodos([]);
    localStorage.setItem("todos", JSON.stringify([])); // Clear localStorage
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, clearAllTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
