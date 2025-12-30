// ===== CONFIRM JS LOAD =====
console.log("JavaScript connected successfully!");

// ===== DARK MODE =====
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
}

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// ===== SHOW / HIDE CONTENT =====
function toggleContent() {
    const text = document.getElementById("introText");
    if (!text) return;

    text.style.display =
        text.style.display === "none" ? "block" : "none";
}

// ===== IMAGE SLIDER =====
const images = [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    "https://images.unsplash.com/photo-1518770660439-4636190af475"
];

let index = 0;
const galleryImage = document.getElementById("galleryImage");

if (galleryImage) {
    galleryImage.src = images[index];
}

function nextImage() {
    changeImage((index + 1) % images.length);
}

function prevImage() {
    changeImage((index - 1 + images.length) % images.length);
}

function changeImage(newIndex) {
    if (!galleryImage) return;

    galleryImage.style.opacity = 0;
    setTimeout(() => {
        index = newIndex;
        galleryImage.src = images[index];
        galleryImage.style.opacity = 1;
    }, 200);
}

// ===== TODO LIST =====
function addTodo() {
    const input = document.getElementById("todoInput");
    const list = document.getElementById("todoList");

    if (!input || !list || input.value.trim() === "") return;

    const div = document.createElement("div");
    div.className = "todo-item";
    div.innerHTML = `
        <span>${input.value}</span>
        <button onclick="this.parentElement.remove()">❌</button>
    `;

    list.appendChild(div);
    input.value = "";
}

// ===== FORM VALIDATION =====
function validateForm(event) {
    event.preventDefault();

    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const output = document.getElementById("formMessage");

    if (!email || !message || !output) return;

    if (!email.value.includes("@")) {
        output.textContent = "Please enter a valid email.";
        output.className = "message error";
        return;
    }

    if (message.value.length < 10) {
        output.textContent = "Message must be at least 10 characters.";
        output.className = "message error";
        return;
    }

    output.textContent = "Message sent successfully!";
    output.className = "message success";
}

// ===== FOOTER YEAR =====
const year = document.getElementById("year");
if (year) {
    year.textContent = `© ${new Date().getFullYear()} Aarohi Tapas`;
}

console.log("All features working correctly!");
