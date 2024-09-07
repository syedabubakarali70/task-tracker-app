import TaskInput from "./components/TaskInput";
import { useEffect, useReducer } from "react";
import TaskReducer, { Task } from "./lib/TaskReducer";
import TaskList from "./components/TaskList";
import { ThemeToggle } from "./components/Theme-toggle";
import { Separator } from "@/components/ui/separator";

const initialState: Task[] = [];
const App = () => {
  const [tasks, dispatch] = useReducer(TaskReducer, initialState);
  useEffect(() => {
    dispatch({ type: "get" });
  },[]);
  console.log(tasks);
  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center mx-auto font-montserrat">
      <div className="w-[100%]  max-w-screen-md flex justify-between items-center px-4 py-2">
        <h1 className="text-4xl py-2 font-bold">Task tracker</h1>
        <ThemeToggle />
      </div>
      <Separator className="drop-shadow-md" />

      <div className="px-10 w-full my-10  max-w-screen-md">
        <TaskInput dispatch={dispatch} />
        <TaskList tasks={tasks} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default App;
