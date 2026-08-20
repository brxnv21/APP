import { connectDB } from '@/lib/mongodb';
import Lead from '@/models/Lead';
const leads = [
{empresa:'Clínica Corrêa Odontologia',nicho:'Dentista',cidade:'São Paulo/SP',whatsapp:'+551129797353',status:'Aguardando',observacao:'Respondeu - vai passar contato pra dra',dataEnvio:'20/08/2026',proximoContato:''},
{empresa:'Dentista São Paulo',nicho:'Dentista',cidade:'São Paulo/SP',whatsapp:'+5511952137463',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Clínica São Paulo Odontologia',nicho:'Dentista',cidade:'São Paulo/SP',whatsapp:'+5514998651215',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'A1 Odontologia',nicho:'Dentista',cidade:'São Paulo/SP',whatsapp:'+5511950003382',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Letícia Antunes Odonto',nicho:'Dentista',cidade:'Rio de Janeiro/RJ',whatsapp:'+5521966746574',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Clínica Sorrio',nicho:'Dentista',cidade:'Rio de Janeiro/RJ',whatsapp:'+5521966836006',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Odonto Sol',nicho:'Dentista',cidade:'Rio de Janeiro/RJ',whatsapp:'+5521980374396',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Brilho Dente',nicho:'Dentista',cidade:'Belo Horizonte/MG',whatsapp:'+553172434870',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Borges Odontologia',nicho:'Dentista',cidade:'Belo Horizonte/MG',whatsapp:'+5531991421227',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Oral Face',nicho:'Dentista',cidade:'Belo Horizonte/MG',whatsapp:'+5531982072015',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Ana Arantes Odonto',nicho:'Dentista',cidade:'Curitiba/PR',whatsapp:'+5541988688164',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'OdontoRicc',nicho:'Dentista',cidade:'Curitiba/PR',whatsapp:'+5541998419111',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Instituto Kopp',nicho:'Dentista',cidade:'Curitiba/PR',whatsapp:'+554133637295',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Clinident',nicho:'Dentista',cidade:'Curitiba/PR',whatsapp:'+5541992359965',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Saint Clara Odontologia',nicho:'Dentista',cidade:'Brasília/DF',whatsapp:'+5561998067709',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Saga Odontologia',nicho:'Dentista',cidade:'Brasília/DF',whatsapp:'+5561982835625',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Odonto Brasília',nicho:'Dentista',cidade:'Brasília/DF',whatsapp:'+5561985801610',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Gaudio Odontologia',nicho:'Dentista',cidade:'Brasília/DF',whatsapp:'+5561999680336',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Mateus Suplementos',nicho:'Suplementos',cidade:'Rio Grande do Norte/RN',whatsapp:'+5584999022199',status:'Enviado',observacao:'Follow-up 23/08',dataEnvio:'20/08/2026',proximoContato:'23/08/2026'},
{empresa:'WeFit Suplementos',nicho:'Suplementos',cidade:'São Paulo/SP',whatsapp:'+5516994450201',status:'Enviado',observacao:'Follow-up 23/08',dataEnvio:'20/08/2026',proximoContato:'23/08/2026'},
{empresa:'EcoBaby',nicho:'Suplementos',cidade:'Santa Catarina/SC',whatsapp:'+5549991821335',status:'Enviado',observacao:'Follow-up 23/08',dataEnvio:'20/08/2026',proximoContato:'23/08/2026'},
{empresa:'Hardcore Suplementos',nicho:'Suplementos',cidade:'Rio Grande do Sul/RS',whatsapp:'+5551992661545',status:'Enviado',observacao:'Follow-up 23/08',dataEnvio:'20/08/2026',proximoContato:'23/08/2026'},
{empresa:'Mega Distribuidora',nicho:'Suplementos',cidade:'Paraná/PR',whatsapp:'+554197067893',status:'Enviado',observacao:'Follow-up 23/08',dataEnvio:'20/08/2026',proximoContato:'23/08/2026'},
{empresa:'Suplint',nicho:'Suplementos',cidade:'São Paulo/SP',whatsapp:'+5511978460783',status:'Enviado',observacao:'Follow-up 23/08',dataEnvio:'20/08/2026',proximoContato:'23/08/2026'},
{empresa:'Arcanjo Cipriano Advogadas',nicho:'Advogado',cidade:'São Paulo/SP',whatsapp:'+5511989698961',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Dimovci Advogados',nicho:'Advogado',cidade:'São Paulo/SP',whatsapp:'+5511937012673',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Bela Clínica Médica',nicho:'Médico',cidade:'Belo Horizonte/MG',whatsapp:'+553132411882',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''},
{empresa:'Clínica Lev Estética',nicho:'Médico',cidade:'Belo Horizonte/MG',whatsapp:'+5531986471781',status:'Pendente',observacao:'',dataEnvio:'',proximoContato:''}
];
export async function GET() { return POST(); }
export async function POST() {
  try {
  await connectDB();
  const existing = await Lead.countDocuments();
  if (existing > 0) return Response.json({ msg: 'Dados ja existem', count: existing });
  await Lead.insertMany(leads);
  return Response.json({ msg: '28 leads importados com sucesso!' });
  } catch(e) { return Response.json({ error: e.message }, { status: 500 }); }
}
