<template>
  <el-container>
    <el-header style="margin: 0;padding: 0;margin-bottom: 260px">
      <img src="./img/banner3.jpg" height="320px" width="100%">
    </el-header>

    <el-main class="main" style="overflow-y: hidden;">
      <el-row :gutter="20">
        <!--左边-->
        <el-col :span="5">
          <div class="main_left">
            <!--左内容-->
            <dl class="main_left_con">
              <dt>新闻资讯</dt>
              <dd>
                <router-link class="a" to="/news/news_gongshi">公告公示</router-link>
                <span class="el-icon-arrow-right"></span>
              </dd>
              <dd>
                <router-link class="a" to="/news/news_meiti">集团新闻</router-link>
                <span class="el-icon-arrow-right"></span>
              </dd>
              <dd>
                <router-link class="a" to="/news">组织机构</router-link>
                <span class="el-icon-arrow-right"></span>
              </dd>
              <dd>
                <router-link class="a" to="/news">文化理念</router-link>
                <span class="el-icon-arrow-right"></span>
              </dd>
              <dd>
                <router-link class="a" to="/news">发展历程</router-link>
                <span class="el-icon-arrow-right"></span>
              </dd>
            </dl>
          </div>
        </el-col>
        <!--左边-->
        <!--右边-->
        <el-col :span="19">
          <!--子路由-->
          <router-view/>
        </el-col>
        <!--右边-->
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "news.vue"
    }
</script>

<style scoped>
  .main{
    padding: 20px 70px;
    margin-bottom: 40px;
  }
  /*主体左*/
  .main_left{
    background: linear-gradient(#d6d3cc,#f1ece8,#fff);
    border-radius: 5px;
    padding: 15px 30px 0;
    border: 1px solid #c4bbb6;
  }
  /*左内容*/
  dl.main_left_con dt{
    font-size: 19px;
    color: #666;
    font-weight: bold;
    padding-bottom: 13px;
    border-bottom: 2px solid #999;
  }
  dl.main_left_con dd{
    height: 55px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dotted #f1ece8;
  }
  dl.main_left_con .a{
    text-decoration: none;
    color: #444444;
  }
  dl.main_left_con .a:hover{
    color: red;
  }
</style>
