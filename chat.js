const messages = document.getElementById("messages");
const input = document.getElementById("input");
const send = document.getElementById("send");

send.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const userMsg = document.createElement("div");
    userMsg.textContent = "Tu: " + text;
    messages.appendChild(userMsg);

    input.value = "";

    // Risposta temporanea (poi la colleghiamo al backend)
    const botMsg = document.createElement("div");
    botMsg.textContent = "AI AutoPilot 2026: Risposta in arrivo...";
    messages.appendChild(botMsg);
});
