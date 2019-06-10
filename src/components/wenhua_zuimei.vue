<template>
  <div class="main_right">
    <!--右头-->
    <div class="right_title">
      <div>
        <h3>醉美茅台</h3>
        <div class="title_a">
          <router-link class="link" to="/">首页</router-link> <span class="el-icon-arrow-right"></span>
          <router-link class="link" to="/wenhua">文化茅台</router-link> <span class="el-icon-arrow-right"></span>
          <router-link class="link" to="/wenhua/wenhua_zuimei">醉美茅台</router-link> <span class="el-icon-arrow-right"></span>
        </div>
      </div>
    </div>
    <!--右内容-->
    <div class="right_con">
      <ul class="news_list">
        <li v-for="newsZi in newsList">
          <div>
            <span class="el-icon-arrow-right"></span> <a href="#">{{newsZi.zi}}</a>
          </div>
          <p>{{newsZi.time}}</p>
        </li>
      </ul>
      <div class="page">
        <button>210条</button>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "wenhua_zuimei.vue",
      data(){
        return{
          newsList:[
            {zi:'茅台财务公司核',time:'2019-01-17'},
            {zi:'贵州茅台',time:'2019-02-18'},
            {zi:'2018年工会',time:'2019-04-19'},
            {zi:'2018年',time:'2019-03-20'},
            {zi:'中国贵州茅',time:'2019-05-21'},
            {zi:'2018年工会艺',time:'2019-06-22'},
            {zi:'茅台财务公',time:'2019-01-17'},
            {zi:'贵州茅台',time:'2019-02-18'},
            {zi:'茅台财务公司核',time:'2019-01-17'},
            {zi:'贵州茅台',time:'2019-02-18'},
            {zi:'2018年工会',time:'2019-04-19'},
            {zi:'2018年',time:'2019-03-20'},
            {zi:'中国贵州茅',time:'2019-05-21'},
            {zi:'2018年工会艺',time:'2019-06-22'},
            {zi:'茅台财务公',time:'2019-01-17'},
            {zi:'贵州茅台',time:'2019-02-18'},
            {zi:'茅台财务公司核',time:'2019-01-17'},
            {zi:'贵州茅台',time:'2019-02-18'},
            {zi:'2018年工会',time:'2019-04-19'},
            {zi:'2018年',time:'2019-03-20'},
            {zi:'中国贵州茅',time:'2019-05-21'},
            {zi:'2018年工会艺',time:'2019-06-22'},
            {zi:'茅台财务公',time:'2019-01-17'},
            {zi:'贵州茅台',time:'2019-02-18'},
          ],
        }
      }
    }
</script>

<style scoped>
  /*主体右*/
  .main_right{
    border: 1px solid #c4bbb6;
    border-radius: 5px;
  }
  /*右头*/
  .right_title{
    color: #666;
    height: 90px;
    margin: 0;
    padding: 10px 50px 0;
    background: linear-gradient(#d8d8d8,#fff);
  }
  .right_title>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #c4bbb6;
  }
  .right_title>h2{
    margin-top: 5px;
  }
  .title_a .link{
    font-size: 14px;
    color: #444444;
    text-decoration: none;
  }
  .title_a .link:hover{
    color: red;
  }
  /*右内容*/
  .right_con{
    padding: 0 50px 0 5px;
    margin-top: -12px;
    background: #f3f3f3;
  }
  /*新闻条*/
  .news_list>li{
    height: 45px;
    border-bottom: 1px dotted #cccccc ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
  }
  .news_list>li a{
    text-decoration: none;
    color: #5c3a0e;
  }
  .news_list>li a:hover{
    color: red;
  }
  /*分页*/
  .page{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0 40px;
  }
  .page button{
    width: 55px;
    height: 30px;
    background: #22a9ff;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }
</style>
