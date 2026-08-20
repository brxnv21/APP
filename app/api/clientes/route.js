import { connectDB } from '@/lib/mongodb';
import Cliente from '@/models/Cliente';
export async function GET() {
  await connectDB();
  const items = await Cliente.find().sort({ createdAt: -1 });
  return Response.json(items);
}
export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const item = await Cliente.create(body);
  return Response.json(item);
}
