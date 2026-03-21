export default async function handler(req, res) {
  try {
    const { input, tono } = req.body;

    const prompt = `
Sei NEURA, il chatbot intelligente di AutoPilot 2026.
Rispondi al messaggio del cliente con tono: ${tono}.
Messaggio del cliente: "${input}"
Genera una risposta chiara, utile e professionale.
    `;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          { role: "system", content: "Sei NEURA, un assistente AI professionale." },
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();
    const risposta = data.choices?.[0]?.message?.content || "Errore nella generazione della risposta.";

    res.status(200).json({ risposta });

  } catch (error) {
    console.error("Errore NEURA:", error);
    res.status(500).json({ risposta: "Errore interno del server." });
  }
}
