<template>
  <!-- 标题 -->
  <h4 class="text-center">数据管理</h4>

  <!-- 用户列表
  <table
    class="table table-bordered table-striped table-hover"
    style="table-layout: fixed"
  >
    <thead>
      <tr>
        <th>序号</th>
        <th>账号名  </th>
        <th>应用端  </th>
        <th>平台功能</th>
        <th>操作功能</th>
        <th>操作内容</th>
        <th>登陆IP  </th>
        <th>操作时间</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in datalist" :key="item.id">
        <td>{{ i + 1 }}</td>
        <td :title="item.accountName">{{ item.accountName }}</td>
        <td :title="item.platform">{{ item.platform }}</td>
        <td :title="item.platformFunction">{{ item.platformFunction }}</td>
        <td :title="item.operationFunction">{{ item.operationFunction }}</td>
        <td :title="item.operationContent">{{ item.operationContent }}</td>
        <td>{{ item.loginIp }}</td>
        <td>{{ item.operationTime }}</td>
      </tr>
    </tbody>
  </table> -->
  <!-- ele-ui -->
  <div style="table-layout: fixed">
    <el-table :data="datalist.slice((currentPage - 1) * pageSize, currentPage*pageSize)" border style="table-layout: fixed">
      <el-table-column label="序号" align="center">
        <template v-slot:default="scope">
              <span>{{(currentPage - 1) * pageSize + scope.$index + 1}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="accountName" label="账号名" ></el-table-column>
      <el-table-column align="center" prop="platform" label="应用端" ></el-table-column>
      <el-table-column align="center" prop="platformFunction" label="平台功能"></el-table-column>
      <el-table-column align="center" prop="operationFunction" label="操作功能" ></el-table-column>
      <el-table-column align="center" prop="operationContent" label="操作内容" show-overflow-tooltip ></el-table-column>
      <el-table-column align="center" prop="loginIp" label="登陆IP" ></el-table-column>
      <el-table-column align="center" prop="operationTime" label="操作时间"  sortable></el-table-column>
    </el-table>

    <el-pagination align='center' 
   @size-change="handleSizeChange" 
   @current-change="handleCurrentChange"
   :current-page="currentPage" 
   :page-sizes="[1,5,10,20]" 
   :page-size="pageSize"
   layout="total, sizes, prev, pager, next, jumper" :total="datalist.length">
</el-pagination>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MyDatas",
  data() {
    return {
      // 用户列表数据
      currentPage: 1, //当前页
      pageSize: 10, //一页条数
      datalist: [
        {
          accountName: "zhang1",
          platform: "web",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "农户身份证：130133193005060324",
          loginIp: "113.142.79.125",
          operationTime: "2022/10/01 11:44:23",
        },
        {
          accountName: "zhang2",
          platform: "web",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "角色名称：普通用户A",
          loginIp: "113.142.79.125",
          operationTime: "2022/10/02 12:44:23",
        },
        {
          accountName: "zhang3",
          platform: "web",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "投保清单号：342343242323423423",
          loginIp: "113.142.79.125",
          operationTime: "2022/10/03 13:44:23",
        },
        {
          accountName: "zhang4",
          platform: "web",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "地块编号：234234324234242",
          loginIp: "113.142.79.125",
          operationTime: "2022/10/04 14:41:23",
        },
        {
          accountName: "zhang5",
          platform: "web",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "角色名称：普通用户A",
          loginIp: "113.142.79.125",
          operationTime: "2022/10/05 15:42:23",
        },
        {
          accountName: "zhang6",
          platform: "web",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "投保清单号：342343242323423423",
          loginIp: "113.142.79.125",
          operationTime: "2022/10/06 16:43:23",
        },
        {
          accountName: "zhang7",
          platform: "mobile",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "农户身份证：130133193005060324",
          loginIp: "111.142.79.125",
          operationTime: "2022/10/07 17:44:23",
        },
        {
          accountName: "zhang8",
          platform: "mobile",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "角色名称：普通用户A",
          loginIp: "112.142.79.125",
          operationTime: "2022/10/08 18:45:23",
        },
        {
          accountName: "zhang9",
          platform: "mobile",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "投保清单号：342343242323423423",
          loginIp: "113.142.79.125",
          operationTime: "2022/10/09 19:46:23",
        },
        {
          accountName: "zhan1",
          platform: "mobile",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "农户身份证：130133193005060324",
          loginIp: "114.142.79.125",
          operationTime: "2022/10/02 13:47:23",
        },
        {
          accountName: "zhan2",
          platform: "mobile",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "角色名称：普通用户A",
          loginIp: "115.142.79.125",
          operationTime: "2022/10/02 13:48:23",
        },
        {
          accountName: "zhan3",
          platform: "mobile",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "投保清单号：342343242323423423",
          loginIp: "116.142.79.125",
          operationTime: "2022/10/02 13:49:23",
        },
        {
          accountName: "zhan4",
          platform: "mobile",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "地块编号：234234324234242",
          loginIp: "117.142.79.125",
          operationTime: "2022/10/02 13:44:23",
        },
        {
          accountName: "zhan5",
          platform: "mobile",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "角色名称：普通用户A",
          loginIp: "118.142.79.125",
          operationTime: "2022/10/02 13:44:23",
        },
        {
          accountName: "zhan6",
          platform: "web",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "投保清单号：342343242323423423",
          loginIp: "119.142.79.125",
          operationTime: "2022/10/02 13:44:23",
        },
        {
          accountName: "zhan7",
          platform: "web",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "农户身份证：130133193005060324",
          loginIp: "113.142.79.125",
          operationTime: "2022/10/02 13:44:23",
        },
        {
          accountName: "zhan8",
          platform: "web",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "角色名称：普通用户A",
          loginIp: "113.142.79.125",
          operationTime: "2022/10/02 13:44:23",
        },
        {
          accountName: "zhan9",
          platform: "web",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "投保清单号：342343242323423423",
          loginIp: "113.142.79.125",
          operationTime: "2022/10/02 13:44:23",
        },
        {
          accountName: "zhan",
          platform: "web",
          platformFunction: "角色管理",
          operationFunction: "添加保单",
          operationContent: "角色名称：普通用户A",
          loginIp: "113.142.79.125",
          operationTime: "2022/10/02 13:44:23",
        },
      ],
    };
  },
  methods: {
     //每页条数改变时触发 选择一页显示多少行
     handleSizeChange(val) {
         console.log(`每页 ${val} 条`);
         this.currentPage = 1;
         this.pageSize = val;
     },
     //当前页改变时触发 跳转其他页
     handleCurrentChange(val) {
         console.log(`当前页: ${val}`);
         this.currentPage = val;
     },
    getData() {
      var url = "https://my-json-server.typicode.com/Dittonal/testapi/db";
      axios.get(url).then((result) => {});
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.table-tooltip{
    max-width: 200px;
}
.table-style .cell{
    width:200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
