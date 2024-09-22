import { useContext } from "react";
import { TodoContext } from '@/context/DataContext'

// Custom hook to use TodoContext
export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};