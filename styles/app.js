let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", (e) => {
  // prevent form from being submit
  e.preventDefault();

  // get the input value
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  let month = form.children[1].value;
  let day = form.children[2].value;

  let todo = document.createElement("div");
  todo.classList.add("todo");

  let text = document.createElement("p");
  text.classList.add("text");
  text.innerText = todoText;

  let time = document.createElement("p");
  time.classList.add("time");
  time.innerText = month + "/" + day;

  todo.appendChild(text);
  todo.appendChild(time);

  //create green check and red trash can
  let completeButton = document.createElement("button");
  completeButton.classList.add("complete");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';

  completeButton.addEventListener("click", (e) => {
    let todoItem = e.target.parentElement;
    todoItem.classList.toggle("done");
  });

  let trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';

  trashButton.addEventListener("click", (e) => {
    let cancel = e.target.parentElement;

    cancel.addEventListener("animationend", () => {
      cancel.remove();
    });
    cancel.style.animation = "scaleDown 0.3s forwards";
  });

  todo.appendChild(completeButton);
  todo.appendChild(trashButton);

  todo.style.animation = "scaleUp 0.3s forwards";

  section.appendChild(todo);
});
