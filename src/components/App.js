import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filterCategory, setFilterCategory] = useState(null);

  function onTaskFormSubmit(newTask) {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }
  function handleFilter(category) {
    setFilterCategory(category);
  }
  function handleDelete(taskToDelete) {
    const updatedTasks = tasks.filter((task) => {
      return task.text !== taskToDelete}
      );
    setTasks(updatedTasks);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={handleFilter}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList filterCategory={filterCategory ? filterCategory : null}categories={CATEGORIES} tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
