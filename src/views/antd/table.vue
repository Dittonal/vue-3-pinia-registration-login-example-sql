<template>
  <h1>Antd表格</h1>
  <a-table
  :columns="columns"
  :data-source="data"
></a-table>
</template>

<script>
import axios from "axios";
const request = axios.create();
export default {
  data() {
    return {
      data:[],
      columns:[
        {
        title: '名字',  //标题名字
        dataIndex: 'name',
        },
        {
        title: '价格',  //标题名字
        dataIndex: 'price',
        },
        {
        title: '数量',  //标题名字
        dataIndex: 'number',
        },
        ]
    };
  },
  mounted() {
    this.getData();
  },
  methods:{
    getData(){
      request.get('https://my-json-server.typicode.com/Dittonal/testapi/db')
      .then((res)=>{
        this.data=res.data['goods']
      })
    },
  }
};
</script>

<style></style>
