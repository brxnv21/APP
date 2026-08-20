export async function POST(req) {
  const { user, pass } = await req.json();
  if (user === 'adm' && pass === 'outono123') {
    return Response.json({ ok: true, user: 'Administrador', perfil: 'admin' });
  }
  return Response.json({ ok: false, error: 'Usuário ou senha inválidos' }, { status: 401 });
}
