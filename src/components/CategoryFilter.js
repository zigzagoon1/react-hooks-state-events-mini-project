import React, {useState} from "react";

function CategoryFilter({categories, handleFilter}) {
  const [selectedCat, setSelectedCat] = useState("All");


  
  const catElements = categories.map((cat) => {
    return <button onClick={handleClick} key={cat} id={cat} value={cat}>{cat}</button>
  })
  function handleClick(e) {
    handleFilter(e.target.value)
    addClassToSelectedCat(e.target.value);
    setSelectedCat(e.target.value);
  }
  function addClassToSelectedCat(target) {
    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id === categories[i]) {
        
        buttons[i].className = "";
      }
    }
    if (selectedCat) {
      const selectedCatElement = document.querySelector(`#${target}`);
      console.log(selectedCatElement)
      selectedCatElement.className="selected";
    }


  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catElements}
    </div>
  );
}

export default CategoryFilter;
