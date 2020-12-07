<template>
    <div class="app-container">
      <div class="buttons">
        <el-button type="primary" size="mini" @click="submit_button">新建正文</el-button>
        <el-button type="primary" size="mini" @click="submit_button">派发表单</el-button>
        <el-button type="primary" size="mini" @click="submit_button">附件操作</el-button>
      </div>

      <div class="page-size">
        <div class="page-title">
          中共××××学院委员会发文稿纸
        </div>
        <div class="page-content">
          <div class="content-one">
            <div class="content-one-left">
              <div class="page-text">
                <span>签发：</span>
              </div>
            </div>
            <div class="content-one-right">
              <div class="page-text">
                <span>核稿：</span>
              </div>
            </div>
          </div>
          <div class="content-two">
            <div class="content-two-left">
              <div class="page-text">
                <span>会签：</span>
              </div>
            </div>
            <div class="content-two-right">
              <div class="page-text">
                <span>拟稿：</span>
              </div>
            </div>
          </div>
          <div class="content-three">
            <div class="page-text">
              <span>标题：</span>
            </div>
          </div>
          <div class="content-four">
            <div class="page-text">
              <span>事由：</span>
            </div>
          </div>
          <div class="content-three">
            <div class="page-text">
              <span>主送：</span>
            </div>
          </div>
          <div class="content-five">
            <div class="content-five-left">
              <div class="page-text">
                <span>抄报：</span>
              </div>
            </div>
            <div class="content-five-right">
              <div class="page-text">
                <span>抄送：</span>
              </div>
            </div>

          </div>
          <div class="content-five">
            <div class="content-five-left">
            </div>
            <div class="content-five-right-two">
              <div class="page-text">
                <span>发出时间：</span>
              </div>
            </div>

          </div>
          <div class="content-six"></div>
          <div class="content-seven"></div>
          <div class="cotent-eight">
            说明：全部公文可在已办公文中自行查询，2020年之后，办公室不再提供大型检查所需以外的文件检索服务。
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DraftPage",
      methods: {
          submit_button() {
            this.$message.warning('此功能暂未对您开放！')
          }
      }
    }
</script>

<style scoped>
  .page-size {
    width: 650px;
    height: 978px;
    background-color: #fff;
    margin: 0 auto;
    padding: 50px;
  }
  .page-title {
    text-align: center;
    margin-top: 20px;
    font-size: 25px;
    color: red;
    font-weight: bold;
    font-family: '宋体';
  }
  .page-content {
    margin-top: 30px;
    border-top: 2px solid red;
  }
  .content-one {
    border-bottom: 1px solid red;
    height: 190px;
  }
  .content-one-left {
    height: 190px;
    width: 275px;
    float: left;
    border-right: 1px solid red;
    padding: 10px 0 10px 0;
  }
  .page-text {
    color: red;
    font-size: 15px;
    font-family: '宋体';
    font-weight: 700;
  }
  .content-one-right {
    height: 190px;
    width: 275px;
    float: left;

    padding: 10px 0 10px 0;
  }
  .content-two {
    border-bottom: 1px solid red;
    height: 95px;
  }
  .content-two-left {
    height: 95px;
    width: 275px;
    float: left;
    border-right: 1px solid red;
    padding: 10px 0 10px 0;
  }
  .content-two-right {
    height: 95px;
    width: 275px;
    float: left;
    padding: 10px 0 10px 0;
  }
  .content-three {
    padding: 10px 0 10px 0;
    border-bottom: 1px solid red;
  }
  .content-four {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid red;
    line-height: 100px;
  }
  .content-five {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid red;
  }
  .content-five-left {
    width: 275px;
    border-right: 1px solid red;
    float: left;
    height: 40px;
    padding: 10px 0 10px 0;
  }
  .content-five-right {
    width: 275px;
    float: left;
    height: 40px;
    padding: 10px 0 10px 0;
  }
  .content-five-right-two {
    width: 90px;
    float: left;
    height: 40px;
    padding: 10px 0 10px 0;
    border-right: 1px solid red;
  }
  .content-six {
    height: 180px;
    width: 100%;
    border-bottom: 1px solid red;
  }
  .content-seven {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid red;
  }
  .cotent-eight {
    margin-top: 20px;
    font-size: 12px;
    color: red;
  }
  .buttons {
    width: 650px;
    margin: 10px auto;
    margin-top: 30px;
  }
</style>
