const todoList = [];
const todoDate = [];
// Accumulator pattern
function render() {
  let todoListHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>
      ${todo}
      <button onClick="todoList.splice(${i},1)
      render();
      ">Delete</button>
    </p>`; // created html code
    // console.log(html);
    todoListHtml += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  //   console.log(name);
  todoList.push(name);
  // console.log(todoList);
  inputElement.value = "";
  render();
}

function addDate() {
  let todoaddDateHtml = "";
  for (let i = 0; i < todoDate.length; i++) {
    const todoDatelist = todoDate[i];
    const html = `<p>${todoDatelist}</p>`;
    todoaddDateHtml += html;
  }
  document.querySelector(".js-date-list").innerHTML = todoaddDateHtml;
}
