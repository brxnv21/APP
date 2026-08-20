import { connectDB } from '@/lib/mongodb';
import Campanha from '@/models/Campanha';
export async function PUT(req, { params }) {
  try { await connectDB(); const { id } = await params; const body = await req.json(); const item = await Campanha.findByIdAndUpdate(id, body, { new: true }); return Response.json(item); }
  catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
export async function DELETE(req, { params }) {
  try { await connectDB(); const { id } = await params; await Campanha.findByIdAndDelete(id); return Response.json({ ok: true }); }
  catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
