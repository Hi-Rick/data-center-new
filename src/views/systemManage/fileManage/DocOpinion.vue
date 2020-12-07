<template>
    <div class="app-container">
      <div class="top-content">
        <div class="top-details">
          <div>
            所属流程：
            <el-select v-model="value" placeholder="请选择" class="select-style">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div style="margin-top: 30px">
            意见内容：
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 8}"
              placeholder="请输入内容"
              class="input-style"
              v-model="textarea2">
            </el-input>
          </div>
        </div>
        <div class="top-button">
          <el-button type="primary">保存</el-button>
          <el-button type="primary">重置</el-button>
        </div>
      </div>
      <div class="bottom-content">
        <el-table
          :header-cell-style="{'text-align':'center', 'background-color' : '#EFEFEF'}">

          <el-table-column
            label="制定意见内容"
            align="center">
          </el-table-column>
          <el-table-column
            label="所属流程"
            align="center">
          </el-table-column>
          <el-table-column
            label="操作"
            align="center">
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DocOpinion",
      data() {
          return {
            options: [
              {
                value: '会议室使用审批流程',
                label: '会议室使用审批流程'
              },
              {
                value: '党委会议题审批流程',
                label: '党委会议题审批流程'
              },
              {
                value: '党委发文流程',
                label: '党委发文流程'
              },
              {
                value: '合同审批流程',
                label: '合同审批流程'
              },
              {
                value: '外地市派车单',
                label: '外地市派车单'
              },
              {
                value: '学院发文流程',
                label: '学院发文流程'
              },
              {
                value: '市内派车单',
                label: '市内派车单'
              },
              {
                value: '报告厅使用申请',
                label: '报告厅使用申请'
              },
              {
                value: '接待审批流程',
                label: '接待审批流程'
              },
              {
                value: '来文批办单',
                label: '来文批办单'
              },
              {
                value: '法律咨询登记流程',
                label: '法律咨询登记流程'
              },
              {
                value: '用印审批单',
                label: '用印审批单'
              },
              {
                value: '礼品领取审批流程',
                label: '礼品领取审批流程'
              },
              {
                value: '租车审批单',
                label: '租车审批单'
              },
              {
                value: '请示报告',
                label: '请示报告'
              },
              {
                value: '院长办公会议题审批流程',
                label: '院长办公会议题审批流程'
              },
            ],
            value: '会议室使用审批流程',
            textarea2: ''
          }
      }
    }
</script>

<style scoped>
  .top-content {
    background-color: #fff;
    width: 100%;
    height: 300px;
    padding: 30px;
  }
  .top-details {
    margin-left: 100px;
  }
  .select-style {
    width: 200px;
  }
  .input-style {
    width: 350px;
  }
  .top-button {
    text-align: center;
    margin-top: 30px;
  }
  .bottom-content {
    width: 100%;
    padding: 5px;
    margin-top: 30px;
    height: 300px;
    background-color: #fff;
  }
</style>
