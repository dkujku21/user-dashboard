let users = ["Ardit", "Elira", "Sara"];

function renderUsers() {
    let list = document.getElementById("userList");
    list.innerHTML = "";

    users.forEach((user, index) => {
        let li = document.createElement("li");
        li.textContent = user;
        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = () => deleteUser(index);

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function addUser() {
    let input = document.getElementById("username");

    if (input.value === "") {
        alert("Write a name!");
        return;
    }

    users.push(input.value);
    input.value = "";
    renderUsers();
}
function deleteUser(index) {
    users.splice(index, 1);
    renderUsers();
}

renderUsers();
