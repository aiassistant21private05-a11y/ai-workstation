async function send(){
  const text = input.value.trim();
  if(!text) return;

  add(text,"user");
  input.value="";

  showTyping();

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();

    console.log("DEBUG RESPONSE:", data); // penting buat cek

    removeTyping();

    add(
      data.reply || data.message || "AI tidak merespon",
      "ai"
    );

  } catch (err) {
    removeTyping();
    add("Error koneksi ke server","ai");
  }
}
