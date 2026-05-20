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
