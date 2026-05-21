export default async function handler(req, res) {
  console.log("API HIT OK");

  return res.status(200).json({
    reply: "Backend sudah jalan tapi belum connect ke AI"
  });
}
