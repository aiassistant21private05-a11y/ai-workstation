function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value;
  if (!userText) return;

  // tampilkan pesan user
  chatBox.innerHTML += "<div><b>You:</b> " + userText + "</div>";

  input.value = "";

  // respon AI sementara (dummy dulu)
  setTimeout(() => {
    let reply = "Aku masih versi awal 😄 nanti kita upgrade ke AI real.";

    chatBox.innerHTML += "<div><b>AI:</b> " + reply + "</div>";
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}
async function getAIResponse(text){
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: "Kamu adalah AI assistant sederhana, jawab singkat dan jelas." },
        { role: "user", content: text }
      ]
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}
