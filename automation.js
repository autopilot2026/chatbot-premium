// ===============================
// AI AutoPilot 2026 – AUTOMATION ENGINE
// ===============================

// 1. CONFIGURAZIONE FACEBOOK
const FACEBOOK_ACCESS_TOKEN = "INSERISCI_IL_TUO_TOKEN";
const FACEBOOK_PAGE_ID = "61585024054283";

// 2. FUNZIONE: Pubblicazione automatica su Facebook
async function runAutomation(automationId) {
    if (automationId === 1) {
        publishToFacebook();
    }
}

// 3. PUBBLICA SU FACEBOOK
async function publishToFacebook() {
    const message = "Pubblicazione automatica da AI AutoPilot 2026 🚀";

    const url = `https://graph.facebook.com/${FACEBOOK_PAGE_ID}/feed`;

    const params = {
        method: "POST",
        body: new URLSearchParams({
            message: message,
            access_token: FACEBOOK_ACCESS_TOKEN
        })
    };

    try {
        const response = await fetch(url, params);
        const data = await response.json();
        alert("Pubblicazione completata! ID Post: " + data.id);
    } catch (error) {
        alert("Errore nella pubblicazione: " + error);
    }
}
