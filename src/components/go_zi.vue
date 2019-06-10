<template>
  <div class="main_right">
    <!--右头-->
    <div class="right_title"></div>
    <!--右内容-->
    <div class="right_con">
      <img src="./img/jianjie.jpg">
    </div>
  </div>
</template>

<script>
    export default {
        name: "go_zi.vue"
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
    height: 100px;
    margin: 0;
    background: linear-gradient(#d8d8d8,#fff);
  }
  /*右内容*/
  .right_con{
    padding: 20px 0 40px;
    background: #f3f3f3;

  }
</style>
