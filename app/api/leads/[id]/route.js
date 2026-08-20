import { connectDB } from '@/lib/mongodb';
import Lead from '@/models/Lead';
export async function PUT(req, { params }) {
  await connectDB();
  const { id } = await params;
  const body = await req.json();
  const lead = await Lead.findByIdAndUpdate(id, body, { new: true });
  return Response.json(lead);
}
export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = await params;
  await Lead.findByIdAndDelete(id);
  return Response.json({ ok: true });
}
