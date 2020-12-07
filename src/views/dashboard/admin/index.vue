<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="10">
      <el-col :span="18">
        <el-row class="card-style">
          <el-col :span="10">
            <div class="img-left">
              <img src="../../../assets/newsPic/login-bg.jpg">
            </div>
          </el-col>
          <el-col :span="14">
            <div class="news-style">
              <div class="news-title">
                <span class="news-title-news">综合新闻</span>
                <span type="text" class="news-title-more">更多</span>
              </div>
              <div class="news-content">
                <div class="new-details">
                  <span class="new-icon">NEW</span>
                  <span class="new-title" @click="goto_link">第35届全国青少年科技创新大赛</span>
                  <span class="new-time">2020-03-20</span>
                </div>
                <div class="new-details">
                  <span class="new-icon">NEW</span>
                  <span class="new-title" @click="goto_link2">2019ACM国际大学生程序设计竞赛</span>
                  <span class="new-time">2019-11-02</span>
                </div>
                <div class="new-details">
                  <span class="new-icon">NEW</span>
                  <span class="new-title" @click="goto_link3">2019中科院ACME未来科技挑战</span>
                  <span class="new-time">2019-10-30</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <div class="right-content">
          <div class="right-title">
            <span class="right-title-one">通知公告</span>
            <span class="right-title-two">我的会议</span>
            <span class="news-title-more" @click="gotoNo">更多</span>
          </div>
          <div class="right-detail">
            <el-scrollbar style="height: 100%" class="scrollbar">
              <p class="right-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为使我公司各部门工作顺利的开展，并且保证各部门之间能够衍接顺畅，有效地提高工作效率。经公司领导研究决定将定期召开公司员工例会。具体通知如下：
              </p>
              <p class="right-text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例会召开时间：每周五下午4：00
              </p>
              <p class="right-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例会召开地点：公司小会议室;</p>
            </el-scrollbar>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="row-bottom">
      <el-col :span="18">
        <div class="table">
          <div class="table-title">
            <span class="table-title-span">待办事项</span>
            <span class="news-title-more" @click="gotoOffice">更多</span>
          </div>
          <div class="table-content">
            <el-table
            :data="tableData"
            :header-cell-style="{'text-align':'center', 'background-color' : '#EFEFEF'}">
              <el-table-column
                prop="title"
                label="标题"
                align="center">
              </el-table-column>
              <el-table-column
                prop="num"
                label="文号"
                align="center">
              </el-table-column>
              <el-table-column
                prop="sendPeople"
                label="发件人"
                align="center">
              </el-table-column>
              <el-table-column
                prop="applePeople"
                label="收件人"
                align="center">
              </el-table-column>
              <el-table-column
                prop="time"
                label="收件时间"
                align="center">
              </el-table-column>
              <el-table-column
                prop="type_exp"
                label="类型"
                align="center">
              </el-table-column>
              <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small" @click="cancel_submit">
                    移除
                  </el-button>
                  <el-button
                    type="text"
                    size="small" @click="edit_show(scope.row)">
                    编辑
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="bottom-right">
          <div class="table-title">
            <span class="table-title-span">常用链接</span>
          </div>
          <div class="bottom-right-content">
            <el-row :gutter="10">
              <el-col :span="12">
                <div class="cards card-one" @click="gotoAddressBook">
                  <div class="card-text">
                    <div>
                      <i class="el-icon-notebook-1 card-i"></i>
                    </div>
                    <div class="card-name">
                      <span>通讯录</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="cards card-two" @click="gotoStartDoc">
                  <div class="card-text">
                    <div>
                      <i class="iconfont ymq-iconzuzhiqunzu card-i"></i>
                    </div>
                    <div class="card-name">
                      <span>发起公文</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10" style="margin-top: 15px">
              <el-col :span="12">
                <div class="cards card-three" @click="gotoRoomReserve">
                  <div class="card-text">
                    <div>
                      <i class="iconfont ymq-iconteam card-i"></i>
                    </div>
                    <div class="card-name">
                      <span>会议预定</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="cards card-four" @click="gotoMyPassword">
                  <div class="card-text">
                    <div>
                      <i class="el-icon-lock card-i"></i>
                    </div>
                    <div class="card-name">
                      <span>平台密码</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%">
      <div class="dialog-content">
        <table border="1" class="table-style">
          <tr>
            <td class="table-style-td1 color-bg-one" align="center">标题：</td>
            <td class="table-style-td2 color-bg-one" align="center">{{title}}</td>
          </tr>
          <tr>
            <td class="table-style-td1 color-bg-two" align="center">文号：</td>
            <td class="table-style-td2 color-bg-two" align="center">{{num}}</td>
          </tr>
          <tr>
            <td class="table-style-td1 color-bg-one" align="center">发件人：</td>
            <td class="table-style-td2 color-bg-one" align="center">{{sendPeople}}</td>
          </tr>
          <tr>
            <td class="table-style-td1 color-bg-two" align="center">发件人：</td>
            <td class="table-style-td2 color-bg-two" align="center">{{applePeople}}</td>
          </tr>
          <tr>
            <td class="table-style-td1 color-bg-two" align="center">收件时间：</td>
            <td class="table-style-td2 color-bg-two" align="center">{{time}}</td>
          </tr>
          <tr>
            <td class="table-style-td1 color-bg-two" align="center">类型：</td>
            <td class="table-style-td2 color-bg-two" align="center">{{type_exp}}</td>
          </tr>
        </table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">撤 销</el-button>
        <el-button type="primary" @click="dialogVisible = false">批 复</el-button>
      </span>
    </el-dialog>
    <!--<github-corner style="position: absolute; top: 0px; border: 0; right: 0;" />-->

    <!--<panel-group @handleSetLineChartData="handleSetLineChartData" />-->

    <!--<el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">-->
      <!--<line-chart :chart-data="lineChartData" />-->
    <!--</el-row>-->

    <!--<el-row :gutter="32">-->
      <!--<el-col :xs="24" :sm="24" :lg="8">-->
        <!--<div class="chart-wrapper">-->
          <!--<raddar-chart />-->
        <!--</div>-->
      <!--</el-col>-->
      <!--<el-col :xs="24" :sm="24" :lg="8">-->
        <!--<div class="chart-wrapper">-->
          <!--<pie-chart />-->
        <!--</div>-->
      <!--</el-col>-->
      <!--<el-col :xs="24" :sm="24" :lg="8">-->
        <!--<div class="chart-wrapper">-->
          <!--<bar-chart />-->
        <!--</div>-->
      <!--</el-col>-->
    <!--</el-row>-->

    <!--<el-row :gutter="8">-->
      <!--<el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">-->
        <!--<transaction-table />-->
      <!--</el-col>-->
      <!--<el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
        <!--<todo-list />-->
      <!--</el-col>-->
      <!--<el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
        <!--<box-card />-->
      <!--</el-col>-->
    <!--</el-row>-->

  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'


