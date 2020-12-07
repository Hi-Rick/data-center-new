<template>
  <div class="app-container">
    <div class="file-content">
      <el-row>
        <el-col :span="6">
          <div class="left-content">
            <div class="left-title">
              文件夹
            </div>
            <div class="left-detail">
              <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" node-key="id">
                   <span  slot-scope="{ node, data }">
                     <span @click="ListTable(node, data)" style="font-size: 14px"><i class="el-icon-folder-opened icon-style"></i>{{ node.label}}</span>
                   </span>
              </el-tree>
            </div>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="left-title">
            文件
          </div>
          <div class="right-table">
            <el-table
              :data="tableDatas"
              :header-cell-style="{'text-align':'center', 'background-color' : '#EFEFEF'}">
              <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small">
                    下载
                  </el-button>
                </template>
              </el-table-column>
              <el-table-column
                prop="fileName"
                label="文件名"
                align="center">
              </el-table-column>
              <el-table-column
                prop="fileDep"
                label="文档描述"
                align="center">
              </el-table-column>

            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyFile",
    data() {
      return {
        data: [{
          label: '我的目录',
          children: [{
            label: '学习资料（教师）',
            children: [{
              label: '职称评定'
            },{
              label: '备课教学'
            }]
          }, {
            label: '校内规则',
          },{
            label: '教育部文件',
            children: [{
              label: '测试',
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableDatas: [],
        tableData: [
          {
            fileName: '副教授评定流程.txt',
            fileDep: '副教授评定请参看该文件'
          },
          {
            fileName: '高级教师评定.txt',
            fileDep: '高级教师评定请参看该文件'
          },
          {
            fileName: '教师评定规则.txt',
            fileDep: '教师评定请参看该文件'
          },
          {
            fileName: '教授（正）评定流程.txt',
            fileDep: '教授（正）评定请参看该文件'
          },
          {
            fileName: '院长评选流程.txt',
            fileDep: '院长评定请参看该文件'
          },
          {
            fileName: '助教评定流程.txt',
            fileDep: '助教评定请参看该文件'
          },
        ]
      }
    },
    methods: {
      handleNodeClick(data) {
        // console.log(data);
      },
      ListTable(node, data) {
        console.log(node)
        console.log(data)
        if (data.label === '职称评定') {
          this.tableDatas = this.tableData
          console.log(this.tableDatas)
        }
      }
    }
  }
</script>

<style scoped>
  .file-content {
    width: 100%;
    height: 600px;
    background-color: #fff;
    padding: 5px;
  }
  .left-content {
    width: 100%;
    height: 100%;
  }
  .left-title {
    height: 45px;
    line-height: 45px;
    width: 100%;
    text-align: center;
    background-color: #EFEFEF;
    font-size: 18px;
    color: #409EFF;
    font-weight: 700;
    border-bottom: 1px solid #409EFF;
  }
  .left-detail {
    height: 550px;
    border: 1px solid rgba(28,31,33,.1);
  }
  .icon-style {
    color: #FFDA74;
    margin-right: 10px;
  }
  .right-table {
    height: 550px;
  }
</style>
