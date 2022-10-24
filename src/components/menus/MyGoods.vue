<template>
  <h3>操作日志</h3>
  <div class="search-content">
    <a-row type="flex" justify="space-between">
      <a-col style="float:left">
        <!-- date-picker -->
        <a-form-item label="操作时间">
          <div>
            <a-date-picker
              size="middle"
              v-model:value="startTime"
              :disabled-date="disabledStartDate"
              show-today
              format="YYYY-MM-DD"
              placeholder="开始时间"
              style="width: 155px"
            />
            &nbsp;&nbsp;-&nbsp;&nbsp;
            <a-date-picker
              size="middle"
              v-model:value="endTime"
              :disabled-date="disabledEndDate"
              show-today
              format="YYYY-MM-DD"
              placeholder="结束时间"
              style="width: 155px"
            />
          </div> </a-form-item>
      </a-col>
      <!-- search-->
      <a-col style="float:right">
        操作账号
        <a-input
          v-model:value="search"
          placeholder="请输入关键词进行检索"
          :size='small'
          style="width: 260px; margin: 0 10px"
        >
        </a-input>
        <a-button type="primary" @click="searchHandle" :loading="searchLoading">
          <template #icon><SearchOutlined /></template>
          查询
        </a-button>
      </a-col>
    </a-row>
  </div>
  <!-- table -->
  <a-table :dataSource="dataList" :columns="columns" :pagination="pagination" />
</template>
<script>
export default {
  name: "MyGoods",
  data() {
    return {
      // 筛选时间
      startTime: "",
      endTime: "",
      // 搜索
      search: "",
      // 用户列表数据
      currentPage: 1, //当前页
      pageSize: 10, //一页条数
      dataList: [
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
      columns: [
        {
          title: "序号",
          key: "serial",
          // width: 60,
          customRender: function (text) {
            return text.index + 1 + (this.currentPage - 1) * this.pageSize;
          }.bind(this),
        },
        {
          ellipsis: true,
          title: "账号名",
          dataIndex: "accountName",
          key: "accountName",
        },
        {
          ellipsis: true,
          title: "应用端",
          dataIndex: "platform",
          key: "platform",
        },
        {
          ellipsis: true,
          title: "平台功能",
          dataIndex: "platformFunction",
          key: "platformFunction",
        },
        {
          ellipsis: true,
          title: "操作功能",
          dataIndex: "operationFunction",
          key: "operationFunction",
        },
        {
          ellipsis: true,
          title: "操作内容",
          dataIndex: "operationContent",
          key: "operationContent",
        },
        { title: "登陆IP", dataIndex: "loginIp", key: "loginIp" },
        { title: "操作时间", dataIndex: "operationTime", key: "operationTime" },
      ],
      pagination: {
        total: 0,
        current: this.currentPage,
        defaultPageSize: 10,
        showTotal: (total) => `共 ${total} 条数据`,
        showSizeChanger: true,
        pageSizeOptions: ["5", "10", "15", "20"],
        onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize),
      },
    };
  },
};
</script>

<style lang="less">
.search {
  &-content {
    padding: 15px 0 0 15px;
    background: #fff;
    &-search {
      line-height: 40px;
      font-size: 14px;
      text-align: right;
      padding: 20px 0;
    }
  }
}
</style>
