<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="5" :xs="24" class="leftColumn">
        <div style="margin-bottom: 0.5rem">
          <el-button type="success" icon="el-icon-plus" size="mini" @click="addTree" round>新增</el-button>
          <el-button type="primary" icon="el-icon-edit" size="mini" v-if="!showEditAssets"
                     @click="showEditAssets = true" round>编辑
          </el-button>
          <el-button type="danger" icon="el-icon-check" size="mini" v-else @click="showEditAssets = false" plain round>
            完成
          </el-button>
        </div>
        <div v-show="showEditAssets === false">
          <el-table :data="deptOptions" :show-header="false" @row-click="clickRow" style="cursor: pointer; ">
            <el-table-column prop="assetSource" :show-overflow-tooltip="true"></el-table-column>
          </el-table>
        </div>
        <div v-show="showEditAssets === true">
          <el-table :data="deptOptions" :show-header="false" @row-click="clickRow" style="cursor: pointer; ">
            <el-table-column prop="assetSource" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column width="85px">
              <template slot-scope="scope">
                <el-button type="warning" icon="el-icon-edit" size="mini" circle
                           @click="editAsset(scope.row)"></el-button>
                <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteAsset(scope.row)"
                           circle></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="19" :xs="24">
        <div style="float: left; ">
          <el-button :loading="downloadLoading" type="warning" icon="el-icon-download"
                     @click="handleDownload">导出
          </el-button>
        </div>
        <div style="float: right; ">
          <el-form :inline="true" :model="filterForm">
            <el-form-item label="数据含义">
              <el-input placeholder="请输入资源名称" v-model="filterForm.dataMeaning" clearable/>
            </el-form-item>
            <el-form-item label="数据状态">
              <el-select v-model="filterForm.state" placeholder="请选择">
                <el-option
                  v-for="(item, index) in options"
                  :key="index"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain icon="el-icon-search" @click="doFilter" circle></el-button>
              <el-button type="success" plain icon="el-icon-refresh" @click="refreshList" circle></el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-table v-loading="loading" :data="resourceList.slice((currentPage - 1) * pagesize, currentPage * pagesize)">
          <el-table-column width="50px" align="center">
            <template slot-scope="scope">
              {{ scope.$index + (currentPage - 1) * pagesize + 1 }}
            </template>
          </el-table-column>
          <el-table-column label="数据编号" align="center" prop="dataCode"/>
          <el-table-column label="数据表名" align="center" prop="dataName"/>
          <el-table-column label="数据含义" align="center" prop="dataMeaning" :show-overflow-tooltip="true"/>
          <el-table-column label="所属部门" align="center" prop="dept"/>
          <el-table-column label="创建时间" align="center" prop="createTime"></el-table-column>
          <el-table-column label="更新时间" align="center" prop="updateTime"></el-table-column>
          <el-table-column label="数据状态" align="center" prop="state">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.state" type="success">发布</el-tag>
              <el-tag v-else type="danger">停用</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="90px" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button size="mini" type="text" icon="el-icon-edit" @click="addinfo(scope.row)">修改
              </el-button>
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
      </el-col>
    </el-row>
    <el-dialog :visible.sync="openinfo" title="修改数据表">
      <el-form ref="form" :model="currentRow" label-width="100px">
        <el-form-item label="数据编号">
          <el-input v-model="currentRow.dataCode" disabled style="width: 80%; "/>
        </el-form-item>
        <el-form-item label="数据表名">
          <el-input v-model="currentRow.dataName" disabled style="width: 80%; "/>
        </el-form-item>
        <el-form-item label="数据含义">
          <el-input v-model="currentRow.dataMeaning" style="width: 80%; "/>
        </el-form-item>
        <el-form-item label="所属部门">
          <el-select v-model="currentRow.dept" style="width: 300px; ">
            <el-option v-for="(item, index) in deptOptions" :key="index" :value="item.assetSource"
                       :label="item.assetSource"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-col :span="11">
            <el-date-picker v-model="currentRow.createTime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"
                            placeholder="选择日期" style="width: 300px;" disabled/>
          </el-col>
        </el-form-item>
        <el-form-item label="更新时间">
          <el-col :span="11">
            <el-date-picker v-model="currentRow.updateTime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"
                            placeholder="选择日期" style="width: 300px;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="数据状态">
          <el-select v-model="currentRow.state" placeholder="请选择" style="width: 300px;">
            <el-option
              v-for="(item, index) in options"
              :key="index"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div style="text-align: center; ">
        <el-button type="primary" @click="submit">确定</el-button>
        <el-button @click="openinfo = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {parseTime} from "@/utils";
