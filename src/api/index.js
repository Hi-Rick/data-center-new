import request from  '@/utils/request'

// 查询资产目录
export function getTreeList() {
  return request({
    url: '/smartwater/data/data_asset/getAssetTreeList',
    method: 'get',
  })
}

// 查询所有数据资产
export function getAllAsset() {
  return request({
    url: '/smartwater/data/data_asset/getAllAssetList',
    method: 'get',
  })
}

export function getAssetByDept(data) {
  return request({
    url: `/smartwater/data/data_asset/getAssetListByDept`,
    method: 'get',
    params: data
  })
}

export function addAssetTree(data) {
  return request({
    url: '/smartwater/data/data_asset/addAssetTreeList',
    method: 'post',
    data
  })
}

export function deleteAssetTree(id) {
  return request({
    url: `/smartwater/data/data_asset/updateAssetTreeList/${id}`,
    method: 'delete'
  })
}

export function updateAssetTree(data) {
  return request({
    url: `/smartwater/data/data_asset/updateAssetTreeList`,
    method: 'post',
    data
  })
}

export function getFilterAsset(data) {
  return request({
    url: '/smartwater/data/data_asset/getAssetListByDataMeaningAndState',
    method: 'get',
    params: data
  })
}

export function updateAsset(data) {
  return request({
    url: '/smartwater/data/data_asset/updateAssetInfo',
    method: 'post',
    data
  })
}

export function getAssetQuality(data) {
  return request({
    url: '/smartwater/data/data_asset/getAssetQualityByTableName',
    method: 'get',
    params: data
  })
}

export function getResourceDictInfo() {
  return request({
    url: '/smartwater/data/data_asset/getAllResourceDirectoryInfo',
    method: 'get'
  })
}

// 修改数据资源目录
export function updateResourceDict(data) {
  return request({
    url: '/smartwater/data/data_asset/updateResourceDirectory',
    method: 'post',
    data
  })
}

// 获取所有资源分类
export function getDataCategory() {
  return request({
    url: '/smartwater/data/data_asset/getAllDataCategory',
    method: 'post'
  })
}

// 查询数据资产目录第一级结构
export function getAssetFirst() {
  return request({
    url: '/smartwater/data/data_asset/getAssetTreeListFirst',
    method: 'get'
  })
}
