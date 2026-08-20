import { connectDB } from '@/lib/mongodb';
import Cliente from '@/models/Cliente';
export async function PUT(req, { params }) {
  await connectDB();
  const { id } = await params;
  const body = await req.json();
  const item = await Cliente.findByIdAndUpdate(id, body, { new: true });
  return Response.json(item);
}
export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = await params;
  await Cliente.findByIdAndDelete(id);
  return Response.json({ ok: true });
}
