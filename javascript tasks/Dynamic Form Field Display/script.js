function toggleFields() {
    let type = document.getElementById("userType").value;
    let roll = document.getElementById("rollDiv");
    let dept = document.getElementById("deptDiv");

    if (type === "student") {
        roll.style.display = "block";
        dept.style.display = "none";
    } else if (type === "teacher") {
        dept.style.display = "block";
        roll.style.display = "none";
    } else {
        roll.style.display = "none";
        dept.style.display = "none";
    }
}
