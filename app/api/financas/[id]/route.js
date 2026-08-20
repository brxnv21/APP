import { connectDB } from '@/lib/mongodb';
import Financa from '@/models/Financa';
export async function PUT(req, { params }) {
  await connectDB();
  const { id } = await params;
  const body = await req.json();
  const item = await Financa.findByIdAndUpdate(id, body, { new: true });
  return Response.json(item);
}
export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = await params;
  await Financa.findByIdAndDelete(id);
  return Response.json({ ok: true });
}
