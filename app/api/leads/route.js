import { connectDB } from '@/lib/mongodb';
import Lead from '@/models/Lead';
export async function GET() {
  await connectDB();
  const leads = await Lead.find().sort({ createdAt: -1 });
  return Response.json(leads);
}
export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const lead = await Lead.create(body);
  return Response.json(lead);
}
