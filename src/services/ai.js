import { portfolioData } from "../data/portfolioData";

const portfolioInfo = JSON.stringify(portfolioData, null, 2);

export async function askAI(question) {
  const systemPrompt = `
You are the AI assistant of Kunal Sikarwar.

Below is all the information about Kunal.

${portfolioInfo}

Instructions:

1. Answer only questions related to Kunal.

2. If information is unavailable, politely say you don't have that information.

3. If the user asks unrelated questions, politely reply:

"I can only answer questions related to Kunal's portfolio."
`;

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body:JSON.stringify({
            model: "openai/gpt-oss-20b",
            messages: [
            {
              role: "system",
              content: systemPrompt,
            },

            {
              role: "user",
              content: question,
            },
          ],
          temperature: 0.4,

          max_tokens: 700,
        })
      },
    );
    if (!response.ok) {
      throw new Error("Failed to get AI response");
    }
    const data = await response.json();
    console.log(data.choices[0].message.content);
    
    return data.choices[0].message.content;
  }catch (error) {
    console.error("Groq Error:", error);

    return "Sorry, something went wrong. Please try again.";
  }
}
