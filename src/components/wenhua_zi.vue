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
    <!--茅台视频-->
    <ul class="two video">
      <!--左栏-->
      <li class="one_box">
        <!--栏标题-->
        <div class="lan_title">
          <span style="font-size: 16px">茅台视频</span>
          <router-link class="a el-icon-d-arrow-right" to="/news/news_gongshi">更多</router-link>
        </div>
        <!--栏内容-->
        <div class="lan_con">
          <ul class="video_ul">
            <li class="video_li" v-for="videoList in video">
              <img :src="videoList.img">
              <a href="#">{{videoList.name}}</a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
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
        name: "wenhua_zi.vue",
      data(){
        return{
          newsList:[
            {zi:'茅台财务公司'},
            {zi:'2018年工会艺术团'},
            {zi:'打工行年工会'},
            {zi:'茅台财务'},
            {zi:'2018年工会'},
            {zi:'大开关年'}
          ],
          newsList2:[
            {zi:'茅台财务公司'},
            {zi:'2018年工会艺术团'},
            {zi:'打工行年工会'},
            {zi:'茅台财务'},
            {zi:'2018年工会'},
            {zi:'大开关年'}
          ],
          video:[
            {img:'http://www.china-moutai.com/uploadfile/2015/1231/20151231104724738.jpg',name:'茅台名字'},
            {img:'http://www.china-moutai.com/uploadfile/2018/0927/20180927113941725.jpg',name:'茅台名字'},
            {img:'http://www.china-moutai.com/uploadfile/2015/1231/20151231104632786.jpg',name:'茅台名字'},
            {img:'http://www.china-moutai.com/uploadfile/2015/1231/20151231104645766.jpg',name:'茅台名字'},
            {img:'http://www.china-moutai.com/uploadfile/2018/0927/20180927114003809.jpg',name:'茅台名字'},
            {img:'http://www.china-moutai.com/uploadfile/2015/1226/20151226034933693.jpg',name:'茅台名字'},
          ]
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
  /*茅台视频*/
  .video>.one_box{
    width: 100%;
    margin-top: 20px;
  }
  .video_ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0;
    padding: 25px 20px 0;
  }
  .video_li{
    width: 290px;
    height: 250px;
    display: flex;
    margin-bottom: 10px;
    flex-direction: column;
    border: 1px solid #e3e3e3;
    align-items: center;
  }
  .video_li a{
    display: block;
    margin-top: 12px;
  }
</style>
