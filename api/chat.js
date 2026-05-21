export default function handler(req, res) {
  console.log("🔥 API CHAT TERPAKAI");

  res.setHeader("Content-Type", "application/json");

  return res.status(200).json({
    reply: "OK BACKEND HIDUP ✔",
    time: new Date().toISOString()
  });
}
