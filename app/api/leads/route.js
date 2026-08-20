import { connectDB } from '@/lib/mongodb';
import Lead from '@/models/Lead';
export async function GET() {
  try { await connectDB(); const leads = await Lead.find().sort({ createdAt: -1 }); return Response.json(leads); }
  catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
export async function POST(req) {
  try { await connectDB(); const body = await req.json(); const lead = await Lead.create(body); return Response.json(lead); }
  catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
