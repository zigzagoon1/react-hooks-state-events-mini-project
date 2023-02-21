import React from "react";

function Task({category, text, id, handleDelete}) {
function deleteClicked(e) {
  console.log(e.target.parentNode.id)
  handleDelete(e.target.parentNode.id)
}
  return (
    <div id={id} className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteClicked} className="delete">X</button>
    </div>
  );
}

export default Task;
