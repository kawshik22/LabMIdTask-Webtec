const addBtn = document.getElementById("addBtn");
const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const deptInput = document.getElementById("dept");
const errorMsg = document.getElementById("errorMsg");
const tableBody = document.querySelector("#studentTable tbody");

addBtn.addEventListener("click", function () {
    errorMsg.textContent = "";

    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();
    const dept = deptInput.value.trim();

    if (name === "" || roll === "" || dept === "") {
        errorMsg.textContent = "All fields are required!";
        return;
    }

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${dept}</td>
        <td><button class="deleteBtn">Delete</button></td>
    `;

    tableBody.appendChild(tr);

    nameInput.value = "";
    rollInput.value = "";
    deptInput.value = "";

    tr.querySelector(".deleteBtn").addEventListener("click", function () {
        tr.remove();
    });
});
