const messages = document.getElementById("messages");
const input = document.getElementById("input");
const send = document.getElementById("send");

async function sendToBackend(text) {
    // Simulazione chiamata API
    const response = await fetch("backend/api.js");
    const data = await response.json().catch(() => null);

    return data?.reply || "Errore: backend non collegato.";
}

send.addEventListener("click", async () => {
    const text = input.value.trim();
    if (!text) return;

    const userMsg = document.createElement("div");
    userMsg.textContent = "Tu: " + text;
    messages.appendChild(userMsg);

    input.value = "";

    const botMsg = document.createElement("div");
    botMsg.textContent = "AI AutoPilot 2026: sto pensando...";
    messages.appendChild(botMsg);

    const reply = await sendToBackend(text);
    botMsg.textContent = reply;
});
