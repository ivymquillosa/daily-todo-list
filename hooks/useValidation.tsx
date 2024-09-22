import { useState } from "react";

const useTodoValidation = () => {
  const [error, setError] = useState("");

  const validateTodo = (title: string, description: string) => {
    if (!title.trim()) {
      setError("The task title should not be empty.");
      return false;
    }
    if (title.length > 150) {
      setError("The task title should not exceed 150 characters.");
      return false;
    }
    if (description.length > 500) {
      setError("The task description should not exceed 500 characters.");
      return false;
    }
    setError(""); // Clear the error if validation passes
    return true; // Validation passed
  };

  return { error, validateTodo };
};

export default useTodoValidation;
