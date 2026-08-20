import { connectDB } from '@/lib/mongodb';
export async function GET() {
  try {
    const conn = await connectDB();
    return Response.json({ ok: true, host: conn?.connection?.host || 'connected' });
  } catch(e) {
    return Response.json({ ok: false, error: e.message }, { status: 500 });
  }
}
