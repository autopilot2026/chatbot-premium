export default function NeuraLight() {
  async function handleSend(e) {
    e.preventDefault();
    const input = document.getElementById("neura-input");
    const box = document.getElementById("neura-answer");
    const text = input.value.trim();
    if (!text) return;

    box.style.display = "block";
    box.innerHTML = "<i>NEURA sta scrivendo...</i>";

    try {
      const res = await fetch("/api/neura", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      box.innerHTML = data.reply || "Errore nella risposta.";
    } catch (err) {
      box.innerHTML = "Errore di comunicazione con NEURA.";
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px 16px",
        background: "#f5f5f5",
        fontFamily: "Arial, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#ffffff",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          borderRadius: 0,
          padding: "24px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            margin: "0 0 8px",
            color: "#202124",
          }}
        >
          NEURA Assistant
        </h1>
        <p
          style={{
            margin: "0 0 16px",
            fontSize: "14px",
            color: "#5f6368",
          }}
        >
          AI AutoPilot 2026 • Personal AI
        </p>

        <p
          style={{
            margin: "0 0 16px",
            fontSize: "14px
