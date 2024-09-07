import { Task as TaskType, Action } from "@/lib/TaskReducer";
import Task from "./Task";
const TaskList = ({
  tasks,
  dispatch,
}: {
  tasks: TaskType[];
  dispatch: (action: Action) => void;
}) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TaskList;
