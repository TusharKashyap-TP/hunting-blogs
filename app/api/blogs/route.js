const fs = require('node:fs');
export async function GET() {
  return Response.json({
    success: true,
    hello : [
      { id: 1, title: "How to learn JavaScript?" },
      { id: 2, title: "How to learn Next.js?" },
    ],
  });
}
