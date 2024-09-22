"use client"; // Make this a client component

import { useState } from "react";
import { useTodoContext } from "@/hooks/useData";
import TodoList from "./todo-item/page";
import Button from "@/components/reusable/Button";
import InputFields from "@/components/reusable/InputFields";
import Textarea from "@/components/reusable/TextArea";
import Divider from "@/components/reusable/Divider";
import useTodoValidation from "@/hooks/useValidation";
import AlertDialog from "@/components/reusable/AlertDialog";

const Home = () => {
  const { todos, addTodo, clearAllTodos } = useTodoContext();
  const { error, validateTodo } = useTodoValidation();

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateTodo(newTitle, newDescription)) {
      addTodo({
        title: newTitle,
        description: newDescription,
      });
      setNewTitle("");
      setNewDescription("");
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="flex flex-col gap-4 pt-14 max-w-[430px] w-full">
      <h1 className="text-3xl font-bold">Daily To Do List</h1>
      <form onSubmit={handleAddTodo} className="flex flex-col gap-4">
        <InputFields
          placeholder="Title"
          variant="ghost"
          value={newTitle}
          error={error && error?.includes("title") ? error : ''}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Textarea
          rows={3}
          placeholder="Description"
          variant="ghost"
          value={newDescription}
          error={error && error?.includes("description") ? error : ''}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <Button
          type="submit"
          radius="soft"
          size="sm"
          className="w-fit justify-self-end font-semibold self-end"
        >
          Add
        </Button>
      </form>
      <TodoList />
      <Divider />
      <div className="flex text-sm text-default-600 items-center justify-between">
        <p className="p-0 m-0">{`${completedCount} item${completedCount !== 1 ? 's' : ''} selected`}</p>
        <AlertDialog
          trigger={
            <button className="hover:bg-default-100 py-1.5 px-4 rounded">
              <p className="p-0 m-0">Clear All</p>
            </button>
          }
          title="Clear All Task"
          description="Are you sure you want to clear all tasks? This action cannot be undone."
          actionLabel="Clear"
          onActionClick={clearAllTodos}
        />
      </div>
    </div>
  );
};

export default Home;
