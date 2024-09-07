import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { Action } from "@/lib/TaskReducer";
let id = 1;

export default function TaskInput({
  dispatch,
}: {
  dispatch: (action: Action) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const isEmpty = taskInput.trim() === "";
  const handleAddTask = () => {
    if (!isEmpty) {
      dispatch({ type: "add", payload: { id: id++, name: taskInput } });
      setTaskInput("");
      inputRef.current?.focus();
    }
  };
  return (
    <div className="flex w-full max-w-screen-md items-center space-x-2">
      <Input
        type="text"
        placeholder="Add Task..."
        ref={inputRef}
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") handleAddTask();
        }}
      />
      <Button onClick={handleAddTask} disabled={isEmpty}>
        Add task
      </Button>
    </div>
  );
}
