<template>
  <div class="app-container">
    <el-table :data="resourceList.slice((currentPage - 1) * pagesize, currentPage * pagesize)">
      <el-table-column label="序号" width="50px" align="center">
        <template slot-scope="scope">
          {{ scope.$index + (currentPage - 1) * pagesize + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="数据含义" align="center" prop="dataMeaning" />
      <el-table-column label="数据分类" align="center" prop="dataCategory" />
      <el-table-column label="数据类型" align="center" prop="dataType" />
      <el-table-column label="具体内容" align="center" prop="dataDetailInfo" />
      <el-table-column label="更新频率" align="center" prop="updateFrequency" />
      <el-table-column label="开放方式" align="center" prop="openMode" />
      <el-table-column label="责任方" align="center" prop="responsibleParty" />
    </el-table>
    <div style="text-align: center; margin-top: 10px; ">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        layout="total,prev,pager,next"
        :total="resourceList.length" >
      </el-pagination>
    </div>
<!--    <el-dialog :visible.sync="openinfo" title="新增资源">-->
<!--      <el-form ref="form" :model="form" label-width="100px">-->
<!--        <el-form-item label="资源名称">-->
<!--          <el-input v-model="form.name"/>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="资源类型">-->
<!--          <el-input v-model="form.companies"/>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="所属部门">-->
<!--          &lt;!&ndash;            <el-input v-model="form.zhiwu"/>&ndash;&gt;-->
<!--          <el-input v-model="form.work"/>-->
<!--        </el-form-item>-->
<!--        &lt;!&ndash;          <el-form-item label="证明人">&ndash;&gt;-->
<!--        &lt;!&ndash;            <el-input v-model="form.witness"/>&ndash;&gt;-->
<!--        &lt;!&ndash;          </el-form-item>&ndash;&gt;-->
<!--        <el-form-item label="创建时间">-->
<!--          <el-col :span="11">-->
<!--            <el-date-picker v-model="form.btime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"-->
<!--                            placeholder="选择日期" style="width: 60%;"/>-->
<!--          </el-col>-->
<!--        </el-form-item>-->
<!--        &lt;!&ndash;          <el-form-item label="结束时间">&ndash;&gt;-->
<!--        &lt;!&ndash;            <el-col :span="11">&ndash;&gt;-->
<!--        &lt;!&ndash;              <el-date-picker v-model="form.endtime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"&ndash;&gt;-->
<!--        &lt;!&ndash;                              placeholder="选择日期" style="width: 60%;"/>&ndash;&gt;-->
<!--        &lt;!&ndash;            </el-col>&ndash;&gt;-->
<!--        &lt;!&ndash;          </el-form-item>&ndash;&gt;-->
<!--        <el-form-item label="备注">-->
<!--          <el-input v-model="form.beizhu"/>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--      <div slot="footer" class="dialog-footer">-->
<!--        <el-button @click="openinfo = false">取 消</el-button>-->
<!--        <el-button type="primary" @click="submit">确 定</el-button>-->
<!--      </div>-->
<!--    </el-dialog>-->
  </div>
</template>

<script>
import {getResourceDictInfo} from "../../../api";

export default {
  name: 'Resourcedirectory',
  data() {
    return {
      resourceList: [],
      currentPage: 1,  // 当前页码
      pagesize: 10,  // 每页显示的行数
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
    }
  },
}
</script>

<style scoped>

</style>
