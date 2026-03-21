<!-- NEURA PREMIUM BOX -->
<div style="max-width: 420px; margin: 20px auto; padding: 20px; border-radius: 16px; border: 1px solid #ddd; background: #0b1020; color: #f5f5f5; font-family: system-ui, sans-serif; box-shadow: 0 10px 30px rgba(0,0,0,0.35);">

  <!-- FOTO -->
  <div style="text-align: center; margin-bottom: 16px;">
    <img src="URL-DELLA-TUA-FOTO-QUI" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 3px solid #32d4ff;">
  </div>

  <!-- NOME -->
  <div style="text-align: center; margin-bottom: 12px;">
    <div style="font-size: 1.2rem; font-weight: 600;">NEURA Assistant</div>
    <div style="font-size: 0.9rem; color: #b0b8ff;">AI AutoPilot 2026 • Personal AI</div>
  </div>

  <!-- DESCRIZIONE -->
  <p style="font-size: 0.9rem; color: #d7ddff; text-align: center;">
    Scrivi qualsiasi domanda o richiesta.  
    NEURA risponde in tempo reale.
  </p>

  <!-- INPUT -->
  <div style="background: #11162a; border-radius: 12px; padding: 12px; border: 1px solid #232a4a; margin-bottom: 14px;">
    <textarea id="neura-input" placeholder="Scrivi qui..." style="width: 100%; min-height: 80px; border-radius: 8px; border: 1px solid #2f3860; background: #050814; color: #fff; padding: 8px; font-size: 0.9rem;"></textarea>

    <button onclick="inviaNeuraPremium()" style="margin-top: 10px; width: 100%; padding: 10px; border-radius: 8px; border: none; background: linear-gradient(135deg,#32d4ff,#7b61ff); color: #050814; font-weight: 600; cursor: pointer; font-size: 0.9rem;">
      Invia a NEURA
    </button>
  </div>

  <!-- RISPOSTA -->
  <div id="neura-risposta" style="display:none; background:#0d1328; border:1px solid #2f3860; padding:12px; border-radius:10px; color:#d7ddff; font-size:0.9rem; line-height:1.5;"></div>

  <!-- PAYPAL -->
  <div style="text-align: center; margin-top: 16px;">
    <a href="LINK-PAYPAL-QUI" target="_blank" style="display:inline-block; padding:10px 18px; border-radius:999px; background:#ffc439; color:#111; font-weight:600; font-size:0.9rem; text-decoration:none;">
      Acquista NEURA ora con PayPal
    </a>
  </div>

</div>

<!-- SCRIPT PREMIUM -->
<script>
async function inviaNeuraPremium() {
  const input = document.querySelector("#neura-input").value;
  const boxRisposta = document.querySelector("#neura-risposta");

  if (!input.trim()) {
    alert("Scrivi qualcosa prima.");
    return;
  }

  // Mostra animazione
  boxRisposta.style.display = "block";
  boxRisposta.innerHTML = "<i>NEURA sta scrivendo...</i>";

  try {
    const risposta = await fetch("https://chatbot-premium-eiyy96140-autopilot2026s-projects.vercel.app/api/neura", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await risposta.json();

    boxRisposta.innerHTML = data.risposta || "Errore nella risposta.";

  } catch (e) {
    boxRisposta.innerHTML = "Errore di comunicazione con NEURA.";
  }
}
</script>

