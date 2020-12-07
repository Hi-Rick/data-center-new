<template>
    <div class="app-container">
      <div class="app-title">
        <div>
          <span>指定日期：</span><el-input class="input-style"></el-input>
          <span class="span-style">会议室名称：</span>
          <el-date-picker
            v-model="value1"
            class="input-style"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
          <el-button type="primary" class="span-style">查询</el-button>
          <el-button type="warning">清空</el-button>
        </div>

      </div>
      <div class="table-style">
        <div class="table-title">
          <div>
            <span>*</span>
            <span>1、默认显示当天全部会议室使用情况。可以填写条件查询某个会议室的使用情况。</span>
          </div>
          <div>
            <span>*</span>
            <span>2、根据当前显示的会议室使用情况，点击想要预定的会议室名称，进行预定会议室操作。</span>
          </div>
        </div>
        <el-table :data="tableData" stripe border style="margin-top: 10px">
          <el-table-column
            prop="row1"
            width="250">
          </el-table-column>
          <el-table-column
          label="8:00-8:30">
          </el-table-column>
          <el-table-column
            label="8:30-9:00">
          </el-table-column>
          <el-table-column
            label="9:00-9:30">
          </el-table-column>
          <el-table-column
            label="9:30-10:00">
          </el-table-column>
          <el-table-column
            label="10:00-10:30">
          </el-table-column>
          <el-table-column
            label="10:30-11:00">
          </el-table-column>
          <el-table-column
            label="11:00-11:30">
          </el-table-column>
          <el-table-column
            label="11:30-12:00">
          </el-table-column>
          <el-table-column
            label="12:00-12:30">
          </el-table-column>
          <el-table-column
            label="12:30-13:00">
          </el-table-column>
          <el-table-column
            label="13:00-13:30">
          </el-table-column>
          <el-table-column
            label="13:30-14:00">
          </el-table-column>
          <el-table-column
            label="14:00-14:30">
          </el-table-column>
          <el-table-column
            label="14:30-15:00">
          </el-table-column>
          <el-table-column
            label="15:00-15:30">
          </el-table-column>
          <el-table-column
            label="15:30-16:00">
          </el-table-column>
          <el-table-column
            label="16:00-16:30">
          </el-table-column>
          <el-table-column
            label="16:30-17:00">
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RoomReserve",
      data() {
          return {
            value1: '',
            tableData: [
              {
                row1: '图书馆报告厅'
              },
              {
                row1: '办公楼B406会议室'
              },
              {
                row1: '办公楼B508会议室'
              },
              {
                row1: '办公楼五楼报告厅'
              },
            ]
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
  .table-style {
    width: 100%;
    height: 600px;
    background-color: #fff;
    margin-top: 30px;
    padding: 10px;
  }
  .table-title {
    font-size: 12px;
  }
</style>
