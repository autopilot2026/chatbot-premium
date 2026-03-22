export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  const { message } = req.body;

  // Risposta temporanea (poi la sostituiamo con OpenAI)
  const risposta = "NEURA ha ricevuto: " + message;

  res.status(200).json({ risposta });
}


