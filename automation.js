// --- AUTOMATION.JS ---
// Automazioni e funzioni avanzate per NEURA

window.neura.automation = {

    // Risposte automatiche a parole chiave
    keywordTriggers(message) {
        const text = message.toLowerCase();

        if (text.includes("ricarica")) {
            return "Modulo ricariche in preparazione… Giuseppe lo sta costruendo!";
        }

        if (text.includes("ai autopilot 2026")) {
            return "AutoPilot 2026 è attivo. Dimmi cosa vuoi automatizzare.";
        }

        if (text.includes("neon engine")) {
            return "NEON ENGINE è pronto. Vuoi collegare WhatsApp o Facebook?";
        }

        return null;
    },

    // Automazione principale
    run(message) {
        const trigger = this.keywordTriggers(message);
        if (trigger) return trigger;

        return null;
    }
};

// Intercetta i messaggi prima della risposta normale
const originalProcess = window.neura.process;

window.neura.process = async function(message) {
    // 1. Controllo automazioni
    const auto = window.neura.automation.run(message);
    if (auto) return auto;

    // 2. Risposta normale
    return await originalProcess(message);
};
