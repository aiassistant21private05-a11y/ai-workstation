async function send(){
  const text=input.value.trim();
  if(!text) return;

  add(text,"user");
  input.value="";

  add("AI sedang berpikir...","ai");

  const response = await getAIResponse(text);

  // hapus "AI sedang berpikir..."
  chat.lastChild.remove();

  add(response,"ai");
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
