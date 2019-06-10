<template>
  <div id="app">
    <div class="hearder_top">
      <el-link :underline="false" class="link">茅台股份官网</el-link> | <el-link :underline="false" class="link">茅台党建</el-link>
    </div>
    <ul class="nav">
      <li><img src="@/components/img/logo.gif"></li>
      <li><router-link class="a" to="/">首页</router-link></li>
      <li><router-link class="a" to="/go">走进茅台</router-link></li>
      <li><router-link class="a" to="/news">新闻资讯</router-link></li>
      <li><router-link class="a" to="/wenhua">文化茅台</router-link></li>
      <li><router-link class="a" to="/brand">品牌战略</router-link></li>
      <li><router-link class="a" to="/shehui">社会责任</router-link></li>
      <li><router-link class="a" to="/jiu">酒之博览</router-link></li>
      <li><router-link class="a" to="/city">茅台商城</router-link></li>
    </ul>
    <router-view/>

    <!--尾部-->
    <ul class="footer">
      <li>
        <!-- 第一行链接-->
        <div style="margin-top: 5px">
          <el-link :underline="false" class="link2">茅台股份官网</el-link> | <el-link :underline="false" class="link2">茅台党建</el-link> |
          <el-link :underline="false" class="link2">茅台股份官网</el-link> | <el-link :underline="false" class="link2">茅台党建</el-link> |
          <el-link :underline="false" class="link2">茅台股份官网</el-link> | <el-link :underline="false" class="link2">茅台党建</el-link>
        </div>
        <!-- 第二行链接-->
        <div>
          <el-link :underline="false" class="link2 special">中国贵州茅台酒厂(集团)有限责任公司  版权所有  2019 </el-link>
          <el-link :underline="false" class="link2"><img src="@/components/img/jin.png" width="15px">贵公网安备 52038202001007号</el-link>
        </div>
      </li>
      <li><img src="@/components/img/footer_logo.png" style="margin-top: 8px"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*头部链接*/
.hearder_top{
  position: absolute;
  top: 15px;
  right: 75px;
  z-index: 99;
}
.hearder_top>.link:hover{
  color: red;
}
/*导航条*/
ul.nav{
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 99;
}
ul.nav>li{
  float: left;
  color: red;
}
ul.nav>li:nth-child(1){
  background: none;
}
ul.nav>li:nth-child(2){
  padding-left: 20px;
}
ul.nav>li:nth-child(9){
  padding-right: 20px;
}
ul.nav>li{
  background: rgba(250,252,253,0.9);
}
ul.nav>li>.a{
  display: inline-block;
  width: 118px;
  height: 70px;
  line-height: 70px;
  text-decoration: none;
  color: #444;
  font-size: 18px;
  font-weight: bold;
  /*margin: 0;*/
}
ul.nav>li>.a:hover{
  background: #b20000;
  color: #fff;
}
/*尾部*/
  .footer{
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    height: 50px;
    background: #181c25;
    text-align: left;
    color: #67999e;
    padding: 0 60px;
  }
  .footer .link2{
    color: #67999e;
  }
  .footer .link2:hover{
    color: #fff;
  }
  .footer .special:hover{
    color: #67999e;
  }
</style>
