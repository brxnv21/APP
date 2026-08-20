import { connectDB } from '@/lib/mongodb';
import Lead from '@/models/Lead';
export async function PUT(req, { params }) {
  try { await connectDB(); const { id } = await params; const body = await req.json(); const lead = await Lead.findByIdAndUpdate(id, body, { new: true }); return Response.json(lead); }
  catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
export async function DELETE(req, { params }) {
  try { await connectDB(); const { id } = await params; await Lead.findByIdAndDelete(id); return Response.json({ ok: true }); }
  catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
