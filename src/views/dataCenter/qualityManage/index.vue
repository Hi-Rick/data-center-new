<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="5" :xs="24" class="leftColumn">
        <div style="height: 40px; line-height: 40px; font-family: '黑体'; color: gray; ">
          目录
        </div>
        <div>
          <el-table :data="deptOptions" :show-header="false" @row-click="clickRow" style="cursor: pointer; ">
            <el-table-column prop="assetSource" :show-overflow-tooltip="true"></el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="19" :xs="24">
        <el-table v-loading="loading" :data="resourceList.slice((currentPage - 1) * pagesize, currentPage * pagesize)">
          <el-table-column width="50px" align="center">
            <template slot-scope="scope">
              {{ scope.$index + (currentPage - 1) * pagesize + 1 }}
            </template>
          </el-table-column>
          <el-table-column label="数据表名" align="center" prop="Name"/>
          <el-table-column label="引擎" align="center" prop="Engine"/>
          <el-table-column label="创建时间" align="center" prop="Create_time"></el-table-column>
          <el-table-column label="最后修改时间" align="center" prop="Update_time"></el-table-column>
          <el-table-column label="默认字符集" align="center" prop="Collation" :show-overflow-tooltip="true"/>
          <el-table-column label="平均每行包含的字节数" align="center" prop="Avg_row_length"/>
          <el-table-column label="表数据最大容量" align="center" prop="Max_data_length"/>
          <el-table-column label="表行数" align="center" prop="Rows"/>
          <el-table-column label="表数据大小（字节）" align="center" prop="Data_length"/>
          <el-table-column label="资源含义" align="center" prop="dataMeaning"/>
        </el-table>
        <div style="text-align: center; margin-top: 10px; ">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            layout="total,prev,pager,next"
            :total="resourceList.length">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getAssetQuality, getTreeList} from "../../../api";

export default {
  data() {
    return {
      currentPage: 1,  // 当前页码
      pagesize: 10,  // 每页显示的行数
      deptOptions: [],
      resourceList: [],
      loading: true,
    };
  },
  mounted() {
    this.getTree();
  },
  methods: {
    getTree() {
      getTreeList().then(response => {
        if (response.data.code === 200) {
          this.deptOptions = response.data.data;
          this.getlist(this.deptOptions[0].assetSource);
        }
      })
    },
    getlist(dept) {
      this.loading = true
      getAssetQuality({
        dept: dept
      }).then(response => {
        if (response.data.code === 200) {
          this.resourceList = response.data.data
        }
        this.loading = false;
      })
    },
    clickRow(row, column, event) {
      this.getlist(row.assetSource);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
}
</script>

<style scoped>

</style>

