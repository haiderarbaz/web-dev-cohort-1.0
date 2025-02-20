const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoItemsContainer = document.getElementById("todo-items-container");
const resetBtn = document.getElementById("reset-btn");

// Add a event listener on btn to read user input
addBtn.addEventListener("click", () => {
  const value = todoInput.value;
  console.log("User Input", value); //This will print the value on the browser console

  // Now render the user input in li
  const li = document.createElement("li"); // This will create a li tag
  li.innerText = value; // This will add the user input in the li tag
  console.log(li); //This will print li tag on browser console

  // This will create a btn X and insert in the li tag
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  console.log(delBtn);
  li.appendChild(delBtn);

  delBtn.addEventListener("click", function () {
    li.remove();
  });

  // Now add li tag to container it will show on render
  todoItemsContainer.appendChild(li);
  todoInput.value = "";

  // This will reset all the li
  resetBtn.addEventListener("click", function () {
    li.remove();
  });
});
