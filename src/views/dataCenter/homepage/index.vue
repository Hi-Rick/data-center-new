<template>
  <div class="dashboard-editor-container">
    <panel-group @handleSetLineChartData="handleSetLineChartData"/>
    <div v-if="type=='newVisitis'">
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <line-chart :chart-data="lineChartData"/>
      </el-row>
    </div>
    <div v-if="type=='messages'">
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <resource-chart/>
      </el-row>
    </div>
    <div v-if="type=='assets'">
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <assets-chart/>
      </el-row>
    </div>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <!--          <raddar-chart />-->
          <line-chart :chart-data="lineChartData"/>
        </div>

      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <!--          <bar-chart />-->
          <assets-chart/>
        </div>
      </el-col>
    </el-row>
    <panel-group2 @handleSetLineChartData2="handleSetLineChartData2"/>
    <!--    <div v-if="type=='sharetop'">-->
    <!--      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">-->
    <!--        <SharetopChart/>-->
    <!--      </el-row>-->
    <!--    </div>-->
    <!--    <div v-if="type=='todo'">-->
    <!--      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">-->
    <!--        <line-chart :chart-data="lineChartData" />-->
    <!--      </el-row>-->
    <!--    </div>-->
    <!--    <div v-if="type=='usecount'">-->
    <!--      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">-->
    <!--        <resource-chart/>-->
    <!--      </el-row>-->
    <!--    </div>-->
    <!--    <div v-if="type=='topcount'">-->
    <!--      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">-->
    <!--        <resource-chart/>-->
    <!--      </el-row>-->
    <!--    </div>-->
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <!--          <raddar-chart />-->
          <!--          <todo-list />-->
          <task-status/>
        </div>

      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <data-use-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <SharetopChart/>
        </div>
      </el-col>
    </el-row>
    <!--    <el-row :gutter="8">-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 8}" style="padding-right:8px;margin-bottom:30px;">-->
    <!--        <transaction-table />-->
    <!--      </el-col>-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 8}" style="margin-bottom:30px;">-->
    <!--        <todo-list />-->
    <!--      </el-col>-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 8}" style="margin-bottom:30px;">-->
    <!--        <box-card />-->
    <!--      </el-col>-->
    <!--    </el-row>-->
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import PanelGroup2 from './components/PanelGroup2'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import resourceChart from "@/views/dataCenter/homepage/components/resourceChart";
import SharetopChart from "@/views/dataCenter/homepage/components/SharetopChart";
import AssetsChart from "@/views/dataCenter/homepage/components/assets-chart"
import DataUseChart from "@/views/dataCenter/homepage/components/DataUseChart";
import TaskStatus from "@/views/dataCenter/homepage/components/TaskStatus";

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  }
}

export default {
  name: 'Dashboard',
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard,
    resourceChart,
    PanelGroup2,
    SharetopChart,
    AssetsChart,
    DataUseChart,
    TaskStatus
  },
  // computed:{
  // },
  data() {
    return {
      type: '',
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData['newVisitis']
      this.type = type
    },
    handleSetLineChartData2(type) {
      this.type = type
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  //.github-corner {
  //  position: absolute;
  //  top: 0px;
  //  border: 0;
  //  right: 0;
  //}

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
