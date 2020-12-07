<template>
  <div class="app-container">
    <div class="app-title">
      <div>
        <span>姓名：</span><el-input class="input-style"></el-input>
        <span class="span-style">手机号：</span><el-input class="input-style"></el-input>
        <el-button type="primary" class="span-style">查询</el-button>
        <el-button type="warning">清空</el-button>
      </div>
    </div>
    <div class="content">
      <div class="content-button">
        <el-button type="primary" plain>管理我的分组</el-button>
        <el-button type="success" plain>管理我的通讯录</el-button>
      </div>
      <div style="clear: both"></div>
      <div style="margin-top: 20px">
        <el-row :gutter="20">
          <el-col :span="5">
            <div class="left-content">
              <div class="left-title">
                <span>分组列表</span>
              </div>
              <div class="tree-people">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" default-expand-all node-key="id">
                   <span  slot-scope="{ node, data }">
                     <span @click="ListTable(node, data)" style="font-size: 14px"><i class="el-icon-folder-opened icon-style"></i>{{ node.label}}</span>
                   </span>
                </el-tree>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="left-content">
              <div class="left-title">
                <span>人员列表</span>
              </div>
              <div class="name-list">
                <div v-for="(item, index) in peopleList" :key="index" class="name-style" @click="getInfo(item)">
                  <span>{{item.realname}}</span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="15">
            <div class="left-content">
              <div class="left-title">
                <span>用户详细信息</span>
              </div>
              <div class="info-content">
                <table border="1" class="table-style">
                  <tr>
                    <td class="table-style-td td-bg" align="right"><span class="td-text">姓名：</span></td>
                    <td class="table-style-td" align="left">{{infoitem.realname}}</td>
                  </tr>
                  <tr>
                    <td class="table-style-td td-bg" align="right"><span class="td-text">性别：</span></td>
                    <td class="table-style-td" align="left">{{infoitem.sex}}</td>
                  </tr>
                  <tr>
                    <td class="table-style-td td-bg" align="right"><span class="td-text">部门：</span></td>
                    <td class="table-style-td" align="left">{{infoitem.groupname}}</td>
                  </tr>
                  <tr>
                    <td class="table-style-td td-bg" align="right"><span class="td-text">出生日期：</span></td>
                    <td class="table-style-td" align="left">{{infoitem.birthday}}</td>
                  </tr>
                  <tr>
                    <td class="table-style-td td-bg" align="right"><span class="td-text">移动电话：</span></td>
                    <td class="table-style-td" align="left">{{infoitem.phone}}</td>
                  </tr>
                  <tr>
                    <td class="table-style-td td-bg" align="right"><span class="td-text">办公电话：</span></td>
                    <td class="table-style-td" align="left">{{infoitem.tel}}</td>
                  </tr>
                  <tr>
                    <td class="table-style-td td-bg" align="right"><span class="td-text">邮箱：</span></td>
                    <td class="table-style-td" align="left">{{infoitem.mails}}</td>
                  </tr>
                </table>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>

<script>
  import {searchPeople} from '../../../api/remoteSearch'
  export default {
    name: "MyAddressBook",
    data() {
      return {
        peopleList: [],
        infoitem: {},
        data: [{
          label: 'xxx科学技术大学',
          children: [{
            label: '院领导',
            // children: [{
            //   label: '三级 1-1-1'
            // }]
          },{
            label: '党委、院长办公室',
          },{
            label: '国际教育交流中心',
          },{
            label: '宣传部',
          },{
            label: '纪检处',
          },{
            label: '工会',
          },{
            label: '教务处',
          },{
            label: '人事处',
          },{
            label: '财务处',
          },{
            label: '学工部',
          },{
            label: '后勤管理处',
          },{
            label: '招生就业指导中心',
          },{
            label: '老年教育部',
          },{
            label: '材料工程系',
          },{
            label: '汽车工程系',
          },{
            label: '智能制造学院',
          },{
            label: '环境与化学工程系',
          },{
            label: '工商管理系',
          },{
            label: '经济贸易系',
          },{
            label: '计算机技术系',
          },{
            label: '建筑工程系',
          },{
            label: '基础课教学部',
          },{
            label: '思想政治与公共体育教学',
          },{
            label: '工业基础教学部',
          },{
            label: '成教部',
          },{
            label: '信息中心',
          },{
            label: '应用技术研发中心',
          },{
            label: '高等职业教育研究所',
          },{
            label: '安全工作处',
          },{
            label: '教学督导办公室',
          },{
            label: '行政督导办公室',
          },{
            label: '专家',
          },{
            label: '马克思主义学院',
          }
          ],
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      ListTable(node, data) {
        console.log(node)
        console.log(data)
        // if (data.label === '职称评定') {
        //   this.tableDatas = this.tableData
        //   console.log(this.tableDatas)
        // }
        this.getPeople(data.label)
      },
      getPeople(val) {
        let data = {
          groupname: val
        }
        searchPeople(data).then((res) => {
          this.peopleList = res.data
        })
      },
      getInfo(item) {
        this.infoitem = item
      }
    }
  }
</script>

<style scoped>
  .app-title {
    padding: 30px;
    background-color: #fff;
  }
  .input-style {
    width: 200px;
  }
  .span-style {
    margin-left: 150px;
  }
  .content {
    width: 100%;
    height: 500px;
    margin-top: 30px;
    background-color: #fff;
    padding: 20px;
  }
  .left-content {
    width: 100%;
    height: 400px;
    border: 1px solid rgba(28,31,33,.1);

  }
  .left-title {
    width: 100%;
    height: 55px;
    line-height: 55px;
    text-align: center;
    background: #2980B9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #FFFFFF, #6DD5FA);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #FFFFFF, #6DD5FA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .tree-people {
    /*overflow: hidden;*/
    height: 330px;
    overflow: auto;
    /*overflow-y: scroll;*/
  }
  .table-style {
    height: 345px;width: 100%;
  }
  .table-style-td {
    width: 50%;
  }
  .td-bg {
    background-color: #F6F6F6;
  }
  .td-text {
    color: #409EFF;
  }
  .content-button {
    float: right;
    /*margin-top: 30px;*/
  }
  .icon-style {
    color: #FFDA74;
    margin-right: 10px;
  }
  .name-list {
    height: 330px;
    overflow: auto;
  }
  .name-style {
    margin-top: 5px;
    cursor: pointer;
    padding: 0 10px 0 10px
  }
  .name-style:hover {
    background-color: rgba(28,31,33,.1);
  }
</style>
