// Selezione elementi
const messages = document.getElementById("messages");
const input = document.getElementById("input");
const send = document.getElementById("send");

// Funzione per aggiungere messaggi nella chat
function addMessage(text, sender) {
    const div = document.createElement("div");
    div.textContent = sender + ": " + text;
    div.style.marginBottom = "8px";
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

// Invia messaggio
function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "Tu");
    input.value = "";

    // Risposta finta del bot (per test)
    setTimeout(() => {
        addMessage("Risposta automatica di test...", "AI AutoPilot 2026");
    }, 500);
}

// Eventi
send.addEventListener("click", sendMessage);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});

