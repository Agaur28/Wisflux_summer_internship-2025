let users = [];

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    users.push({ name, email });
    displayUsers();
    this.reset();
  }
});

function displayUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.email}`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      users.splice(index, 1);
      displayUsers();
    };

    li.appendChild(delBtn);
    userList.appendChild(li);
  });
}
