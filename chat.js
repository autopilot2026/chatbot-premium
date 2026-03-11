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

// --- CERVELLO DEL CHATBOT ---
function getBotReply(text) {
    const msg = text.toLowerCase();

    if (msg.includes("ciao")) return "Ciao Giuseppe! Come posso aiutarti oggi?";
    if (msg.includes("come stai")) return "Sto benissimo e pronto a lavorare con te!";
    if (msg.includes("chi sei")) return "Sono il Chatbot Premium di AI AutoPilot 2026.";
    if (msg.includes("ai autopilot")) return "AI AutoPilot 2026 è la tua piattaforma di automazione.";
    if (msg.includes("grazie")) return "È un piacere aiutarti!";
    if (msg.includes("test")) return "Il test funziona perfettamente.";

    return "Non ho capito bene… puoi ripetere?";
}

// Invia messaggio
function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "Tu");
    input.value = "";

    // Risposta intelligente
    setTimeout(() => {
        const reply = getBotReply(text);
        addMessage(reply, "AI AutoPilot 2026");
    }, 500);
}

// Eventi
send.addEventListener("click", sendMessage);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});
