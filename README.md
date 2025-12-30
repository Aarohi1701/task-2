#task 2 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aarohi Tapas | Portfolio</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --accent: #ff7e5f;
    --bg: #f8f9fa;
    --text: #333;
    --card: #ffffff;
}

body.dark-mode {
    --bg: #121212;
    --text: #eaeaea;
    --card: #1e1e1e;
}

body {
    font-family: 'Poppins', sans-serif;
    background: var(--bg);
    color: var(--text);
    transition: 0.3s;
}

header {
    background: var(--card);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    display: flex;
    gap: 1rem;
    list-style: none;
}

nav a {
    text-decoration: none;
    color: var(--text);
    font-weight: 600;
}

.button {
    background: var(--accent);
    color: white;
    border: none;
    padding: 0.6rem 1.4rem;
    border-radius: 20px;
    cursor: pointer;
}

main {
    max-width: 1100px;
    margin: auto;
    padding: 2rem;
    display: grid;
    gap: 2rem;
}

section {
    background: var(--card);
    padding: 2rem;
    border-radius: 10px;
}

#galleryImage {
    width: 100%;
    border-radius: 10px;
    transition: opacity 0.4s;
}

.todo-item {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

input, textarea {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
}

.message {
    margin-top: 10px;
    font-weight: bold;
}

.error { color: red; }
.success { color: green; }

footer {
    background: #166088;
    color: white;
    text-align: center;
    padding: 1rem;
}
</style>
</head>

<body>

<header>
    <h1>Aarohi Tapas</h1>

    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#todo">To-Do</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <button class="button" onclick="toggleDarkMode()">🌙 Mode</button>
</header>

<main>

<section id="home">
    <h2>Welcome</h2>
    <p id="introText">I build modern and interactive web applications.</p>
    <button class="button" onclick="toggleContent()">Show / Hide Text</button>
</section>

<section id="projects">
    <h2>Image Slider</h2>
    <img id="galleryImage" src="">
    <br><br>
    <button class="button" onclick="prevImage()">⬅ Prev</button>
    <button class="button" onclick="nextImage()">Next ➡</button>
</section>

<section id="todo">
    <h2>To-Do List</h2>
    <input type="text" id="todoInput" placeholder="Add task">
    <button class="button" onclick="addTodo()">Add</button>
    <div id="todoList"></div>
</section>

<section id="contact">
    <h2>Contact Me</h2>
    <form onsubmit="validateForm(event)">
        <input type="email" id="email" placeholder="Email">
        <textarea id="message" placeholder="Message"></textarea>
        <button class="button">Send</button>
        <div id="formMessage" class="message"></div>
    </form>
</section>

</main>

<footer>
    <p id="year"></p>
</footer>

<!-- ✅ External JavaScript -->
<script src="Script js.js"></script>

</body>
</html>
