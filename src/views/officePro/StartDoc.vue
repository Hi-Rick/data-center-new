<template>
    <div class="app-container">
      <div class="doc-content">
        <div class="doc-title">
          <span>发起公文流程</span>
        </div>
        <div class="card-doc">
          <div class="card-style" @click="gotoPage">
            <div class="card-top">
              公文流程
            </div>
            <div class="card-bottom">
              <div class="triangle-down"></div>
              <div class="card-bottom-text">
                <span>党委发文流程</span>
              </div>
            </div>
          </div>
          <div class="card-style" @click="gotoPage">
            <div class="card-top">
              公文流程
            </div>
            <div class="card-bottom">
              <div class="triangle-down"></div>
              <div class="card-bottom-text">
                <span>学院发文流程</span>
              </div>
            </div>
          </div>
          <div class="card-style" @click="gotoPage">
            <div class="card-top">
              公文流程
            </div>
            <div class="card-bottom">
              <div class="triangle-down"></div>
              <div class="card-bottom-text">
                <span>院长办公会议题审批流程</span>
              </div>
            </div>
          </div>
          <div class="card-style" @click="gotoPage">
            <div class="card-top">
              公文流程
            </div>
            <div class="card-bottom">
              <div class="triangle-down"></div>
              <div class="card-bottom-text">
                <span>合同审批流程</span>
              </div>
            </div>
          </div>
          <div class="card-style" @click="gotoPage">
            <div class="card-top">
              公文流程
            </div>
            <div class="card-bottom">
              <div class="triangle-down"></div>
              <div class="card-bottom-text">
                <span>用印审批流程</span>
              </div>
            </div>
          </div>
          <div class="card-style" @click="gotoPage">
            <div class="card-top">
              公文流程
            </div>
            <div class="card-bottom">
              <div class="triangle-down"></div>
              <div class="card-bottom-text">
                <span>法律咨询登记流程</span>
              </div>
            </div>
          </div>
          <div class="card-style" @click="gotoPage">
            <div class="card-top">
              公文流程
            </div>
            <div class="card-bottom">
              <div class="triangle-down"></div>
              <div class="card-bottom-text">
                <span>报告厅使用流程</span>
              </div>
            </div>
          </div>
          <div class="card-style" @click="gotoPage">
            <div class="card-top">
              公文流程
            </div>
            <div class="card-bottom">
              <div class="triangle-down"></div>
              <div class="card-bottom-text">
                <span>外地市派车单</span>
              </div>
            </div>
          </div>
          <div class="card-style" @click="gotoPage">
            <div class="card-top">
              公文流程
            </div>
            <div class="card-bottom">
              <div class="triangle-down"></div>
              <div class="card-bottom-text">
                <span>租车审批单</span>
              </div>
            </div>
          </div>
          <div class="card-style" @click="gotoPage">
            <div class="card-top">
              公文流程
            </div>
            <div class="card-bottom">
              <div class="triangle-down"></div>
              <div class="card-bottom-text">
                <span>接待审批流程</span>
              </div>
            </div>
          </div>
          <div class="card-style" @click="gotoPage">
            <div class="card-top">
              公文流程
            </div>
            <div class="card-bottom">
              <div class="triangle-down"></div>
              <div class="card-bottom-text">
                <span>请示报告</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "StartDoc",
      methods: {
        gotoPage() {
          alert('发文事项属于党委会和院长办公会议事规则讨论范围的，请先在党委会或院长办公会上会通过后，再开启发文流程。')
          const {href} = this.$router.resolve({
            path: `/DraftPage`
          })
          window.open(href, '_blank')
        }
      }
    }
</script>

<style scoped>
  .doc-content {
    width: 100%;
    height: 600px;
    background-color: #fff;
  }
  .doc-title {
    padding: 10px 20px 10px 20px;
    color: #409EFF;
    font-size: 22px;
    font-weight: bold;
    background-color: #E6E6E6;
  }
  .card-doc {
    padding: 0 30px 30px 30px;
  }
  .card-style {
    width: 158px;
    height: 158px;
    border-radius: 5px;
    margin-left: 30px;
    float: left;
    margin-top: 30px;
    border: 1px solid rgba(28,31,33,.1);
    overflow: hidden;
    cursor: pointer;
  }
  .card-top {
    height: 58px;
    width: 100%;
    text-align: center;
    line-height: 58px;
    color: #F0862C;
    font-size: 18px;
    font-weight: 700;
  }
  .card-bottom {
    height: 100px;
    width: 100%;
    background-color: #36B4FF;
    position: relative;
  }
  .triangle-down {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 16px solid #fff;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .card-bottom-text {
    width: 100%;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>
