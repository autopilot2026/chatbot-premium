// --- NEURA.JS ---
// Motore logico del chatbot NEURA

window.neura = {
    // Funzione principale che elabora il messaggio
    async process(message) {

        // Normalizziamo il testo
        const text = message.toLowerCase().trim();

        // Risposte base (puoi ampliarle)
        if (text.includes("ciao")) {
            return "Ciao! Sono NEURA, come posso aiutarti?";
        }

        if (text.includes("come stai")) {
            return "Sto benissimo e pronto a lavorare con te!";
        }

        if (text.includes("chi sei")) {
            return "Sono NEURA, il chatbot intelligente creato da Giuseppe.";
        }

        if (text.includes("aiuto")) {
            return "Dimmi cosa ti serve e ti aiuto subito.";
        }

        // Risposta generica
        return "Sto elaborando la tua richiesta… presto sarò più intelligente!";
    }
};
