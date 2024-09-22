"use client"; // Make this a client component

import { useParams, useRouter } from "next/navigation";
import { useTodoContext } from "@/hooks/useData";
import InputFields from "@/components/reusable/InputFields";
import useTodoValidation from "@/hooks/useValidation";
import Textarea from "@/components/reusable/TextArea";
import Button from "@/components/reusable/Button";
import { useEffect, useState } from "react";

const TodoItem = () => {
  const { id } = useParams();
  const { todos, updateTodo } = useTodoContext();
  const router = useRouter();
  const { error, validateTodo } = useTodoValidation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Find the todo based on the id from the context
  const todo = todos.find((todo) => todo.id === id);

  // Set state when the todo is found
  useEffect(() => {
    if (todo) {
      setTitle(todo.title || "");
      setDescription(todo.description || "");
    }
  }, [todo]);

  if (!todo) {
    return <div>Todo not found</div>;
  }

  // Handle updating the todo
  const handleUpdate = () => {
    const updatedTodo = {
      ...todo,
      title,
      description,
    };

    if (validateTodo(title, description)) {
      updateTodo(updatedTodo);
      router.push("/");
    }
  };

  // Handle canceling the edit
  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-4 py-20 max-w-[430px] w-full">
      <h1 className="text-3xl font-bold">Edit Task</h1>

      <InputFields
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={error && error?.includes("title") ? error : ''}
        placeholder="Title"
        variant="ghost"
      />

      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={5}
        error={error && error?.includes("description") ? error : ''}
        placeholder="Description"
        variant="ghost"
      />

      <div className="flex justify-end gap-4">
        <Button
          radius="soft"
          size="sm"
          color="secondary"
          className="font-semibold"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          radius="soft"
          size="sm"
          className="font-semibold"
          onClick={handleUpdate}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;

