import { NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";
import { GoogleGenerativeAI } from "@google/generative-ai";

const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro-vision",
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  temperature: 0.1,
});
export const maxDuration = 10;
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { base64Image, mimeType } = body;

    const prompt =
      "you're foodie, you'll analyse the food in the picture and give a detaled recepie. Start with brief analysis on what the food is and then ingredients and then detailed instructions. Don't entertain unrelated queries and decline kindly";

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
