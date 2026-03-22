export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non supportato" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Messaggio mancante" });
  }
// --- RISPOSTE SOFTWARE ---
const softwareKeywords = ["software", "installazione", "installare", "attivazione", "attivare", "licenza", "errore", "problema", "setup", "download"];

const softwareReplies = [
  "Per aiutarti al meglio, dimmi quale software stai usando e che problema hai riscontrato.",
  "Nessun problema, dimmi il nome del software e ti guido passo passo.",
  "Se mi dici quale software devi installare o attivare, ti do subito le istruzioni corrette.",
  "Ok, dimmi il nome del software e ti spiego come procedere senza errori."
];

// Controllo parole chiave SOFTWARE
if (softwareKeywords.some(k => msg.toLowerCase().includes(k))) {
  const reply = softwareReplies[Math.floor(Math.random() * softwareReplies.length)];
  return res.json({ reply });
}

  // Risposta temporanea (in attesa del modello AI vero)
  const risposta = `
Sono NEURA.

Ho ricevuto il tuo messaggio: "${message}"

Sto elaborando una risposta in stile umano, naturale e ragionata.
Presto sarò potenziata con un modello AI avanzato.
  `;

  res.status(200).json({ reply: risposta });
}
