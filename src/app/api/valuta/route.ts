import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { targa, km, anno, email } = body

  if (!targa?.trim() || !km || !anno || !email?.trim()) {
    return NextResponse.json({ error: 'Campi obbligatori mancanti' }, { status: 400 })
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: 'Email non valida' }, { status: 400 })
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return NextResponse.json({ ok: true })
  }

  try {
    const { createClient } = await import('@/lib/supabase/server')
    const supabase = await createClient()
    const { error } = await supabase
      .from('valuations')
      .insert({
        targa: targa.trim().toUpperCase(),
        km:    parseInt(String(km)),
        anno:  parseInt(String(anno)),
        email: email.trim(),
      })
    if (error) throw error
  } catch (err) {
    console.error('[valuta]', err)
    return NextResponse.json({ error: 'Errore interno' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
