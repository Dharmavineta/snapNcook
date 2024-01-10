import { NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";
import { GoogleGenerativeAI } from "@google/generative-ai";

const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro-vision",
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  temperature: 0.1,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { base64Image, mimeType } = body;

    const prompt =
      "You're Food, you'll analyse the image of the dish given to you and give a detailed recepie for the same. Divide your answer into 3 parts. Let the first part be a very brief analysis of what the food is, let the second part be list of ingredients written in list format, the third part must be detailed instructions to prepare the food, include clear markups so that the user can understanding everything clearly. Be as detailed as possible. Don't provide unrelated answer and if you're given a image that is not food related, kindly decline answering affirming your purpose";

    const input2 = [
      new HumanMessage({
        content: [
          {
            type: "text",
            text: prompt,
          },
          {
            type: "image_url",
            image_url: `${base64Image}`,
          },
        ],
      }),
    ];

    const res = await model.invoke(input2);

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
