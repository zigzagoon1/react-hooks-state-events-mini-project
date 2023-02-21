import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) 
{
  const [input, setInput] = useState("");
  const catOptions = categories.map((cat) => {
    return <option key={cat} value={cat} name={cat}>{cat}</option>
  })
  function handleSubmit(e) {

    e.preventDefault();
    const newTask = {
      category: e.target.category.value,
      text: e.target.text.value
    }
    onTaskFormSubmit(newTask);
  }
  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange}type="text" name="text" value={input}/>
      </label>
      <label>
        Category
        <select name="category">
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
