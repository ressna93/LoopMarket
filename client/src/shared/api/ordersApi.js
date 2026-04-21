import http from './http'

export const ordersApi = {
  create: (data) => http.post('/api/orders', data).then((r) => r.data),
  getMyOrders: () => http.get('/api/orders').then((r) => r.data),
}
