let container = document.querySelector(".container");

fetch("http://jsonplaceholder.typicode.com/users/1/todos")
  .then((res) => res.json())
  .then((todos) => {
    console.log(todos);
    todos.forEach((todo) => {
      let btn = document.querySelector("#addBtn");
      btn.addEventListener("click", () => {
        let id = todo.id;
        console.log(id);
        let todo1 = document.createElement("div");
        todo1.classList.add("todo");
        let p1 = document.createElement("p");
        p1.textContent = todo.title;
        let p2 = document.createElement("p");
        p2.textContent = todo.completed;
        if (todo.completed === true) {
          todo1.style.color = "green";
        } else {
          todo1.style.color = "red";
        }
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", (id) => {
          fetch(`http://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        });

        todo1.appendChild(p1);
        todo1.appendChild(p2);
        // todo1.appendChild(editBtn);
        todo1.appendChild(deleteBtn);
        container.appendChild(todo1);
      });
    });
  });
