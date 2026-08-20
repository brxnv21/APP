import { connectDB } from '@/lib/mongodb';
import Campanha from '@/models/Campanha';
export async function GET() {
  try { await connectDB(); const items = await Campanha.find().sort({ createdAt: -1 }); return Response.json(items); }
  catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
export async function POST(req) {
  try { await connectDB(); const body = await req.json(); const item = await Campanha.create(body); return Response.json(item); }
  catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
