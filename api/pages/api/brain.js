export default async function handler(req, res) {
  console.log("🧠 AI BRAIN ACTIVE");

  res.setHeader("Content-Type", "application/json");

  const { message } = req.body || {};

  if (!message) {
    return res.status(400).json({
      reply: "Kirim pesan dulu ya 🙂",
      status: "error"
    });
  }

  let reply = "";
  const msg = message.toLowerCase();

  if (msg.includes("halo") || msg.includes("hai")) {
    reply = "Halo 👋 aku AI assistant kamu, siap bantu!";
  }

  else if (msg.includes("uang") || msg.includes("bisnis")) {
    reply = "Aku bisa bantu ide bisnis online, AI, dan cuan digital 💰";
  }

  else if (msg.includes("vercel") || msg.includes("api")) {
    reply = "Kita bisa bangun backend AI di Vercel + GitHub 🚀";
  }

  else {
    reply = `Aku paham: "${message}" tapi aku masih AI basic.`;
  }

  return res.status(200).json({
    reply,
    input: message,
    mode: "AI_BRAIN_V1",
    time: new Date().toISOString()
  });
}
