export default {
  all(params) {
    return axios.get('/api/users', params)
  },
  find(id) {
    return axios.get(`/api/user/${id}`)
  },
  create(data) {
    return axios.post('/api/users/create', data)
  },
  update(id, data) {
    return axios.put(`/api/user/${id}`, data)
  },
  delete(id) {
    return axios.delete(`/api/user/${id}`)
  }
}
