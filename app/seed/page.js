'use client';
import { useState, useEffect } from 'react';
export default function SeedPage() {
  const [msg, setMsg] = useState('Importando leads...');
  useEffect(() => {
    fetch('/api/seed', { method: 'POST' })
      .then(r => r.json())
      .then(d => setMsg(JSON.stringify(d)))
      .catch(e => setMsg('Erro: ' + e.message));
  }, []);
  return <div style={{padding:'2rem',color:'#fff',background:'#0f1117',minHeight:'100vh',fontFamily:'system-ui'}}>
    <h1>Seed - Importar Leads</h1>
    <p style={{marginTop:'1rem',fontSize:'1.2rem'}}>{msg}</p>
    {msg.includes('sucesso') && <a href="/" style={{color:'#6c5ce7',marginTop:'1rem',display:'block'}}>Ir para o App →</a>}
  </div>;
}
