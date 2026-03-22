export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non supportato" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Messaggio mancante" });
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
