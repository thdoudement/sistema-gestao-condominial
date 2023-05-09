const body = document.querySelector("body"),
    modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
})




// Função para abrir o modal
function openModal(params) {
    document.getElementById("modal-" + params).style.display = "block";
}

// Função para fechar o modal
function closeModal(params) {
    document.getElementById("modal-" + params).style.display = "none";
}

// Chat do modal de ocorrencia
const chatInput = document.querySelector('.chat-input input[type="text"]');
const chatButton = document.querySelector('.chat-input button');
const chatBox = document.querySelector('.chat');

chatButton.addEventListener('click', () => {
    const message = chatInput.value;
    chatInput.value = '';

    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.innerHTML = message;
    chatBox.appendChild(newMessage);
});

// Chat do modal de assembleia
const chatInput2 = document.querySelector('#chatInput2');
const chatButton2 = document.querySelector('#chatButton2');
const chatBox2 = document.querySelector('#chatBox2');

chatButton2.addEventListener('click', () => {
    const message2 = chatInput2.value;
    chatInput2.value = '';

    const newMessage2 = document.createElement('div');
    newMessage2.classList.add('message2');
    newMessage2.innerHTML = message2;
    chatBox2.appendChild(newMessage2);
});