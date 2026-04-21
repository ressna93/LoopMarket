import http from './http'

export const productsApi = {
  getAll: (params) => http.get('/api/products', { params }).then((r) => r.data),
  getById: (id) => http.get(`/api/products/${id}`).then((r) => r.data),
}
