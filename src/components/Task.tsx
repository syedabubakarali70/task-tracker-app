import { Task as TaskType, Action } from "@/lib/TaskReducer";
import { Button } from "./ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
const Task = ({
  task,
  dispatch,
}: {
  task: TaskType;
  dispatch: (action: Action) => void;
}) => {
  return (
    <div className="w-full flex justify-between border rounded-lg mb-2 first:mt-4 items-center drop-shadow-xl ">
      <div className="px-2 py-1 text-base text-muted-foreground w-full hover:text-secondary-foreground">{task.name}</div>
      <Button
        variant={"destructive"}
        onClick={() => dispatch({ type: "remove", payload: task.id })}
      >
        <Cross1Icon />
      </Button>
    </div>
  );
};

export default Task;
