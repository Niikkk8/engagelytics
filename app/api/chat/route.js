import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userMessage } = await request.json();

    const url =
      "https://api.langflow.astra.datastax.com/lf/d32df16c-912e-4108-b74a-d1abc775f169/api/v1/run/4c6df195-bf22-4375-94e5-1a6e2f7bb4eb?stream=false";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer AstraCS:mmMoxZKFAdIcDZhSfZpJIsos:6ff8d94c006de26e313bfbb6c0d6ec7b8f7234e8a52304d3c2ab5d8f7ba73ae7",
      },
      body: JSON.stringify({
        input_value: userMessage,
        output_type: "chat",
        input_type: "chat",
        tweaks: {
          "AstraDBToolComponent-ha6pp": {},
          "CombineText-2GtUh": {},
          "TextInput-4xd8Z": {},
          "GoogleGenerativeAIModel-oOMBd": {},
          "ChatOutput-iEHkB": {},
          "TextInput-Mcygj": {},
          "ParseData-WcWZ6": {},
          "ChatInput-zm75b": {},
        },
      }),
    });

    const data = await response.json();
    console.log(data.outputs[0])
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error hitting Langflow API:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Langflow API" },
      { status: 500 }
    );
  }
}
