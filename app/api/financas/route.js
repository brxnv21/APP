import { connectDB } from '@/lib/mongodb';
import Financa from '@/models/Financa';
export async function GET() {
  try { await connectDB(); const items = await Financa.find().sort({ createdAt: -1 }); return Response.json(items); }
  catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
export async function POST(req) {
  try { await connectDB(); const body = await req.json(); const item = await Financa.create(body); return Response.json(item); }
  catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
