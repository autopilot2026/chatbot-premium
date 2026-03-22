<div style={{ marginTop: "40px" }}>
  <h2>Chat con NEURA</h2>

  <textarea
    id="userMessage"
    placeholder="Scrivi un messaggio per NEURA..."
    style={{ width: "100%", height: "120px", padding: "10px" }}
  ></textarea>

  <button
    onclick="sendToNeura()"
    style={{
      marginTop: '10px',
      padding: '10px 20px',
      background: '#333',
      color: 'white',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Invia
  </button>

  <pre id="neuraReply" style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}></pre>
</div>
