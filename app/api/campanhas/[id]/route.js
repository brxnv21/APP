import { connectDB } from '@/lib/mongodb';
import Campanha from '@/models/Campanha';
export async function PUT(req, { params }) {
  await connectDB();
  const { id } = await params;
  const body = await req.json();
  const item = await Campanha.findByIdAndUpdate(id, body, { new: true });
  return Response.json(item);
}
export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = await params;
  await Campanha.findByIdAndDelete(id);
  return Response.json({ ok: true });
}
