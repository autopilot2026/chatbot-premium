// --- CHAT.JS ---
// Gestione UI + invio messaggi a NEURA

const input = document.getElementById("chat-input");
const sendBtn = document.getElementById("chat-send");
const messagesBox = document.getElementById("chat-messages");

// Aggiunge un messaggio nella chat
function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = sender === "user" ? "msg-user" : "msg-neura";
    msg.textContent = text;
    messagesBox.appendChild(msg);
    messagesBox.scrollTop = messagesBox.scrollHeight;
}

// Invia messaggio a NEURA
async function sendToNeura(message) {
    try {
        // NEURA deve essere definita in neura.js
        const response = await window.neura.process(message);
        addMessage("neura", response);
    } catch (err) {
        addMessage("neura", "Errore: impossibile elaborare la risposta.");
        console.error("Errore NEURA:", err);
    }
}

// Evento click
sendBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    addMessage("user", text);
    sendToNeura(text);
    input.value = "";
});

// Evento ENTER
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});
