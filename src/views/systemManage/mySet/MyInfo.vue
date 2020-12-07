<template>
    <div class="app-container">
      <div class="content">
        <div class="info-form">
          <div class="info-title">
            个人资料
          </div>
          <div class="info-detail">
            <el-row>
              <el-col :span="12">
                <div class="left-content">
                  <div class="info-one color-one">
                    <div class="label-style">
                      用户名：
                    </div>
                    <el-input class="input-style" v-model="username"></el-input>
                  </div>
                  <div class="info-one color-two">
                    <div class="label-style">
                      姓名：
                    </div>
                    <el-input class="input-style" v-model="real_name"></el-input>
                  </div>
                  <div class="info-one color-one" >
                    <div class="label-style">
                      民族：
                    </div>
                    <el-input class="input-style" v-model="minzu"></el-input>
                  </div>
                  <div class="info-one color-two">
                    <div class="label-style">
                      入职日期：
                    </div>
                    <el-date-picker
                      v-model="value1"
                      type="datetime"
                      class="input-style"
                      placeholder="选择日期时间">
                    </el-date-picker>
                  </div>
                  <div class="info-one color-one">
                    <div class="label-style">
                      办公电话：
                    </div>
                    <el-input class="input-style" v-model="tel_phone"></el-input>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="left-content">
                  <div class="info-one color-one">
                    <div class="label-style">
                      国籍：
                    </div>
                    <el-input class="input-style" v-model="nation"></el-input>
                  </div>
                  <div class="info-one color-two">
                    <div class="label-style">
                      性别：
                    </div>
                    <el-input class="input-style" v-model="sex"></el-input>
                  </div>
                  <div class="info-one color-one">
                    <div class="label-style">
                      出生日期：
                    </div>
                    <el-date-picker
                      v-model="value2"
                      type="datetime"
                      class="input-style"
                      placeholder="选择日期时间">
                    </el-date-picker>
                  </div>
                  <div class="info-one two">
                    <div class="label-style">
                      移动电话：
                    </div>
                    <el-input class="input-style" v-model="phone"></el-input>
                  </div>

                  <div class="info-one color-one">
                    <div class="label-style">
                      邮件地址：
                    </div>
                    <el-input class="input-style" v-model="mail"></el-input>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div>
            <div class="info-one color-two">
              <div class="label-style">
                身份证号：
              </div>
              <el-input class="input-style2" v-model="idcard"></el-input>
            </div>
          </div>
          <div class="button-style">
            <el-button type="primary">
              重置
            </el-button>
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
        name: "MyInfo",
      data() {
          return {
            value1: '2009-04-09',
            username: 'y53602',
            real_name: '张强',
            minzu: '汉族',
            tel_phone: '88673465',
            nation: '中国',
            sex: '男',
            value2: '1984-04-06',
            idcard: '210048562789302321',
            phone: '13709754820',
            mail: '10742356312@163.com'
          }
      }
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
    width: 800px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(28,31,33,.1);
  }
  .info-title {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid rgba(28,31,33,.1);
    line-height: 45px;
    text-align: center;
    font-size: 20px;
  }
  .info-one {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(28,31,33,.1);
    padding-left: 30px;
  }
  .color-one {
    background-color: #F4F4F4;
  }
  .color-two {
    background-color: #fff;
  }
  .left-content {
    width: 100%;
    border-right: 1px solid rgba(28,31,33,.1);
    height: 100%;
  }
  .label-style {
    width: 100px;
    text-align: right;
    float: left;
  }
  .input-style {
    width: 200px;
    margin-left: 30px;
  }
  .input-style2 {
    width: 400px;
    margin-left: 30px;
  }
  .button-style {
    line-height: 55px;
    text-align: center;
  }
</style>
