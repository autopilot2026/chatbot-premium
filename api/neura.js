export default async function handler(req, res) {
  try {
    console.log("NEURA API CHIAMATA. Body ricevuto:", req.body);

    const { input, tono } = req.body || {};

    if (!input) {
      return res.status(400).json({ risposta: "Manca il campo 'input' nel body." });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama3-8b",
        messages: [
          { role: "system", content: "Sei NEURA, un assistente AI professionale." },
          { role: "user", content: input }
        ]
      })
    });

    console.log("Status Groq:", response.status);
    const data = await response.json();
    console.log("Risposta Groq:", data);

    const risposta = data.choices?.[0]?.message?.content || "Errore nella generazione della risposta.";

    res.status(200).json({ risposta });

  } catch (error) {
    console.error("Errore NEURA:", error);
    res.status(500).json({ risposta: "Errore interno del server." });
  }
}
