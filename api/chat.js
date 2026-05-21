export default function handler(req, res) {
  console.log("API KEPAKAI");

  return res.status(200).json({
    reply: "BACKEND BENAR-BENAR HIDUP ✔"
  });
}
