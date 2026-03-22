export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non supportato" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Messaggio mancante" });
  }

  const msg = message.toLowerCase();

  // -------------------------------------------------------
  // EMOZIONI (testo + emoji)
  // -------------------------------------------------------
  const emotionalStates = [
    { keywords: ["😡", "arrabbiato", "incazzato", "basta", "odio"], tone: "anger" },
    { keywords: ["😭", "triste", "deluso", "mi dispiace"], tone: "sad" },
    { keywords: ["😱", "paura", "spaventato"], tone: "fear" },
    { keywords: ["😩", "stress", "non ce la faccio"], tone: "stress" },
    { keywords: ["😔", "delusione"], tone: "sad" },
    { keywords: ["❤️", "grazie", "gentile"], tone: "positive" }
  ];

  let detectedEmotion = null;

  for (const emo of emotionalStates) {
    if (emo.keywords.some(k => msg.includes(k))) {
      detectedEmotion = emo.tone;
      break;
    }
  }

  // -------------------------------------------------------
  // TONO EMOZIONALE EQUILIBRATO
  // -------------------------------------------------------
  function emotionalTone() {
    switch (detectedEmotion) {
      case "anger":
        return "Capisco perfettamente la tua frustrazione e sono qui per aiutarti con calma e precisione. 💬";
      case "sad":
        return "Mi dispiace che tu stia vivendo questa situazione. Ti seguo passo dopo passo per risolverla. ✨";
      case "fear":
        return "Tranquillo, affrontiamo tutto insieme con chiarezza e sicurezza. 💬";
      case "stress":
        return "Respira un attimo, ci sono io. Ti guido con ordine e semplicità. ✨";
      case "positive":
        return "Grazie per il tuo messaggio, continuo ad assisterti con piacere. ✨";
      default:
        return null;
    }
  }

  const emotionalIntro = emotionalTone();

  // -------------------------------------------------------
  // MINI-AI INTERNA (premium + elegante)
  // -------------------------------------------------------
  function premiumReply(text) {
    const startEmojis = ["✨", "💬", "📦"];
    const endEmojis = ["✨", "🔧", "❤️‍🔥"];

    const start = Math.random() < 0.5 ? startEmojis[Math.floor(Math.random() * startEmojis.length)] + " " : "";
    const end = Math.random() < 0.5 ? " " + endEmojis[Math.floor(Math.random() * endEmojis.length)] : "";

    return `${start}${text}${end}`;
  }

  // -------------------------------------------------------
  // LOGICA SHOP
  // -------------------------------------------------------

  // SOFTWARE
  const softwareKeywords = ["software", "installazione", "installare", "attivazione", "attivare", "licenza", "errore", "problema", "setup", "download"];
  if (softwareKeywords.some(k => msg.includes(k))) {
    return res.json({
      reply: premiumReply("Per assisterti al meglio, indicami il nome del software e il tipo di difficoltà che stai riscontrando.")
    });
  }

  // PREZZI
  const priceKeywords = ["prezzo", "quanto costa", "costo", "prezzi", "quanto viene", "quanto lo fai", "quanto è", "quanto vale"];
  if (priceKeywords.some(k => msg.includes(k))) {
    return res.json({
      reply: premiumReply("I prezzi variano in base al prodotto. Dimmi quale articolo ti interessa e ti fornisco subito il costo esatto.")
    });
  }

  // TAGLIE
  const sizeKeywords = ["taglia", "taglie", "misura", "misure", "vestibilità", "calza"];
  if (sizeKeywords.some(k => msg.includes(k))) {
    return res.json({
      reply: premiumReply("Certamente. Indicami il nome del prodotto e ti comunico immediatamente le taglie disponibili.")
    });
  }

  // SPEDIZIONE
  const shippingKeywords = ["spedizione", "consegna", "tempi", "arriva", "quando arriva", "corriere"];
  if (shippingKeywords.some(k => msg.includes(k))) {
    return res.json({
      reply: premiumReply("Le spedizioni sono rapide. Dimmi il prodotto che ti interessa e ti indico i tempi esatti di consegna.")
    });
  }

  // PAGAMENTI
  const paymentKeywords = ["pagamento", "pagare", "metodi", "paypal", "carta", "bonifico"];
  if (paymentKeywords.some(k => msg.includes(k))) {
    return res.json({
      reply: premiumReply("Accettiamo diversi metodi di pagamento. Se vuoi, ti elenco tutte le opzioni disponibili.")
    });
  }

  // ASSISTENZA
  const supportKeywords = ["aiuto", "assistenza", "supporto", "non funziona", "problema"];
  if (supportKeywords.some(k => msg.includes(k))) {
    return res.json({
      reply: premiumReply("Sono qui per aiutarti. Descrivimi cosa sta accadendo e ti guido con precisione.")
    });
  }

  // -------------------------------------------------------
  // RISPOSTA DI DEFAULT (premium + emozionale)
  // -------------------------------------------------------
  const defaultReply = premiumReply(
    `Sono NEURA, il tuo assistente premium. Ho ricevuto il tuo messaggio e lo sto analizzando con attenzione per offrirti una risposta chiara e completa.`
  );

  return res.status(200).json({
    reply: emotionalIntro ? emotionalIntro + " " + defaultReply : defaultReply
  });
}
