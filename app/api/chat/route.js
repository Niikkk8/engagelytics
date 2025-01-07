import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse the request body
    const { userMessage } = await request.json();

    // API URL
    const url = "https://langflow-api-vslj.onrender.com/query";

    // Define the payload
    const payload = {
      input_value:
        userMessage ||
        "What's the save-to-like ratio across different post types?", // Use default if userMessage is not provided
      tweaks: {
        "AstraDBToolComponent-CF8aW": {},
        "ParseData-cwkgx": {},
        "TextInput-OS4Th": {},
        "ChatInput-L0kXb": {},
        "CombineText-JYwrG": {},
        "GroqModel-7sUX4": {},
        "ChatOutput-X19Q2": {},
      },
    };

    // Make the POST request
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Handle the response
    if (!response.ok) {
      throw new Error(`Langflow API returned an error: ${response.status}`);
    }

    const data = await response.json();

    // Log and return the response
    console.log("Langflow API Response:", data.outputs[0]); // Adjust this based on your response structure
    return NextResponse.json(data);
  } catch (error) {
    // Handle and log errors
    console.error("Error hitting Langflow API:", error.message);

    return NextResponse.json(
      {
        error: "Failed to fetch data from Langflow API",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
