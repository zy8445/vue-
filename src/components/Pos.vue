<template>
  <el-container>
    <el-header style="margin: 0;padding: 0;margin-bottom: 470px">
      <!--  banner轮播-->
      <div class="banner">
        <swiper :options="swiperOption" style="margin-top: -2px;">
          <swiper-slide><img src="./img/banner5.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./img/banner4.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./img/banner3.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./img/banner2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./img/banner1.jpg" alt=""></swiper-slide>
          <div class="swiper-pagination banner" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!--  banner轮播-->
    </el-header>

    <el-main style="overflow-y: hidden;">
      <!-- 杂七杂八一排-->
      <ul class="main_news">
        <li><a href="#" title="更多新闻资讯"><img src="./img/new-bg.jpg"></a></li>
        <!-- 新闻轮播-->
        <li class="news_lun_li">
          <swiper class="news_swiper" :options="swiperOptionNews" style="margin-top: -2px;">
            <swiper-slide class="new_slide"><img src="./img/1.jpg" title="茅台集团开会,很多人参加"><p class="animated bounceInDown">茅台集团开会,很多人参加</p></swiper-slide>
            <swiper-slide class="new_slide"><img src="./img/news1.jpg" title="夏永红参加什么会谈"><p class="animated bounceInDown">夏永红参加什么会谈</p></swiper-slide>
            <swiper-slide class="new_slide"><img src="./img/news2.jpg" title="阳光彩虹小白马滴滴答"><p class="animated bounceInDown">阳光彩虹小白马滴滴答</p></swiper-slide>
            <div class="swiper-pagination news_lun" slot="pagination"></div>
          </swiper>
        </li>
        <!-- 新闻轮播-->
        <li>
          <ul class="news_list">
            <li v-for="item in list">
              <span class="el-icon-arrow-right"></span><a href="#">{{item.li}}</a>
            </li>
          </ul>
        </li>
        <!-- 新闻轮播-->
        <li class="one_lun">
          <div class="block" style="width: 355px;height: 160px;">
            <el-carousel height="160px">
              <el-carousel-item class="item" v-for="item in 1" :key="item">

              </el-carousel-item>
            </el-carousel>
          </div>
        </li>
        <li><img src="./img/6.png"></li>
        <li><img src="./img/7.png"></li>
      </ul>
      <!-- 图片一排-->
      <div class="pic_list"><img src="./img/ioco1.png"><span>|</span><img src="./img/ioco2.png"><span>|</span><img src="./img/ioco3.png"><span>|</span><img src="./img/ioco4.png"><span>|</span><img src="./img/ioco5.png"><span>|</span><img src="./img/ioco6.png"></div>
    </el-main>
  </el-container>
</template>

<script>
    export default {
      name: "Pos.vue",
      data() {
        return {
          list:[
            {'li':'茅台集团与浪潮集团达成深入合作共识'},
            {'li':'青年企业家俱乐部一行到茅台集团调研'},
            {'li':'2019中国国际大数据产业博览会在贵阳开幕——茅台以现代科技演绎三大主题'},
            {'li':'夏红民调研茅台时强调：强化监督执纪问责，推动茅台高质量发展'},
            {'li':'首届全国文化茅台体验（展示）研讨会召开：挖掘文化优质资源 推动跨越千亿目标'}

          ],
          //banner轮播
          swiperOption: {
            effect : 'fade',
            loop:true,
            autoplay: { //自动轮播
              //设置为true启动自动切换，并使用默认的切换设置。 默认false
              delay: 2000
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          },
          //新闻轮播
          swiperOptionNews: {
            effect : 'fade',
            loop:true,
            autoplay: { //自动轮播
              //设置为true启动自动切换，并使用默认的切换设置。 默认false
              delay: 2000
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              renderBullet(index, className) {
                return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
              }
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          },
        }
      },
    }
</script>

<style scoped>
  /*新闻*/
  ul.main_news{
    display: flex;
  }
  ul.main_news>li{
    height: 160px;
    line-height: 160px;
    background: #e1d3c8;
    margin-left: 2px;
    cursor: pointer;
  }
  /* news轮播*/
  .news_lun_li{
    width: 200px;
    height: 150px;
  }
  .news_lun_li img{
    width: 200px;
    height: 150px;
    margin: 7px 5px 0;
  }
  /*新闻轮播字*/
  .new_slide{
    height: 163px;
    position: relative;
  }
  .new_slide>p{
    position: absolute;
    bottom: -6px;
    left: 5px;
    width: 195px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    background: rgba(0,0,0,0.8);
    color: #fff;
  }
  /*新闻条*/
  .news_list{
    margin: 0;
    padding: 0 8px;
    height: 100%;
    width: 320px;
    text-align: left;
  }
  .news_list>li{
    height: 20px;
    width: 320px;
    line-height: 20px;
    font-size: 14px;
    color: #5c3a0e;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .news_list>li a{
    text-decoration: none;
    color: #5c3a0e;
  }
  .news_list>li a:hover{
    color: red;
  }
  /*一个假轮播*/
  .el-carousel__item:nth-child(3) {
    background:url("./img/3.jpg");
  }
  /*一排图*/
  .pic_list{
    height: 34px;
    line-height: 34px;
    color: #bea689;
    display: flex;
    padding: 0 30px;
    justify-content: space-around;
    cursor: pointer;
  }
</style>


