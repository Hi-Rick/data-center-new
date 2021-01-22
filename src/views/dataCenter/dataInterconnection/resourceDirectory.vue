<template>
  <div class="app-container">
    <el-table :data="resourceList.slice((currentPage - 1) * pagesize, currentPage * pagesize)">
      <el-table-column label="序号" width="50px" align="center">
        <template slot-scope="scope">
          {{ scope.$index + (currentPage - 1) * pagesize + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="数据含义" align="center" prop="dataMeaning"/>
      <el-table-column label="数据分类" align="center" prop="dataCategory"/>
      <el-table-column label="数据类型" align="center" prop="dataType"/>
      <el-table-column label="具体内容" align="center" prop="dataDetailInfo"/>
      <el-table-column label="更新频率" align="center" prop="updateFrequency"/>
      <el-table-column label="开放方式" align="center" prop="openMode"/>
      <el-table-column label="责任方" align="center" prop="responsibleParty"/>
      <el-table-column label="修改" align="center">
        <template slot-scope="scope">
          <el-button type="warning" size="small" icon="el-icon-edit" @click="editDict(scope.row)">修改</el-button>
        </template>
      </el-table-column>
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
    <el-dialog :visible.sync="edit" title="修改信息" width="500px">
      <el-form ref="form" :model="currentDict" label-width="90px">
        <el-form-item label="数据含义">
          <el-input v-model="currentDict.dataMeaning" style="width: 300px; " />
        </el-form-item>
        <el-form-item label="数据分类">
          <el-input v-model="currentDict.dataCategory" style="width: 300px; " />
        </el-form-item>
        <el-form-item label="数据类型">
          <el-input v-model="currentDict.dataType" style="width: 300px; " />
        </el-form-item>
        <el-form-item label="具体内容">
          <el-input v-model="currentDict.dataDetailInfo" style="width: 300px; " />
        </el-form-item>
        <el-form-item label="更新频率">
          <el-input v-model="currentDict.updateFrequency" style="width: 300px; " />
        </el-form-item>
        <el-form-item label="开放方式">
          <el-input v-model="currentDict.openMode" style="width: 300px; " />
        </el-form-item>
        <el-form-item label="责任方">
          <el-input v-model="currentDict.responsibleParty" style="width: 300px; " />
        </el-form-item>
      </el-form>
      <div style="text-align: center; ">
        <el-button type="primary" @click="submitEdit">确定</el-button>
        <el-button @click="edit = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {getResourceDictInfo, updateResourceDict} from "../../../api";

export default {
  name: 'Resourcedirectory',
  data() {
    return {
      resourceList: [],
      currentPage: 1,  // 当前页码
      pagesize: 10,  // 每页显示的行数
      currentDict: {},
      edit: false
    };
  },
  mounted() {
    this.getResourceList();
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    getResourceList() {
      getResourceDictInfo().then(response => {
        if (response.data.code === 200) {
          this.resourceList = response.data.data;
        }
      })
    },
    editDict(row) {
      this.currentDict = row;
      this.edit = true;
    },
    submitEdit() {
      updateResourceDict(this.currentDict).then(response => {
        if (response.data.code === 200) {
          this.$message({
            type: 'success',
            message: '修改成功'
          });
          this.getResourceList();
          this.edit = false;
        } else {
          this.$message.error('修改失败')
        }
      })
    }
  },
}
</script>

<style scoped>

</style>
