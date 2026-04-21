import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import './firebase.js'
import productsRouter from './routes/products.js'
import ordersRouter from './routes/orders.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'LoopMarket API 서버 정상 작동 중' })
})

app.use('/api/products', productsRouter)
app.use('/api/orders', ordersRouter)

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`)
})
