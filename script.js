export default async function handler(req, res) {
  try {
    const { message } = req.body;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content: "Jawab singkat, jelas, dan membantu."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    console.log("GROQ RESPONSE:", data); // penting untuk debug

    if (!data.choices || !data.choices[0]) {
      return res.status(200).json({
        reply: "AI tidak merespon (cek API key atau limit)"
      });
    }

    res.status(200).json({
      reply: data.choices[0].message.content
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      reply: "Server error"
    });
  }
}
