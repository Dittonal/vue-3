<template>
  <!-- 标题 -->
  <h4 class="text-center">数据管理</h4>

  <!-- 用户列表 -->
  <table class="table table-bordered table-striped table-hover" style='table-layout:fixed'>
    <thead>
      <tr>
        <th>序号</th>
        <th>账号名</th>
        <th>应用端</th>
        <th>平台功能</th>
        <th>操作功能</th>
        <th>操作内容</th>
        <th>登陆IP</th>
        <th>操作时间</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in datalist" :key="item.id">
        <td >{{ i + 1 }}</td>
        <td >{{ item.accountName }}</td>
        <td >{{ item.platform }}</td>
        <td >{{ item.platformFunction }}</td>
        <td >{{item.operationFunction}}</td>
        <td :title="item.operationContent">{{item.operationContent}}</td>
        <td >{{item.loginIp}}</td>
        <td >{{item.operationTime}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: 'MyDatas',
  data() {
    return {
      // 用户列表数据
      datalist:[{"accountName":"zhang1","platform":"web","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"农户身份证：130133193005060324","loginIp":"113.142.79.125","operationTime":"2022/10/01 11:44:23"},
    {"accountName":"zhang2","platform":"web","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"角色名称：普通用户A","loginIp":"113.142.79.125","operationTime":"2022/10/02 12:44:23"},
    {"accountName":"zhang3","platform":"web","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"投保清单号：342343242323423423","loginIp":"113.142.79.125","operationTime":"2022/10/03 13:44:23"},
    {"accountName":"zhang4","platform":"web","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"地块编号：234234324234242","loginIp":"113.142.79.125","operationTime":"2022/10/04 14:41:23"},
    {"accountName":"zhang5","platform":"web","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"角色名称：普通用户A","loginIp":"113.142.79.125","operationTime":"2022/10/05 15:42:23"},
    {"accountName":"zhang6","platform":"web","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"投保清单号：342343242323423423","loginIp":"113.142.79.125","operationTime":"2022/10/06 16:43:23"},
    {"accountName":"zhang7","platform":"mobile","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"农户身份证：130133193005060324","loginIp":"111.142.79.125","operationTime":"2022/10/07 17:44:23"},
    {"accountName":"zhang8","platform":"mobile","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"角色名称：普通用户A","loginIp":"112.142.79.125","operationTime":"2022/10/08 18:45:23"},
    {"accountName":"zhang9","platform":"mobile","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"投保清单号：342343242323423423","loginIp":"113.142.79.125","operationTime":"2022/10/09 19:46:23"},
    {"accountName":"zhan1","platform":"mobile","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"农户身份证：130133193005060324","loginIp":"114.142.79.125","operationTime":"2022/10/02 13:47:23"},
    {"accountName":"zhan2","platform":"mobile","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"角色名称：普通用户A","loginIp":"115.142.79.125","operationTime":"2022/10/02 13:48:23"},
    {"accountName":"zhan3","platform":"mobile","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"投保清单号：342343242323423423","loginIp":"116.142.79.125","operationTime":"2022/10/02 13:49:23"},
    {"accountName":"zhan4","platform":"mobile","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"地块编号：234234324234242","loginIp":"117.142.79.125","operationTime":"2022/10/02 13:44:23"},
    {"accountName":"zhan5","platform":"mobile","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"角色名称：普通用户A","loginIp":"118.142.79.125","operationTime":"2022/10/02 13:44:23"},
    {"accountName":"zhan6","platform":"web","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"投保清单号：342343242323423423","loginIp":"119.142.79.125","operationTime":"2022/10/02 13:44:23"},
    {"accountName":"zhan7","platform":"web","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"农户身份证：130133193005060324","loginIp":"113.142.79.125","operationTime":"2022/10/02 13:44:23"},
    {"accountName":"zhan8","platform":"web","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"角色名称：普通用户A","loginIp":"113.142.79.125","operationTime":"2022/10/02 13:44:23"},
    {"accountName":"zhan9","platform":"web","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"投保清单号：342343242323423423","loginIp":"113.142.79.125","operationTime":"2022/10/02 13:44:23"},
    {"accountName":"zhan","platform":"web","platformFunction":"角色管理","operationFunction":"添加保单","operationContent":"角色名称：普通用户A","loginIp":"113.142.79.125","operationTime":"2022/10/02 13:44:23"}
    ],
    }
  },
  methods:{
    getData(){
      var url='https://my-json-server.typicode.com/Dittonal/testapi/db'
      axios
      .get(url)
      .then(
        (result)=>{

        }
      )
    },
  },
  created(){
    this.getData()
  }
}
</script>

<style lang="less" scoped>
tr td{
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
</style>
