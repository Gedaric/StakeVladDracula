import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: "StakeVladDracula API Proxy",
    version: "1.1.0", 
    description: "AI API Proxy Service",
    endpoints: {
      "OpenAI": "/v1/*",
      "OpenAI-Responses": "/v1/responses/*",
      "Claude": "/v1/messages/*",
      "Gemini": "/v1beta/*",
      "Groq": "/openai/v1/*",
      "Test": "/headers"
    },
    powered_by: "StakeVladDracula-Router v2.0"
  }, {
    headers: {
      'StakeVladDracula-Router': 'v2.0'
    }
  });
} 