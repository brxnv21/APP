import { connectDB } from '@/lib/mongodb';
import Campanha from '@/models/Campanha';
export async function GET() {
  await connectDB();
  const items = await Campanha.find().sort({ createdAt: -1 });
  return Response.json(items);
}
export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const item = await Campanha.create(body);
  return Response.json(item);
}
