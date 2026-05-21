const chat = document.getElementById("chat");
const input = document.getElementById("msg");

function add(text, type){
  const row = document.createElement("div");
  row.className = "msg " + type;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerText = text;

  row.appendChild(bubble);
  chat.appendChild(row);

  chat.scrollTop = chat.scrollHeight;
}

function showTyping(){
  const div = document.createElement("div");
  div.className = "msg ai";
  div.id = "typing";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerText = "AI sedang berpikir...";

  div.appendChild(bubble);
  chat.appendChild(div);
}

function removeTyping(){
  const el = document.getElementById("typing");
  if(el) el.remove();
}

async function send(){
  const text = input.value.trim();
  if(!text) return;

  add(text, "user");
  input.value = "";

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

    removeTyping();

    console.log("API RESPONSE:", data);

    add(
      data.reply || "Tidak ada response dari AI",
      "ai"
    );

  } catch (err) {
    removeTyping();
    add("Error koneksi ke server", "ai");
    console.log(err);
  }
}
