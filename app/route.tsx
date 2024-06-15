import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { route } from './constants'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) redirect(route.login)
  redirect(route.principal)
}
