export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non supportato" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Messaggio mancante" });
  }

  // --- RISPOSTE SOFTWARE ---
  const softwareKeywords = [
    "software", "installazione", "installare", "attivazione", "attivare",
    "licenza", "errore", "problema", "setup", "download"
  ];

  const softwareReplies = [
    "Per aiutarti al meglio, dimmi quale software stai usando e che problema hai riscontrato.",
    "Nessun problema, dimmi il nome del software e ti guido passo passo.",
    "Se mi dici quale software devi installare o attivare, ti do subito le istruzioni corrette.",
    "Ok, dimmi il nome del software e ti spiego come procedere senza errori."
  ];

  if (softwareKeywords.some(k => message.toLowerCase().includes(k))) {
    const reply = softwareReplies[Math.floor(Math.random() * softwareReplies.length)];
    return res.json({ reply });
  }

  // --- RISPOSTE PREZZI ---
  const priceKeywords = [
    "prezzo", "quanto costa", "costo", "prezzi",
    "quanto viene", "quanto lo fai", "quanto è", "quanto vale"
  ];

  const priceReplies = [
    "I nostri prezzi variano in base al prodotto. Dimmi quale ti interessa e ti dico subito il costo.",
    "Certo! Quale prodotto vuoi sapere quanto costa?",
    "Dimmi il nome dell’articolo e ti dico immediatamente il prezzo.",
    "Nessun problema, quale prodotto vuoi sapere quanto costa?"
  ];

  if (priceKeywords.some(k => message.toLowerCase().includes(k))) {
    const reply = priceReplies[Math.floor(Math.random() * priceReplies.length)];
    return res.json({ reply });
  }

  // --- RISPOSTE TAGLIE ---
  const sizeKeywords = [
    "taglia", "taglie", "misura", "misure", "vestibilità", "calza"
  ];

  const sizeReplies = [
    "Certo! Dimmi il prodotto e ti dico subito le taglie disponibili.",
    "Nessun problema, quale articolo vuoi sapere che taglie ha?",
    "Dimmi il nome del prodotto e ti dico tutte le misure disponibili.",
    "Ok! Quale taglia ti serve? Ti aiuto subito."
  ];

  if (sizeKeywords.some(k => message.toLowerCase().includes(k))) {
    const reply = sizeReplies[Math.floor(Math.random() * sizeReplies.length)];
    return res.json({ reply });
  }

  // --- RISPOSTE SPEDIZIONE ---
  const shippingKeywords = [
    "spedizione", "consegna", "tempi", "arriva", "quando arriva", "corriere"
  ];

  const shippingReplies = [
    "Le spedizioni sono rapide! Dimmi il prodotto e ti dico i tempi esatti.",
    "Certo! Vuoi sapere i tempi di consegna per un articolo specifico?",
    "Le consegne sono veloci. Quale prodotto ti interessa?",
    "Nessun problema, ti dico subito i tempi di spedizione."
  ];

  if (shippingKeywords.some(k => message.toLowerCase().includes(k))) {
    const reply = shippingReplies[Math.floor(Math.random() * shippingReplies.length)];
    return res.json({ reply });
  }

  // --- RISPOSTE PAGAMENTI ---
  const paymentKeywords = [
    "pagamento", "pagare", "metodi", "paypal", "carta", "bonifico"
  ];

  const paymentReplies = [
    "Accettiamo diversi metodi di pagamento. Vuoi sapere quali?",
    "Certo! Ti interessa sapere se accettiamo PayPal, carte o altro?",
    "Nessun problema, dimmi cosa vuoi acquistare e ti dico come pagare.",
    "Ti aiuto subito! Che metodo di pagamento vuoi usare?"
  ];

  if (paymentKeywords.some(k => message.toLowerCase().includes(k))) {
    const reply = paymentReplies[Math.floor(Math.random() * paymentReplies.length)];
    return res.json({ reply });
  }

  // --- RISPOSTE ASSISTENZA ---
  const supportKeywords = [
    "aiuto", "assistenza", "supporto", "problema", "non funziona"
  ];

  const supportReplies = [
    "Sono qui per aiutarti! Dimmi cosa non funziona.",
    "Nessun problema, spiegami cosa succede e ti aiuto subito.",
    "Ok, raccontami il problema e lo risolviamo insieme.",
    "Ci sono! Dimmi cosa non va e ti guido passo passo."
  ];

  if (supportKeywords.some(k => message.toLowerCase().includes(k))) {
    const reply = supportReplies[Math.floor(Math.random() * supportReplies.length)];
    return res.json({ reply });
  }

  // --- RISPOSTA DI DEFAULT ---
  const risposta = `
Sono NEURA.

Ho ricevuto il tuo messaggio: "${message}"

Sto elaborando una risposta in stile umano, naturale e ragionata.
Presto sarò potenziata con un modello AI avanzato.
  `;

  return res.status(200).json({ reply: risposta });
}
