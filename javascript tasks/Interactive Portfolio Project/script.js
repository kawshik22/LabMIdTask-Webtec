const lightTheme = {
  bg: "#ad6565ff",
  text: "#090f1dff",
  muted: "#0e285cff",
  card: "#769dc4ff",
  accent: "#0b78ff",
  border: "#01050eff"
};

const darkTheme = {
  bg: "#84a6e4ff",
  text: "#8d1e6cff",
  muted: "#286aacff",
  card: "#279b65ff",
  accent: "#0e6388ff",
  border: "#172033"
};

let isDark = false;

const themeToggleBtn = document.getElementById("themeToggle");

function applyTheme(themeObj) {
  const root = document.documentElement;
  root.style.setProperty("--bg", themeObj.bg);
  root.style.setProperty("--text", themeObj.text);
  root.style.setProperty("--muted", themeObj.muted);
  root.style.setProperty("--card", themeObj.card);
  root.style.setProperty("--accent", themeObj.accent);
  root.style.setProperty("--border", themeObj.border);

  themeToggleBtn.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
}

themeToggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  applyTheme(isDark ? darkTheme : lightTheme);
});

applyTheme(lightTheme);

const clockEl = document.getElementById("clock");
const greetingEl = document.getElementById("greeting");
function updateClockAndGreeting() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  const ampm = h >= 12 ? "PM" : "AM";

  let displayHour = h % 12;
  displayHour = displayHour ? displayHour : 12;

  const hh = String(displayHour).padStart(2, "0");
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");

  clockEl.textContent = `${hh}:${mm}:${ss} ${ampm}`;

  let greeting = "Hello";
  if (h >= 5 && h < 12) greeting = "Good Morning";
  else if (h >= 12 && h < 17) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  greetingEl.textContent = greeting;
}

setInterval(updateClockAndGreeting, 1000);
updateClockAndGreeting();

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

function showSection(id) {
  sections.forEach(s => s.id === id ? s.classList.remove("hidden") : s.classList.add("hidden"));
  navLinks.forEach(link => link.dataset.target === id ? link.classList.add("active") : link.classList.remove("active"));
}

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.dataset.target;
    showSection(target);
  });
});

showSection("about");

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formSuccess = document.getElementById("formSuccess");

function validateEmail(email) {
  return typeof email === "string" && email.includes("@") && email.includes(".");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  formSuccess.textContent = "";

  let valid = true;
  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();
  const messageVal = messageInput.value.trim();

  if (!nameVal) {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (!validateEmail(emailVal)) {
    emailError.textContent = "Please enter a valid email (must contain @ and .).";
    valid = false;
  }

  if (messageVal.length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  if (!valid) return;

  formSuccess.textContent = "Message sent! Thank you — I'll get back to you soon.";
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
