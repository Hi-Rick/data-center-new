<template>
    <div class="app-container">
      <div class="content">
        <div class="info-form">
          <div class="info-title">
            修改密码
          </div>
          <div class="info-detail">
            <div class="info-content color-one">
              <div class="label-style">原密码：</div>
              <el-input class="input-style"></el-input>
            </div>
            <div class="info-content color-two">
              <div class="label-style">新密码：</div>
              <el-input class="input-style"></el-input>
            </div>
            <div class="info-content color-one">
              <div class="label-style">确认密码：</div>
              <el-input class="input-style"></el-input>
            </div>
          </div>
          <div class="button-style">
            <el-button type="primary">
              保存
            </el-button>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MyPassword"
    }
</script>

<style scoped>
  .content {
    width: 100%;
    height: 600px;
    position: relative;
    background-color: #fff;
  }
  .info-form {
    width: 600px;
    height: 260px;
    border: 1px solid rgba(28,31,33,.1);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .info-title {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid rgba(28,31,33,.1);
    line-height: 45px;
    text-align: center;
    font-size: 20px;
  }
  .info-content {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(28,31,33,.1);
    padding-left: 30px;
  }
  .label-style {
    width: 100px;
    text-align: right;
    float: left;
  }
  .input-style {
    width: 300px;
    margin-left: 30px;
  }
  .color-one {
    background-color: #F4F4F4;
  }
  .color-two {
    background-color: #fff;
  }
  .button-style {
    line-height: 55px;
    text-align: center;
  }
</style>
