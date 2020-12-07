<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="4" :xs="24">
        <div class="head-container">
          <el-input v-model="filterText" placeholder="请输入部门名称" clearable size="small" prefix-icon="el-icon-search"
                    style="margin-bottom: 20px"/>
        </div>
        <div class="head-container">
          <el-tree
            class="filter-tree"
            :data="data"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree">
          </el-tree>
        </div>
      </el-col>
      <el-col :span="20" :xs="24">
        <div>
          <span style="font-size: 14px;color: #606266;font-weight: 700;margin-right: 10px">资源名称</span>
          <el-input placeholder="请输入资源名称" clearable size="small" style="width: 200px;margin-right: 30px"/>
          <span style="font-size: 14px;color: #606266;font-weight: 700;margin-right: 10px">资源类型</span>
          <el-select v-model="value" placeholder="请选择" style="margin-right: 40px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button type="cyan" icon="el-icon-search" size="mini">搜索</el-button>
          <el-button icon="el-icon-refresh" size="mini">重置</el-button>
        </div>

        <el-row :gutter="10" style="margin-top: 20px">
          <el-col :span="1.5">
            <el-button type="primary" icon="el-icon-plus" size="mini" @click="addinfo">新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="success" icon="el-icon-edit" size="mini" :disabled="single">修改</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="danger" icon="el-icon-delete" size="mini" :disabled="multiple">删除</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="info" icon="el-icon-upload2" size="mini">导入</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="warning" icon="el-icon-download" size="mini">导出</el-button>
          </el-col>
        </el-row>

        <el-table v-loading="loading" :data="resourceList" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50" align="center"/>
          <el-table-column label="资源编号" align="center" prop="userId"/>
          <el-table-column label="资源名称" align="center" prop="userName" :show-overflow-tooltip="true"/>
          <el-table-column label="资源类型" align="center" prop="nickName" :show-overflow-tooltip="true"/>
          <el-table-column label="所属部门" align="center" prop="dept.deptName" :show-overflow-tooltip="true"/>
          <!--        <el-table-column label="" align="center" prop="phonenumber" width="120" />-->
          <!--        <el-table-column label="状态" align="center">-->
          <!--          <template slot-scope="scope">-->
          <!--            <el-switch v-model="scope.row.status" active-value="0" inactive-value="1" @change="handleStatusChange(scope.row)"></el-switch>-->
          <!--          </template>-->
          <!--        </el-table-column>-->
          <el-table-column label="创建时间" align="center" prop="createTime" width="160">
            <template slot-scope="scope">
              <span>{{ parseTime(scope.row.createTime) }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="180" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button size="mini" type="text" icon="el-icon-edit" @click="handleUpdate(scope.row)"
                         v-hasPermi="['system:user:edit']">修改
              </el-button>
              <el-button v-if="scope.row.userId !== 1" size="mini" type="text" icon="el-icon-delete"
                         @click="handleDelete(scope.row)" v-hasPermi="['system:user:remove']">删除
              </el-button>
              <el-button size="mini" type="text" icon="el-icon-key" @click="handleResetPwd(scope.row)"
                         v-hasPermi="['system:user:resetPwd']">重置
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <!--      <pagination v-show="total>0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize" @pagination="getList" />-->
      </el-col>
    </el-row>
    <div>
      <el-dialog :visible.sync="openinfo" title="新增资源">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="资源名称">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="资源类型">
            <el-input v-model="form.companies"/>
          </el-form-item>
          <el-form-item label="所属部门">
            <!--            <el-input v-model="form.zhiwu"/>-->
            <el-input v-model="form.work"/>
          </el-form-item>
<!--          <el-form-item label="证明人">-->
<!--            <el-input v-model="form.witness"/>-->
<!--          </el-form-item>-->
          <el-form-item label="创建时间">
            <el-col :span="11">
              <el-date-picker v-model="form.btime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"
                              placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
<!--          <el-form-item label="结束时间">-->
<!--            <el-col :span="11">-->
<!--              <el-date-picker v-model="form.endtime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date"-->
<!--                              placeholder="选择日期" style="width: 60%;"/>-->
<!--            </el-col>-->
<!--          </el-form-item>-->
          <el-form-item label="备注">
            <el-input v-model="form.beizhu"/>
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
export default {
  name: 'Resourcedirectory',
  data() {
    return {
      openinfo:false,
      title:'',
      filterText: '',
      form:{},
      single: true,
      multiple: true,
      options: [{
        value: '1',
        label: '水资源'
      }, {
        value: '2',
        label: '雨水情况'
      }, {
        value: '3',
        label: '大坝监测'
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
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
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
    addinfo(){
      this.openinfo = true
    },
    submit(){
      this.openinfo  =false
      this.$message({
        type: 'success',
        message: '提交成功'
      })
    }
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
