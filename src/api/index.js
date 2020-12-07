import {get,post} from  '@/utils/request'

export let getAllAsset = (query)=> get('http://47.104.100.75/smartwater/data/data_asset/getAllAssetList',query)

export let getTreeList = (query)=> get('http://47.104.100.75/smartwater/data/data_asset/getAssetTreeList',query)

