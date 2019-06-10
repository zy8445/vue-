<template>
  <div class="main">
    <!--两栏公告-->
    <ul class="two">
      <!--左栏-->
      <li class="one_box">
        <!--栏标题-->
        <div class="lan_title">
          <span style="font-size: 16px">公告公示</span>
          <router-link class="a el-icon-d-arrow-right" to="/news/news_gongshi">更多</router-link>
        </div>
        <!--栏内容-->
        <div class="lan_con">
          <ul class="news_list">
            <li v-for="newsZi in newsList">
              <span class="el-icon-arrow-right"></span> <a href="#">{{newsZi.zi}}</a>
            </li>
          </ul>
        </div>
      </li>
      <!--右栏-->
      <li class="one_box">
        <!--栏标题-->
        <div class="lan_title">
          <span style="font-size: 16px">集团新闻</span>
          <router-link class="a el-icon-d-arrow-right" to="/news/news_meiti">更多</router-link>
        </div>
        <!--栏内容-->
        <div class="lan_con">
          <ul class="news_list">
            <li v-for="newsZi2 in newsList2">
              <span class="el-icon-arrow-right"></span> <a href="#">{{newsZi2.zi}}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <!--两栏公告-->
    <!--一张广告-->
    <div class="one_pic"><img src="./img/gonggao.jpg" alt=""></div>
    <!--两栏公告-->
    <ul class="two">
      <!--左栏-->
      <li class="one_box">
        <!--栏标题-->
        <div class="lan_title">
          <span style="font-size: 16px">招聘公告</span>
          <a href="#" class="el-icon-d-arrow-right">更多</a>
        </div>
        <!--栏内容-->
        <div class="lan_con">
          <ul class="news_list">
            <li v-for="newsZi in newsList">
              <span class="el-icon-arrow-right"></span> <a href="#">{{newsZi.zi}}</a>
            </li>
          </ul>
        </div>
      </li>
      <!--右栏-->
      <li class="one_box">
        <!--栏标题-->
        <div class="lan_title">
          <span style="font-size: 16px">媒体聚焦</span>
          <a href="#" class="el-icon-d-arrow-right">更多</a>
        </div>
        <!--栏内容-->
        <div class="lan_con">
          <ul class="news_list">
            <li v-for="newsZi2 in newsList2">
              <span class="el-icon-arrow-right"></span> <a href="#">{{newsZi2.zi}}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <!--两栏公告-->
  </div>
</template>

<script>
    export default {
      name: "news_zi.vue",
      data(){
        return{
          newsList:[
            {zi:'茅台财务公司核心业务系统升级建设项目拟采用单一来源采购的公示'},
            {zi:'2018年工会艺术团招聘拟录用人员公示'},
            {zi:'2018年工会艺术团招聘参加体检人员和综合成绩公示'},
            {zi:'茅台财务公司核心业务系统升级建设项目拟采用单一来源采购的公示'},
            {zi:'2018年工会艺术团招聘拟录用人员公示'},
            {zi:'2018年工会艺术团招聘参加体检人员和综合成绩公示'}
          ],
          newsList2:[
            {zi:'18 块展板 18 个里程碑 茅台 18 年的辉煌成就'},
            {zi:'2018年工会艺术团招聘拟录用人员公示'},
            {zi:'赖茅凝聚中国羽球力量 壮行国羽苏迪曼杯决赛征程'},
            {zi:'茅台财务公司核心业务系统升级建设项目拟采用单一来源采购的公示'},
            {zi:'茅台集团与浪潮集团达成深入合作共识'},
            {zi:'2018年工会艺术团招聘参加体检人员和综合成绩公示'}
          ],
        }
      }
    }
</script>

<style scoped>
.main{
  margin: 0;
  padding: 0;
}
.main a{
  text-decoration: none;
  color: #5c3a0e;
}
.main a:hover{
  color: red;
}
/*两个公告栏*/
.two{
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
/*一栏*/
.two>li{
  background: pink;
  width: 465px;
  border: 1px solid #c4bbb6;
  border-radius: 5px;
  background: linear-gradient(#d8d8d8,#fff,#fff,#fff);
}
.lan_title{
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #c4bbb6;
  font-size: 12px;
}
/*栏内容*/
.lan_con{
  padding: 15px 0 35px;
}
.news_list{
  text-align: left;
  padding: 0 20px;
}
.news_list>li{
  height: 35px;
  line-height: 35px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  border-bottom: 1px dotted #d5d5d5;
}
/*一张广告*/
  .one_pic{
    border: 1px solid #d5d5d5;
    padding: 1px;
    margin: 20px 0;
  }
</style>