const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      dialogVisible: false,
      tableData: [
        {
          title: '周三例行会议',
          num: 'D463626571',
          sendPeople: '张红',
          applePeople: '郑强',
          time: '2020-06-15',
          type_exp: '会议'
        },
        {
          title: '大赛通知',
          num: 'D9979735346',
          sendPeople: '张贺',
          applePeople: '邓世强',
          time: '2020-06-03',
          type_exp: '通知'
        },
        {
          title: '周四例行会议',
          num: 'D685634657',
          sendPeople: '张敏',
          applePeople: '郑强',
          time: '2020-05-28',
          type_exp: '会议'
        },
        {
          title: '人员调配通知',
          num: 'D79476583',
          sendPeople: '董成文',
          applePeople: '刘诗诗',
          time: '2020-05-16',
          type_exp: '通知'
        },
        {
          title: '周三例行会议',
          num: 'D89579345',
          sendPeople: '张红',
          applePeople: '郑强',
          time: '2020-05-05',
          type_exp: '会议'
        },
      ],
      title: '',
      num: '',
      sendPeople: '',
      applePeople: '',
      time: '',
      type_exp: ''

    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    gotoAddressBook() {
      this.$router.push('/AddressBook')
    },
    gotoStartDoc() {
      this.$router.push('/StartDoc')
    },
    gotoRoomReserve() {
      this.$router.push('/RoomReserve')
    },
    gotoMyPassword() {
      this.$router.push('/MyPassword')
    },
    goto_link() {
      var url = 'http://castic.xiaoxiaotong.org/index.aspx'
      window.open(url,'_blank')
    },
    goto_link2() {
      let url = 'http://acm.cumt.edu.cn/'
      window.open(url,'_blank')
    },
    goto_link3() {
      let url = 'http://istpa.cas.cn/acme/bsjs/'
      window.open(url,'_blank')
    },
    gotoNo() {
      this.$router.push('/AnnouncementShow')
    },
    gotoOffice() {
      this.$router.push('/AwaitDoc')
    },
    edit_show(row) {
      console.log(row)
      this.dialogVisible = true
      this.title = row.title
      this.num = row.num
      this.sendPeople = row.sendPeople
      this.applePeople = row.applePeople
      this.time = row.time
      this.type_exp = row.type_exp
    },
    cancel_submit() {
      this.$confirm('此操作将移除该条信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 20px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
.card-style {
  width: 100%;

  background-color: #fff;
  border: 1px solid rgba(28,31,33,.1);

}
  .img-left {
    height: 200px;
    width: 100%;
  }
  .img-left img {
    width: 100%;
    height: 100%;
  }
  .news-style {
    width: 100%;
    height: 200px;
    padding: 10px;
  }
  .news-title {
    padding: 10px;
  }
  .news-title-news {
    font-weight: bold;
  }
  .news-title-more {
    float: right;
    color: #409EFF;
    cursor: pointer;
  }
  .news-title-more:hover {
    color: #66b1ff;
  }
  .news-content {
    border-top: 2px solid #8F93A1;
    padding: 0 10px 10px 10px
  }
  .new-details {
    border-bottom: 1px dashed rgba(28,31,33,0.3);
    padding: 10px;
  }
  .new-icon {
    padding: 5px;
    background-color: red;
    color: #fff;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
  }
  .new-title {
    margin-left: 10px;
    color: #E33959;
    cursor: pointer;
  }
  .new-time {
    float: right;
    font-size: 14px;
  }
  .right-content {
    width: 100%;
    height: 200px;
    padding: 10px;
    background-color: #fff;
  }
  .right-title {
    padding: 10px;
  }
  .right-title-one {
    font-weight: bold;
  }
  .right-title-two {
    color: #999;
    margin-left: 20px;
  }
  .right-detail {
    border-top: 2px solid #8F93A1;
    padding: 0 10px 10px 10px;
    height: 150px;
  }
  .right-text {
    color: #545c63;
    font-size: 14px;
    line-height: 20px;
  }
  .row-bottom {
    margin-top: 10px;
  }
  .table {
    width: 100%;
    height: 400px;
    background-color: #fff;
    padding: 10px;
  }
  .table-title {
    padding: 0 10px 10px 10px;

  }
  .table-title-span {
    font-weight: bold;
  }
  .table-content {
    border-top: 2px solid #8F93A1;
    padding: 10px;
  }
  .bottom-right {
    padding: 10px;
    background-color: #fff;
    width: 100%;
    height: 400px;
  }
  .bottom-right-content {
    border-top: 2px solid #8F93A1;
    padding: 10px;
  }
  .cards {
    height: 150px;
    width: 100%;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    transition: all .6s;
  }
  .cards:hover {
    transform: translateY(-5px);
  }
  .card-one {
    background-color: #FBC16D;
  }
  .card-two {
    background-color: #749CF8;
  }
  .card-three {
    background-color: #57BEDF;
  }
  .card-four {
    background-color: #7DCCC7;
  }
  .card-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    width: 100%;
  }
  .card-i {
    font-size: 50px;
  }
  .card-name {
    margin-top: 10px;
    font-weight: bold;
    letter-spacing: 2px;
    width: 100%;
  }
  .dialog-content {
    width: 400px;
    height: 300px;
    margin: 0 auto;
    /*border: 1px solid rgba(28,31,33,.1);*/
  }
  .table-style {
    height: 300px;
    width: 100%;
  }
  .table-style-td1 {
    width: 100px;
  }
  .table-style-td2 {
    width: 300px;
  }
  .color-bg-one {
    background-color: #F6F6F6;
  }
  .color-bg-two {
    background-color: #fff;
  }
</style>
