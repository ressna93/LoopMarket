import { getAuth } from 'firebase-admin/auth'

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: '인증 토큰이 없습니다.' })
  }

  const token = authHeader.split('Bearer ')[1]
  try {
    const decoded = await getAuth().verifyIdToken(token)
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ error: '유효하지 않은 토큰입니다.' })
  }
}
