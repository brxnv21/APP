import { connectDB } from '@/lib/mongodb';
import Financa from '@/models/Financa';
export async function PUT(req, { params }) {
  try { await connectDB(); const { id } = await params; const body = await req.json(); const item = await Financa.findByIdAndUpdate(id, body, { new: true }); return Response.json(item); }
  catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
export async function DELETE(req, { params }) {
  try { await connectDB(); const { id } = await params; await Financa.findByIdAndDelete(id); return Response.json({ ok: true }); }
  catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
