import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/Pos'
import go from '@/components/go'
import news from '@/components/news'
import brand from '@/components/brand'
import wenhua from '@/components/wenhua'
import city from '@/components/city'
import shehui from '@/components/shehui'
import jiu from '@/components/jiu'
import jituan from '@/components/jituan'
import lingdao from '@/components/lingdao'
import go_zi from '@/components/go_zi'
import news_zi from '@/components/news_zi'
import news_gongshi from '@/components/news_gongshi'
import news_meiti from '@/components/news_meiti'
import wenhua_zi from '@/components/wenhua_zi'
import wenhua_zuimei from '@/components/wenhua_zuimei'
import wenhua_renwen from '@/components/wenhua_renwen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/go',
      name: 'go',
      component: go,
      children:[
        {path: '',name:'go_zi',component:go_zi},
        {path: 'jituan',name:'jituan',component:jituan},
        {path: 'lingdao',name:'lingdao',component:lingdao}
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      children:[
        {path: '',name:'news_zi',component:news_zi},
        {path: 'news_gongshi',name:'news_gongshi',component:news_gongshi},
        {path: 'news_meiti',name:'news_meiti',component:news_meiti}
      ]
    },
    {
      path: '/wenhua',
      name: 'wenhua',
      component: wenhua,
      children:[
        {path: '',name:'wenhua_zi',component:wenhua_zi},
        {path: 'wenhua_zuimei',name:'wenhua_zuimei',component:wenhua_zuimei},
        {path: 'wenhua_renwen',name:'wenhua_renwen',component:wenhua_renwen}
      ]
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/shehui',
      name: 'shehui',
      component: shehui
    },
    {
      path: '/jiu',
      name: 'jiu',
      component: jiu
    }
  ]
})
