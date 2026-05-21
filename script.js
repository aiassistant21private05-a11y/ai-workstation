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

  chat.scrollTop = chat.scrollHeight;
}

function removeTyping(){
  const el = document.getElementById("typing");
  if(el) el.remove();
}

// GLOBAL FUNCTION (INI PENTING BIAR onclick="send()" WORK)
window.send = async function(){

  const text = input.value.trim();
  if(!text){
    alert("Tulis pesan dulu");
    return;
  }

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

    console.log("API RESPONSE:", data);

    removeTyping();

    const reply =
      data.reply ||
      data.message ||
      "AI tidak merespon";

    add(reply, "ai");

  } catch (err) {
    removeTyping();
    add("Error koneksi ke server", "ai");
    console.log(err);
  }
};
