import { NextRequest, NextResponse } from 'next/server'
import { CARS, Car } from '@/components/data'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const brand    = searchParams.get('brand')
  const fuel     = searchParams.get('fuel')
  const maxPrice = searchParams.get('maxPrice')
  const sort     = searchParams.get('sort')

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return NextResponse.json(filterLocal(CARS, brand, fuel, maxPrice, sort))
  }

  try {
    const { createClient } = await import('@/lib/supabase/server')
    const supabase = await createClient()

    let query = supabase.from('cars').select('*')
    if (brand && brand !== 'Tutte')  query = query.eq('brand', brand)
    if (fuel  && fuel  !== 'Tutti')  query = query.eq('fuel', fuel)
    if (maxPrice)                    query = query.lte('price', parseInt(maxPrice))

    if (sort === 'priceAsc')   query = query.order('price', { ascending: true })
    else if (sort === 'priceDesc') query = query.order('price', { ascending: false })
    else if (sort === 'kmAsc')     query = query.order('km',    { ascending: true })
    else if (sort === 'yearDesc')  query = query.order('year',  { ascending: false })
    else                           query = query.order('id',    { ascending: true })

    const { data, error } = await query
    if (error) throw error
    return NextResponse.json(data)
  } catch {
    return NextResponse.json(filterLocal(CARS, brand, fuel, maxPrice, sort))
  }
}

function filterLocal(
  cars: Car[],
  brand: string | null,
  fuel: string | null,
  maxPrice: string | null,
  sort: string | null,
): Car[] {
  let arr = [...cars]
  if (brand    && brand    !== 'Tutte') arr = arr.filter(c => c.brand === brand)
  if (fuel     && fuel     !== 'Tutti') arr = arr.filter(c => c.fuel === fuel as Car['fuel'])
  if (maxPrice)                         arr = arr.filter(c => c.price <= parseInt(maxPrice))
  if (sort === 'priceAsc')  arr.sort((a, b) => a.price - b.price)
  if (sort === 'priceDesc') arr.sort((a, b) => b.price - a.price)
  if (sort === 'kmAsc')     arr.sort((a, b) => a.km - b.km)
  if (sort === 'yearDesc')  arr.sort((a, b) => b.year - a.year)
  return arr
}
