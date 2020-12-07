import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'
/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import treeTableRouter from './modules/tree-table'
import nestedRouter from './modules/nested'

/** note: sub-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  // {
  //   path: '/home',
  //   component: () => import('@/views/HomePage/home'),
  //   hidden: true
  // },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/DraftPage',
    component: () => import('@/views/officePro/DraftPage'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dataCenter/homepage/index'),
        name: 'Dashboard',
        meta: { title: '数据可视化', icon: 'dashboard' }
      }
    ]
  },
  // {
  //   path: '',
  //   component: Layout,
  //   redirect: 'dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       name: 'Dashboard',
  //       meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
  //     }
  //   ]
  // },
  {
    path: '/interconnection',
    component: Layout,
    redirect: '/interconnection/resourceDirectory',
    name: 'Interconnection',
    alwaysShow: true,
    meta: {
      title: '数据互联互通',
      icon: 'guide'
    },
    children: [
      {
        path: 'resourceDirectory',
        name: 'Resourcedirectory',
        component: () => import('@/views/dataCenter/dataInterconnection/resourceDirectory'),
        meta: { title: '资源目录', icon: 'resource' }
      },
      // {
      //   path: 'shareData',
      //   name: 'Sharedata',
      //   component: () => import('@/views/dataCenter/dataInterconnection/shareData'),
      //   meta: { title: '数据共享', icon: 'share' }
      // },
      // {
      //   path: 'shareDataView',
      //   name: 'Sharedataview',
      //   component: () => import('@/views/dataCenter/dataInterconnection/shareDataView'),
      //   meta: { title: '数据共享可视化', icon: 'dataview' }
      // }
    ]
  },

  {
    path: '/qualityManage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'QualityManage',
        component: () => import('@/views/dataCenter/qualityManage/index'),
        meta: { title: '数据质量管理', icon: 'example' }
      }
    ]
  },
  // {
  //   path: '/dataView',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'DataView',
  //       component: () => import('@/views/dataCenter/dataView/index'),
  //       meta: { title: '数据可视化', icon: 'dataview1' }
  //     }
  //   ]
  // },
  {
    path: '/mainData',
    component: Layout,
    redirect: '/mainData/resourceDirectory',
    name: 'MainData',
    meta: {
      title: '主数据服务',
      icon: 'table'
    },
    alwaysShow: true,
    children: [
      {
        path: 'assetManage',
        name: 'Assetmanage',
        component: () => import('@/views/dataCenter/mainData/assetManage'),
        meta: { title: '数据资产', icon: 'asset' }
      },
      // {
      //   path: 'authorityManage',
      //   name: 'Authoritymanage',
      //   component: () => import('@/views/dataCenter/mainData/authorityManage'),
      //   meta: { title: '权限管理', icon: 'aumanage' }
      // },
      // {
      //   path: 'operationDesign',
      //   name: 'operationDesign',
      //   component: () => import('@/views/dataCenter/mainData/operationDesign'),
      //   meta: { title: '运维设计', icon: 'design' }
      // }
    ]
  },
  // {
  //   path: '/officePro',
  //   component: Layout,
  //   redirect: '/officePro/index',
  //   meta: {
  //     title: '办公流程',
  //     icon: 'documentation',
  //   },
  //   children: [
  //     {
  //       path: '/StartDoc',
  //       component: () => import('@/views/officePro/StartDoc'),
  //       name: 'StartDoc',
  //       meta: { title: '发起公文', affix: false }
  //     },
  //     {
  //       path: '/AwaitDoc',
  //       component: () => import('@/views/officePro/AwaitDoc'),
  //       name: 'AwaitDoc',
  //       meta: { title: '待办公文', affix: false }
  //     },
  //     {
  //       path: '/AwaitReadDoc',
  //       component: () => import('@/views/officePro/AwaitReadDoc'),
  //       name: 'AwaitReadDoc',
  //       meta: { title: '待阅公文', affix: false }
  //     },
  //     {
  //       path: '/WorkedDoc',
  //       component: () => import('@/views/officePro/WorkedDoc'),
  //       name: 'WorkedDoc',
  //       meta: { title: '已办公文', affix: false }
  //     },
  //     {
  //       path: '/PushSearch',
  //       component: () => import('@/views/officePro/PushSearch'),
  //       name: 'PushSearch',
  //       meta: { title: '发布查询', affix: false }
  //     },
      // {
      //   path: '/DocTransfer',
      //   component: () => import('@/views/officePro/DocTransfer'),
      //   name: 'DocTransfer',
      //   meta: { title: '公文移交', affix: false }
      // },
      // {
      //   path: '/DocAgency',
      //   component: () => import('@/views/officePro/DocAgency'),
      //   name: 'DocAgency',
      //   meta: { title: '公文代理', affix: false }
      // },
      // {
      //   path: '/AttentionDoc',
      //   component: () => import('@/views/officePro/AttentionDoc'),
      //   name: 'AttentionDoc',
      //   meta: { title: '关注公文', affix: false }
      // },
  //     {
  //       path: '/DraftBox',
  //       component: () => import('@/views/officePro/DraftBox'),
  //       name: 'DraftBox',
  //       meta: { title: '草稿箱', affix: false }
  //     }
  //   ]
  // },
  // {
  //   path: '/meetingManage',
  //   component: Layout,
  //   name: 'meetingManage',
  //   redirect: '/RoomReserve',
  //   meta: {
  //     title: '会议管理',
  //     icon: 'peoples',
  //   },
  //   children: [
  //     {
  //       path: '/RoomReserve',
  //       component: () => import('@/views/officeManage/meetingManage/RoomReserve'),
  //       name: 'RoomReserve',
  //       meta: { title: '会议室预定', affix: false }
  //     },
  //     {
  //       path: '/MyReserve',
  //       component: () => import('@/views/officeManage/meetingManage/MyReserve'),
  //       name: 'MyReserve',
  //       meta: { title: '我的预定', affix: false }
  //     },
  //     {
  //       path: '/MyMeeting',
  //       component: () => import('@/views/officeManage/meetingManage/MyMeeting'),
  //       name: 'MyMeeting',
  //       meta: { title: '我的会议', affix: false }
  //     }
  //   ]
  // },
  // {
  //   path: '/officeManage',
  //   component: Layout,
  //   name: 'officeManage',
  //   redirect: '/RoomReserve',
  //   meta: {
  //     title: '办公管理',
  //     icon: 'tree-table',
  //   },
  //   children: [
  //     {
  //       path: '/meetingManage',
  //       component: () => import('@/views/officeManage/meetingManage/index'),
  //       name: 'meetingManage',
  //       redirect: '/RoomReserve',
  //       meta: {
  //         title: '会议管理',
  //         icon: 'peoples',
  //       },
  //       children: [
  //         {
  //           path: '/RoomReserve',
  //           component: () => import('@/views/officeManage/meetingManage/RoomReserve'),
  //           name: 'RoomReserve',
  //           meta: { title: '会议室预定', affix: false }
  //         },
  //         {
  //           path: '/MyReserve',
  //           component: () => import('@/views/officeManage/meetingManage/MyReserve'),
  //           name: 'MyReserve',
  //           meta: { title: '我的预定', affix: false }
  //         },
  //         {
  //           path: '/MyMeeting',
  //           component: () => import('@/views/officeManage/meetingManage/MyMeeting'),
  //           name: 'MyMeeting',
  //           meta: { title: '我的会议', affix: false }
  //         }
  //       ]
  //     }
  //   ]
  //
  // },
  // {
  //   path: '/AnnouncementShow',
  //   component: Layout,
  //   name: 'notification',
  //   redirect: '/AnnouncementShow',
  //   meta: {
  //     title: '通知公告',
  //     icon: 'tongzhi',
  //   },
  //   children: [
  //     {
  //       path: '/AnnouncementShow',
  //       component: () => import('@/views/subsidiaryOffice/notification/AnnouncementShow'),
  //       name: 'AnnouncementShow',
  //       meta: { title: '公告展示', affix: false }
  //     }
  //   ]
  // },
  // {
  //   path: '/AddressBook',
  //   component: Layout,
  //   name: 'addressBook',
  //   redirect: '/AddressBook',
  //   meta: {
  //     title: '通讯录',
  //     icon: 'addressBook',
  //   },
  //   children: [
  //     {
  //       path: '/AddressBook',
  //       component: () => import('@/views/subsidiaryOffice/addressBook/AddressBook'),
  //       name: 'AddressBook',
  //       meta: { title: '通讯录', affix: false }
  //     },
  //     {
  //       path: '/MyAddressBook',
  //       component: () => import('@/views/subsidiaryOffice/addressBook/MyAddressBook'),
  //       name: 'MyAddressBook',
  //       meta: { title: '个人通讯录', affix: false }
  //     }
  //   ]
  // },
  // {
  //   path: '/ShareFile',
  //   component: Layout,
  //   name: 'docManage',
  //   redirect: '/ShareFile',
  //   meta: {
  //     title: '文档管理',
  //     icon: 'doc-one',
  //   },
  //   children: [
  //     {
  //       path: '/ShareFile',
  //       component: () => import('@/views/subsidiaryOffice/docManage/ShareFile'),
  //       name: 'ShareFile',
  //       meta: { title: '共享文件', affix: false }
  //     },
  //     {
  //       path: '/MyFile',
  //       component: () => import('@/views/subsidiaryOffice/docManage/MyFile'),
  //       name: 'MyFile',
  //       meta: { title: '个人文件', affix: false }
  //     }
  //   ]
  // },
  // {
  //   path: '/subsidiaryOffice',
  //   component: Layout,
  //   name: 'notification',
  //   redirect: '/AnnouncementShow',
  //   meta: {
  //     title: '辅助办公',
  //     icon: 'excel',
  //   },
  //   children: [
  //     {
  //       path: '/AnnouncementShow',
  //       component: () => import('@/views/subsidiaryOffice/notification/index'),
  //       name: 'notification',
  //       redirect: '/AnnouncementShow',
  //       meta: {
  //         title: '通知公告',
  //         icon: 'tongzhi',
  //       },
  //       children: [
  //         {
  //           path: '/AnnouncementShow',
  //           component: () => import('@/views/subsidiaryOffice/notification/AnnouncementShow'),
  //           name: 'AnnouncementShow',
  //           meta: { title: '公告展示', affix: false }
  //         }
  //       ]
  //     },
  //     {
  //       path: '/AddressBook',
  //       component: () => import('@/views/subsidiaryOffice/addressBook/index'),
  //       name: 'addressBook',
  //       redirect: '/AddressBook',
  //       meta: {
  //         title: '通讯录',
  //         icon: 'addressBook',
  //       },
  //       children: [
  //         {
  //           path: '/AddressBook',
  //           component: () => import('@/views/subsidiaryOffice/addressBook/AddressBook'),
  //           name: 'AddressBook',
  //           meta: { title: '通讯录', affix: false }
  //         },
  //         {
  //           path: '/MyAddressBook',
  //           component: () => import('@/views/subsidiaryOffice/addressBook/MyAddressBook'),
  //           name: 'MyAddressBook',
  //           meta: { title: '个人通讯录', affix: false }
  //         }
  //       ]
  //     },
  //     {
  //       path: '/ShareFile',
  //       component: () => import('@/views/subsidiaryOffice/docManage/index'),
  //       name: 'docManage',
  //       redirect: '/ShareFile',
  //       meta: {
  //         title: '文档管理',
  //         icon: 'doc-one',
  //       },
  //       children: [
  //         {
  //           path: '/ShareFile',
  //           component: () => import('@/views/subsidiaryOffice/docManage/ShareFile'),
  //           name: 'ShareFile',
  //           meta: { title: '共享文件', affix: false }
  //         },
  //         {
  //           path: '/MyFile',
  //           component: () => import('@/views/subsidiaryOffice/docManage/MyFile'),
  //           name: 'MyFile',
  //           meta: { title: '个人文件', affix: false }
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: '/systemManage',
  //   component: Layout,
  //   name: 'systemManage',
  //   redirect: '/MyInfo',
  //   meta: {
  //     title: '平台管理',
  //     icon: 'manager',
  //   },
  //   children: [
  //     {
  //       path: '/MyInfo',
  //       component: () => import('@/views/systemManage/MySet/index'),
  //       name: 'mySet',
  //       redirect: '/MyInfo',
  //       meta: {
  //         title: '个人设置',
  //         icon: 'user',
  //       },
  //       children: [
  //         {
  //           path: '/MyInfo',
  //           component: () => import('@/views/systemManage/MySet/MyInfo'),
  //           name: 'MyInfo',
  //           meta: { title: '个人资料', affix: false }
  //         },
  //         {
  //           path: '/MyPassword',
  //           component: () => import('@/views/systemManage/MySet/MyPassword'),
  //           name: 'MyPassword',
  //           meta: { title: '平台密码', affix: false }
  //         },
  //       ]
  //     },
  //     {
  //       path: '/DocOpinion',
  //       component: () => import('@/views/systemManage/fileManage/DocOpinion'),
  //       name: 'fileManage',
  //       redirect: '/DocOpinion',
  //       meta: {
  //         title: '公文管理',
  //         icon: 'gongwen',
  //       },
  //       children: [
  //         {
  //           path: '/DocOpinion',
  //           component: () => import('@/views/systemManage/fileManage/DocOpinion'),
  //           name: 'DocOpinion',
  //           meta: { title: '公文意见', affix: false }
  //         }
  //       ]
  //     }
  //   ]
  //
  // },
  // {
  //   path: '/MyInfo',
  //   component: Layout,
  //   name: 'mySet',
  //   redirect: '/MyInfo',
  //   meta: {
  //     title: '个人设置',
  //     icon: 'user',
  //   },
  //   children: [
  //     {
  //       path: '/MyInfo',
  //       component: () => import('@/views/systemManage/MySet/MyInfo'),
  //       name: 'MyInfo',
  //       meta: { title: '个人资料', affix: false }
  //     },
  //     {
  //       path: '/MyPassword',
  //       component: () => import('@/views/systemManage/MySet/MyPassword'),
  //       name: 'MyPassword',
  //       meta: { title: '平台密码', affix: false }
  //     },
  //   ]
  // },
  // {
  //   path: '/DocOpinion',
  //   component: Layout,
  //   name: 'fileManage',
  //   redirect: '/DocOpinion',
  //   meta: {
  //     title: '公文管理',
  //     icon: 'gongwen',
  //   },
  //   children: [
  //     {
  //       path: '/DocOpinion',
  //       component: () => import('@/views/systemManage/fileManage/DocOpinion'),
  //       name: 'DocOpinion',
  //       meta: { title: '公文意见', affix: false }
  //     }
  //   ]
  // }
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/guide',
  //   component: Layout,
  //   redirect: '/guide/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: 'guide', icon: 'guide', noCache: true }
  //     }
  //   ]
  // }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

export const asyncRoutes = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: 'permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'pagePermission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'directivePermission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/permission/role'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'rolePermission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/svg-icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },
  //
  // /** When your routing table is too long, you can split it into small modules**/
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,
  // treeTableRouter,
  //
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/list',
  //   name: 'Example',
  //   meta: {
  //     title: 'example',
  //     icon: 'example'
  //   },
  //   children: [
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'createArticle', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'editArticle', noCache: true },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'ArticleList',
  //       meta: { title: 'articleList', icon: 'list' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/tab',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Tab',
  //       meta: { title: 'tab', icon: 'tab' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/errorPage/401'),
  //       name: 'Page401',
  //       meta: { title: 'page401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/errorPage/404'),
  //       name: 'Page404',
  //       meta: { title: 'page404', noCache: true }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/error-log',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/errorLog/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'errorLog', icon: 'bug' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/exportExcel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'exportExcel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/selectExcel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'selectExcel' }
  //     },
  //     {
  //       path: 'export-merge-header',
  //       component: () => import('@/views/excel/mergeHeader'),
  //       name: 'MergeHeader',
  //       meta: { title: 'mergeHeader' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/uploadExcel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'uploadExcel' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   meta: { title: 'zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'exportZip' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'pdf', icon: 'pdf' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },
  //
  // {
  //   path: '/theme',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'theme', icon: 'theme' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'clipboardDemo', icon: 'clipboard' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/i18n',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/i18n-demo/index'),
  //       name: 'I18n',
  //       meta: { title: 'i18n', icon: 'international' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.com/PanJiaChen/vue-element-admin',
  //       meta: { title: 'externalLink', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]
