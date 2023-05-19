import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // recebe a url contendo o código (1b66cf6d84f14ae90bcc)
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const redirectTo = request.cookies.get('redirectTo')?.value
  // recebe o token jtw
  const registerResponse = await api.post('/register', {
    code,
  })
  // salvando token com o cookie
  const { token } = registerResponse.data
  const redirectURL = redirectTo ?? new URL('/', request.url)
  const coockieExpiresInSeconds = 60 * 60 * 24 * 30
  return NextResponse.redirect(redirectURL, {
    headers: {
      'set-cookie': `token=${token}; Path=/; max-age=${coockieExpiresInSeconds}`,
    },
  })
}
