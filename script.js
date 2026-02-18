// QUIZ
function checkQuiz() {
    let score = 0;

    if (document.getElementById("q1").value == "4") score++;
    if (document.getElementById("q2").value.toLowerCase() == "islamabad") score++;
    if (document.getElementById("q3").value.toLowerCase() == "yes") score++;

    document.getElementById("result").innerText = "Your Score: " + score + "/3";
}

function resetQuiz() {
    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("q3").value = "";
    document.getElementById("result").innerText = "";
}

// CALCULATOR
function calculate() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;

    if (op == "/" && n2 == 0) {
        alert("Cannot divide by zero");
        return;
    }

    let result;
    if (op == "+") result = n1 + n2;
    else if (op == "-") result = n1 - n2;
    else if (op == "*") result = n1 * n2;
    else if (op == "/") result = n1 / n2;

    document.getElementById("calcResult").innerText = "Result: " + result;
}

// TODO
function completeTask(id) {
    document.getElementById(id).style.textDecoration = "line-through";
}

// COLOR
function addColor() {
    let color = document.getElementById("colorInput").value;

    let box = document.createElement("div");
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = color;
    box.style.display = "inline-block";
    box.style.margin = "10px";

    document.getElementById("colorContainer").appendChild(box);

    document.getElementById("browserInfo").innerText =
        "Width: " + window.innerWidth +
        " Height: " + window.innerHeight;
}

function clearColors() {
    document.getElementById("colorContainer").innerHTML = "";
}

// FORM
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;

    if (name == "") {
        document.getElementById("formMessage").innerText = "Name cannot be empty";
        return;
    }

    if (age < 18 || age > 60) {
        document.getElementById("formMessage").innerText = "Age must be between 18 and 60";
        return;
    }

    if (!email.includes("@")) {
        document.getElementById("formMessage").innerText = "Invalid Email";
        return;
    }

    if (password.length < 6) {
        document.getElementById("formMessage").innerText = "Password must be at least 6 characters";
        return;
    }

    if (confirm("Submit form?")) {
        document.getElementById("formMessage").innerText = "Registration Successful!";
        alert("Welcome " + name);
    }
}
