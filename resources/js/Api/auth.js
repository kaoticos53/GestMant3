export default {
  login(params) {
    return axios.get('/api/users', params)
  },
  logout(id) {
    return axios.get(`/api/users/${id}`)
  },
  create(data) {
    return axios.post('/api/users/create', data)
  },
  update(id, data) {
    return axios.put(`/api/users/${id}`, data)
  },
  delete(id) {
    return axios.delete(`/api/users/${id}`)
  }
}
