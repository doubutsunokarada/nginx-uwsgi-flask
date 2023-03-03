export async function GET(request: Request) {
  return new Response(JSON.stringify({ ok: Date.now().toString() }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
