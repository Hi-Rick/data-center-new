<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="4" :xs="24">
        <div class="head-container" style="margin-bottom: 0.5rem">
          <!--          <el-input v-model="filterText" placeholder="请输入部门名称" clearable size="small" prefix-icon="el-icon-search"-->
          <!--                    style="margin-bottom: 20px"/>-->
          <!--          <el-col :span="1.5">-->
          <el-button icon="el-icon-plus" size="mini" @click="addTree" plain round>新增</el-button>
          <!--          </el-col>-->
        </div>
        <div class="head-container">
          <el-tree
            class="filter-tree"
            :data="deptOptions"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree">
          </el-tree>
        </div>
      </el-col>
      <el-col :span="20" :xs="24">
        <div>
          <span style="font-size: 14px;color: #606266;font-weight: 700;margin-right: 10px">数据表名</span>
          <el-input placeholder="请输入资源名称" clearable size="small" style="width: 200px;margin-right: 30px"/>
          <span style="font-size: 14px;color: #606266;font-weight: 700;margin-right: 10px">数据状态</span>
          <el-select v-model="value" placeholder="请选择" style="margin-right: 40px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button type="cyan" icon="el-icon-search" size="mini">搜索</el-button>
          <!--          <el-button icon="el-icon-refresh" size="mini">重置</el-button>-->
        </div>

        <el-row :gutter="10" style="margin-top: 20px">
          <!--          <el-col :span="1.5">-->
          <!--            <el-button type="primary" icon="el-icon-plus" size="mini" @click="addinfo">新增</el-button>-->
          <!--          </el-col>-->
          <!--          <el-col :span="1.5">-->
          <!--            <el-button type="success" icon="el-icon-edit" size="mini" :disabled="single">修改</el-button>-->
          <!--          </el-col>-->
          <!--          <el-col :span="1.5">-->
          <!--            <el-button type="danger" icon="el-icon-delete" size="mini" :disabled="multiple">删除</el-button>-->
          <!--          </el-col>-->
          <!--          <el-col :span="1.5">-->
          <!--            <el-button type="info" icon="el-icon-upload2" size="mini">导入</el-button>-->
          <!--          </el-col>-->
          <el-col :span="1.5">
            <el-button :loading="downloadLoading" type="warning" icon="el-icon-download" size="mini"
                       @click="handleDownload">导出
            </el-button>
          </el-col>
        </el-row>

        <el-table v-loading="loading"
                  :data="resourceList.slice((queryParams.pageNum-1)*queryParams.pageSize,queryParams.pageNum*queryParams.pageSize)">
          <!--          <el-table-column type="selection" width="15" align="center"/>-->
          <el-table-column width="15" align="center"/>
          <el-table-column label="数据编号" align="center" prop="dataCode"/>
          <el-table-column label="数据表名" align="center" prop="dataName"/>
          <el-table-column label="数据含义" align="center" prop="dataMeaning" :show-overflow-tooltip="true"/>
          <el-table-column label="所属部门" align="center" prop="dept"/>
          <el-table-column label="创建时间" align="center" prop="createTime">
          </el-table-column>
          <el-table-column label="更新时间" align="center" prop="updateTime">
            <!--            <template slot-scope="scope">-->
            <!--              <span>{{ updateTime) }}</span>-->
            <!--            </template>-->
          </el-table-column>
          <el-table-column label="数据状态" align="center" prop="state">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.state" type="success">发布</el-tag>
              <el-tag v-if="!scope.row.state" type="danger">停用</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="180" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button size="mini" type="text" icon="el-icon-edit" @click="addinfo(scope.row)">修改
              </el-button>
              <el-button v-if="scope.row.userId !== 1" size="mini" type="text" icon="el-icon-delete" @click="handleDelete(scope.row)">删除</el-button>
              <!--              <el-button size="mini" type="text" icon="el-icon-key" @click="handleResetPwd(scope.row)"-->
              <!--                        >重置-->
              <!--              </el-button>-->
            </template>
          </el-table-column>
        </el-table>
        <pagination v-show="total>0" :total="total" :page.sync="queryParams.pageNum"
                    :limit.sync="queryParams.pageSize"/>

      </el-col>
    </el-row>
    <div>
      <el-dialog :visible.sync="openinfo" title="修改数据表">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="数据编号">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="数据表名">
            <el-input v-model="form.companies"/>
          </el-form-item>
          <el-form-item label="数据含义">
            <el-input v-model="form.work"/>
          </el-form-item>
          <el-form-item label="所属部门">
            <el-input v-model="form.work"/>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-col :span="11">
              <el-date-picker v-model="form.btime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"
                              placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="更新时间">
            <el-col :span="11">
              <el-date-picker v-model="form.btime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"
                              placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="数据状态">
            <el-select v-model="form.state" placeholder="请选择" style="margin-right: 40px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="openinfo = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      </el-dialog>
    </div>


  </div>
</template>

<script>
import {getAllAsset, getTreeList} from '@/api/index'
import pagination from "@/components/Pagination/index"
import {fetchList} from "@/api/article";
import {parseTime} from "@/utils";

export default {
  name: 'Assetmanage',
  components: {pagination},
  data() {
    return {
      deptOptions: undefined,
      defaultProps: {
        children: "children",
        label: "assetSource",
      },
      downloadLoading: false,
      openinfo: false,
      title: '',
      filterText: '',
      form: {},
      single: true,
      multiple: true,
      resourceList: [],
      loading: true,
      queryParams: {
        pageSize: 10,
        pageNum: 1,
      },
      total: 0,
      options: [{
        value: '1',
        label: '发布'
      }, {
        value: '0',
        label: '停用'
      }],
      value: '',
      data: [{
        id: 1,
        label: '水资源科',
        children: [{
          id: 4,
          label: '办公厅',
          children: [{
            id: 9,
            label: '1号'
          }, {
            id: 10,
            label: '2号'
          }]
        }]
      }, {
        id: 2,
        label: '水文水资源勘探局',
        children: [{
          id: 5,
          label: '办公厅'
        }, {
          id: 6,
          label: '人事司'
        }]
      }, {
        id: 3,
        label: '财务审计科',
        children: [{
          id: 7,
          label: '财务司'
        }, {
          id: 8,
          label: '人事司'
        }]
      },
        {
          id: 3,
          label: '水政监察大队',
          children: [{
            id: 7,
            label: '一队'
          }, {
            id: 8,
            label: '二队'
          }]
        }],
    };
  },
  mounted() {
    this.getTree()
    this.getlist()
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    handleSelectionChange(selection) {
      this.ids = selection.map((item) => item.userId);
      this.single = selection.length != 1;
      this.multiple = !selection.length;
    },
    addinfo() {
      this.openinfo = true
    },
    submit() {
      this.openinfo = false
      this.$message({
        type: 'success',
        message: '提交成功'
      })
    },
    getTree() {
      getTreeList().then(res => {
        console.log('1',res)
        this.deptOptions = res.data.data;
      })
    },
    getlist() {
      this.loading = true
      getAllAsset().then(response => {
        console.log('2',response)
        this.resourceList = response.data.data
        this.total = this.resourceList.length
        this.loading = false
        // console.log(this.resourceList)
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

    },

  },


}
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;

}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

