import { connectDB } from '@/lib/mongodb';
import Financa from '@/models/Financa';
export async function GET() {
  await connectDB();
  const items = await Financa.find().sort({ createdAt: -1 });
  return Response.json(items);
}
export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const item = await Financa.create(body);
  return Response.json(item);
}