import {
  addAssetTree,
  deleteAssetTree,
  getAllAsset,
  getAssetByDept,
  getFilterAsset,
  getTreeList, updateAsset,
  updateAssetTree
} from "../../../api";

export default {
  name: 'Assetmanage',
  data() {
    return {
      currentPage: 1,  // 当前页码
      pagesize: 10,  // 每页显示的行数
      deptOptions: [],
      defaultProps: {
        children: "children",
        label: "assetSource",
      },
      showEditAssets: false,
      downloadLoading: false,
      openinfo: false,
      resourceList: [],
      loading: true,
      options: [
        {
          value: true,
          label: '发布'
        },
        {
          value: false,
          label: '停用'
        }
      ],
      filterForm: {
        dataMeaning: '',
        state: ''
      },
      currentRow: {
        "createTime": "",
        "dataCode": "",
        "dataMeaning": "",
        "dataName": "",
        "dept": "",
        "id": null,
        "state": true,
        "updateTime": ""
      }
    };
  },
  mounted() {
    this.getTree();
    this.getlist();
  },
  methods: {
    addinfo(row) {
      this.openinfo = true;
      this.currentRow = row;
    },
    submit() {
      updateAsset(this.currentRow).then(response => {
        if (response.data.code === 200) {
          this.$message({
            type: 'success',
            message: '修改成功'
          });
          this.getlist();
          this.openinfo = false;
        } else {
          this.$message.error('修改失败');
        }
      })
    },
    getTree() {
      getTreeList().then(response => {
        if (response.data.code === 200) {
          this.deptOptions = response.data.data;
        }
      })
    },
    getlist() {
      this.loading = true
      getAllAsset().then(response => {
        if (response.data.code === 200) {
          this.resourceList = response.data.data
          this.total = this.resourceList.length
        }
        this.loading = false;
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['数据编号', '数据表名', '数据含义', '所属部门', '创建时间', '更新时间', '数据状态']
        const filterVal = ['dataCode', 'dataName', 'dataMeaning', 'dept', 'createTime', 'updateTime', 'state']
        const list = this.resourceList
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    addTree() {
      this.$prompt('请输入新增部门名称：', '新增部门', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({value}) => {
        if (value.trim() !== '') {
          addAssetTree({
            "assetSource": value
          }).then(response => {
            if (response.data.code === 200) {
              this.$message({
                type: 'success',
                message: '添加成功'
              });
              this.getTree();
            }
          })
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消提交'
        });
      });
    },
    clickRow(row, column, event) {
      getAssetByDept({
        dept: row.assetSource
      }).then(response => {
        if (response.data.code === 200) {
          this.resourceList = response.data.data;
        }
      })
    },
    deleteAsset(row) {
      console.log(row.id);
      this.$confirm('此操作将永久删除该部门, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteAssetTree(row.id).then(response => {
          if (response.data.code === 200) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getTree();
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    editAsset(row) {
      this.$prompt('请输入新的部门名称：', '修改部门名称', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: row.assetSource
      }).then(({value}) => {
        if (value.trim() !== '') {
          var currentRow = row;
          currentRow['assetSource'] = value;
          updateAssetTree(currentRow).then(response => {
            if (response.data.code === 200) {
              this.$message({
                type: 'success',
                message: '修改成功'
              });
              this.getTree();
            }
          })
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消修改'
        });
      });
    },
    refreshList() {
      this.filterForm = {
        dataMeaning: '',
        state: ''
      };
      this.getlist();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    doFilter() {
      getFilterAsset(this.filterForm).then(response => {
        if (response.data.code === 200) {
          this.resourceList = response.data.data;
        }
      })
    }
  },
}
</script>

<style scoped>
.leftColumn .el-button + .el-button {
  margin-left: 2px;
}
</style>

