import {get,post} from  '@/utils/request'

export let getAllAsset = (query)=> get('http://222.173.76.3:65001/smartwater/data/data_asset/getAllAssetList',query)

export let getTreeList = (query)=> get('http://222.173.76.3:65001/smartwater/data/data_asset/getAssetTreeList',query)

