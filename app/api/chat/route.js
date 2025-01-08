import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { input_value, tweaks } = await request.json();

    const url = "https://langflow-api-1.onrender.com";

    console.log("Sending request to:", url);
    console.log("Request payload:", { input_value, tweaks });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer AstraCS:qPzaEhMMIdZiHYILkssXxhaC:ab118817d459f9c6d84662f3fd6c7f757cc6108d9c80bb259186fed5a8841f6d`,
      },
      body: JSON.stringify({
        input_value,
        tweaks,
      }),
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(`Langflow API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log("Successful response:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Detailed error:", {
      message: error.message,
      stack: error.stack,
      cause: error.cause,
    });

    return NextResponse.json(
      {
        error: true,
        message: error.message,
        details:
          process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
