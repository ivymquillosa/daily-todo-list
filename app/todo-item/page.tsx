"use client"; // Make this a client component

import AlertDialog from "@/components/reusable/AlertDialog";
import Checkbox from "@/components/reusable/Checkbox";
import Divider from "@/components/reusable/Divider";
import { useTodoContext } from "@/hooks/useData";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

const TodoList = () => {
  const { todos, updateTodo, deleteTodo } = useTodoContext();
  const router = useRouter(); 

  const handleEditClick = (id: string) => {
    router.push(`/todo-item/${id}`);
  };

  const handleDelete = (id: string) => {
    deleteTodo(id); 
  };

  const handleCheckboxChange = (id: string, checked: boolean | 'indeterminate') => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      const updatedTodo = {
        ...todo,
        completed: !!checked,
      };
      updateTodo(updatedTodo);
    }
  };

  return (
    <ScrollArea className="h-[calc(100vh-24rem)] pr-3">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className='flex text-default-800 text-sm gap-3 min-h-[75px]'>
            <Checkbox
                className='self-start mt-4 h-5 w-5'
                color='success'
                checked={todo.completed}
                onCheckedChange={(checked) => handleCheckboxChange(todo.id, !!checked)}
              />
              <div className="py-3 flex-1">
                <div className={`flex-1 flex flex-col gap-0.5 ${todo.completed ? 'line-through opacity-50' : ''}`}>
                  <p className='p-0 m-0 line-clamp-1 text-base font-medium text-secondary-600'>
                    {todo?.title}
                  </p>
                  <p className='text-sm p-0 m-0 line-clamp-2'>{todo?.description || 'No description available'}</p>
                </div>
              </div>
              <div className='flex gap-3'>
                <button onClick={() => handleEditClick(todo.id)}>
                  <Image color='secondary' src="icons/editIcon.svg" alt="Icon" width={25} height={25} />
                </button>
                <AlertDialog
                  trigger={
                    <button>
                      <Image src="icons/deleteIcon.svg" alt="Icon" width={25} height={25} />
                    </button>
                  }
                  title="Delete Task"
                  description="Are you sure you want to delete this task? This action cannot be undone."
                  actionLabel="Delete"
                  onActionClick={() => handleDelete(todo.id)}
                />
              </div>
            </div>
            <Divider />
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};

export default TodoList;
