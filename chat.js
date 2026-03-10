const messages = document.getElementById("messages");
const input = document.getElementById("input");
const send = document.getElementById("send");

// Funzione per inviare al backend
async function sendToBackend(text) {
  const response = await fetch("backend/api.js");
  const data = await response.json().catch(() => null);

  return data?.reply || "Errore: backend non collegato.";
}

send.addEventListener("click", async () => {
  const text = input.value.trim();
  if (!text) return;

  // Mostra messaggio utente
  const userMsg = document.createElement("div");
  userMsg.textContent = "Tu: " + text;
  messages.appendChild(userMsg);

  // Salva messaggio utente in Supabase
  saveMessage(text, null, null, "utente123", "sessione1", "user");

  input.value = "";

  // Mostra placeholder bot
  const botMsg = document.createElement("div");
  botMsg.textContent = "AI AutoPilot 2026: sto pensando...";
  messages.appendChild(botMsg);

  // Ottieni risposta dal backend
  const reply = await sendToBackend(text);
  botMsg.textContent = reply;

  // Salva risposta bot in Supabase
  saveMessage(text, reply, "gpt-4o-mini", "utente123", "sessione1", "assistant");
});

