<template>
  <h4 class="text-center">Map管理</h4>

  <div class="map-page-container">
    <div class="contain">
      <el-amap :center="center" :zoom="zoom" @init="init">
        <el-amap-layer-traffic :visible="visible"></el-amap-layer-traffic>
        <el-amap-control-scale :visible="visible"></el-amap-control-scale>
      </el-amap>
    </div>
  </div>

  <button class="btn btn-primary" type="submit" @click="add">添加标号</button>
  <button @click="switchVisible()">{{ visible ? "隐藏" : "显示" }}</button>

  <!-- 添加数据 -->
  <div class="card">
    <h5 class="card-header">数据添加</h5>
    <div class="card-body">
      <!--  添加表单-->
      <form class="form-inline" @submit.prevent>
        <div class="input-group mb-2 mr-sm-2">
          <div class="input-group-prepend">
            <div class="input-group-text">数据点</div>
          </div>
          <!-- txt-inputbox -->
          <input
            type="text"
            class="form-control"
            v-model.trim="brandname"
            @keyup.esc="brandname = ''"
          />
        </div>
        <!-- submit button -->
        <button type="submit" class="btn btn-primary mb-2" @click="addNewBrand">
          添加标号
        </button>
      </form>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>brand_name</th>
          <th>state</th>
          <th>create_time</th>
          <th>operation</th>
        </tr>
      </thead>
      <tbody>
        <!-- 循环表格 -->
        <tr v-for="(item, index) in brandlist" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.company }}</td>
          <td>
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                :id="item.id"
                v-model="item.state"
              />
              <label
                v-if="item.state"
                class="custom-control-label"
                :for="item.id"
                >已开启</label
              >
              <label v-else class="custom-control-label" :for="item.id"
                >已禁用</label
              >
            </div>
          </td>
          <td>{{ dateFormat(item.addtime) }}</td>
          <td>
            <a href="#" @click.prevent="removeBrand(item.id)">delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      brandlist: [
        { id: 1, company: "东风", state: false, addtime: new Date() },
        { id: 2, company: "westwind", state: true, addtime: new Date() },
        { id: 3, company: "northwind", state: false, addtime: new Date() },
      ],
      zoom: 12,
      center: [121.59996, 31.197646],
      map: null,
      visible: true,
    };
  },

  methods: {
    init(map) {
      const marker = new AMap.Marker({
        position: [121.59996, 31.197646],
      });
      map.add(marker);
      this.map = map;
    },
    add() {
      const marker = new AMap.Marker({
        position: [121.59996, 31.177646],
      });
      this.map.add(marker);
    },
    switchVisible() {
      this.visible = !this.visible;
    },
    removeBrand(id) {
      this.brandlist = this.brandlist.filter((x) => x.id != id);
    },
    addNewBrand() {
      if (!this.brandname) return alert("company should not be none! ");

      this.brandlist.push({
        id: this.nextId,
        company: this.brandname,
        state: true,
        addtime: new Date(),
      });
      this.brandname = "";
      this.nextId++;
    },
    dateFormat(dtstr) {
      const dt = new Date(dtstr);
      const y = dt.getFullYear();
      const m = padZero(dt.getMonth() + 1);
      const d = padZero(dt.getDate());
      const hh = padZero(dt.getHours());
      const mm = padZero(dt.getMinutes());
      const ss = padZero(dt.getSeconds());
      return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
    },
  },
});
function padZero(n) {
  return n > 9 ? n : "0" + n;
}
// setup 写法
// import { ref } from "vue";
//     const zoom = ref(12);
//     const center = ref([121.59996, 31.197646]);
//     let map = null;
//     const init = (e) => {
//       const marker = new AMap.Marker({
//         position: [121.59996, 31.197646],
//       });
//       e.add(marker);
//       map = e;
//       console.log("map init: ", map);
//     };
//     const add = () => {
//       const marker = new AMap.Marker({
//         position: [121.59996, 31.177646],
//       });
//       map.add(marker);
//     };
</script>

<style lang="less" scoped>
.contain {
  width: 100%;
  height: 300px;
}
</style>
