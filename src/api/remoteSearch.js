import request from '@/utils/request'

export function userSearch(name) {
  return request({
    url: '/search/user',
    method: 'get',
    params: { name }
  })
}

export function searchPeople(data) {
  return request({
    url: '/zhengai/getBygroup',
    method: 'get',
    params: data
  })
}
