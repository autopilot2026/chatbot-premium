// --- CONFIGURAZIONE SUPABASE ---
const SUPABASE_URL = "https://wqutefokqwfjdnqmscpl.supabase.co";
const SUPABASE_KEY = "sb_publishable_3PM9YClLenyIw7DsQ8SaYg_EdRy1ydE";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// --- FUNZIONE PER SALVARE I MESSAGGI ---
async function saveMessage(userMessage, botResponse, model, userId, sessionId, role) {
  const { data, error } = await supabaseClient
    .from("messages")
    .insert([
      {
        user_message: userMessage,
        bot_response: botResponse,
        model: model,
        user_id: userId,
        session_id: sessionId,
        role: role
      }
    ]);

  if (error) {
    console.error("Errore Supabase:", error);
  } else {
    console.log("Messaggio salvato:", data);
  }
}

// --- FUNZIONE PER INVIARE AL BACKEND ---
async function sendToBackend(text) {
  const response = await fetch("backend/api.js");
  const data = await response.json().catch(() => null);

  return data?.reply || "Errore: backend non collegato.";
}
