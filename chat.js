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

// --- INVIO AL BACKEND NEURA ---
async function sendToNeura(text) {
    try {
        const response = await fetch("/api/neura", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                input: text,
                tono: "professionale"
            })
        });

        const data = await response.json();
        return data.risposta || "Errore nella risposta di NEURA.";

    } catch (err) {
        return "Errore di connessione con NEURA.";
    }
}

// Invia messaggio
async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "Tu");
    input.value = "";

    // Mostra caricamento
    addMessage("Sto elaborando...", "NEURA");

    // Ottieni risposta da NEURA
    const reply = await sendToNeura(text);

    // Rimuove il messaggio "Sto elaborando..."
    messages.lastChild.remove();

    addMessage(reply, "NEURA");
}

// Eventi
send.addEventListener("click", sendMessage);
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});

