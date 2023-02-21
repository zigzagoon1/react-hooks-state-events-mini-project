import React from "react";
import Task from "./Task"
function TaskList( {tasks, handleDelete, filterCategory}) {
  function onDelete(taskToDelete) {
    console.log(taskToDelete)
    handleDelete(taskToDelete);
  }
  console.log(tasks);
  const taskElements = tasks.map((task) => {
    if (filterCategory === null || filterCategory === "All") {
      return <Task key={task.text} id={task.text} category={task.category} text={task.text} handleDelete={onDelete} />
    }
    else {
      if (task.category === filterCategory) {
        return <Task key={task.text} id={task.text} category={task.category} text={task.text} handleDelete={onDelete} />
      }
    }
    return null;
  })
  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
