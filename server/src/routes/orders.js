import { Router } from 'express'
import { getFirestore } from 'firebase-admin/firestore'
import { verifyToken } from '../middleware/auth.js'

const router = Router()

// POST /api/orders (로그인 필요)
router.post('/', verifyToken, async (req, res) => {
  try {
    const { items, shippingInfo, totalPrice } = req.body

    if (!items?.length) {
      return res.status(400).json({ error: '주문 상품이 없습니다.' })
    }

    const db = getFirestore()
    const orderRef = await db.collection('orders').add({
      uid: req.user.uid,
      items,
      shippingInfo,
      totalPrice,
      status: '결제완료',
      createdAt: new Date().toISOString(),
    })

    res.status(201).json({ orderId: orderRef.id })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: '주문 처리 중 오류가 발생했습니다.' })
  }
})

// GET /api/orders (로그인 필요 - 본인 주문 내역)
router.get('/', verifyToken, async (req, res) => {
  try {
    const db = getFirestore()
    const snapshot = await db
      .collection('orders')
      .where('uid', '==', req.user.uid)
      .orderBy('createdAt', 'desc')
      .get()

    const orders = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    res.json({ orders })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: '주문 내역 조회 중 오류가 발생했습니다.' })
  }
})

export default router
