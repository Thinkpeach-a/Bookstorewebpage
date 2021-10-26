<template>
    <div class="app">
      <h1>购物车</h1>

      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            fixed
            prop="date"
            label="日期"
            width="150">
        </el-table-column>
        <el-table-column
            prop="name"
            label="书名"
            width="200">
        </el-table-column>
        <el-table-column
            prop="province"
            label="作者"
            width="200">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址"
            width="300">
        </el-table-column>
        <el-table-column
            prop="zip"
            label="邮编"
            width="120">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="120">
          <template slot-scope="scope">
            <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small">
              购买
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: "Shop",
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      tableData: [{
        date: '2021-08-13',
        name: 'Python编程 从入门到实践 第2版（百万册纪念版',
        province: '[美]埃里克・马瑟斯（Eric Matthes）',
        address: '湖北武汉江夏区光谷大道77号',
        zip: 421000
      }]
    }
  }
}
</script>

<style scoped>
.app{
  height: 70vh;
}
</style>
