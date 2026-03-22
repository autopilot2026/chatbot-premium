export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non supportato" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Messaggio mancante" });
  }

  // Risposta in stile NEURA (umana, ragionata, naturale)
  const risposta = `
Sono NEURA, il tuo assistente.

Ho letto quello che mi hai scritto: "${message}"

E ti rispondo come un umano, non come un bot:
- capisco il contesto
- ragiono
- ti accompagno passo passo
- ti rispondo con chiarezza e naturalezza

Dimmi pure cosa vuoi fare adesso.
  `;

  res.status(200).json({ reply: risposta });
}
