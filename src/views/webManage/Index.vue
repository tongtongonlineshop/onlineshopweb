<!-- 商品首页 -->
<template>
  <div>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#1a472a"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">商品首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">商品类型</template>
        <el-menu-item index="2-1">电子</el-menu-item>
        <el-menu-item index="2-2">美食</el-menu-item>
        <el-menu-item index="2-3">护肤</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">居家日用</template>
          <el-menu-item index="2-4-1">毛巾</el-menu-item>
          <el-menu-item index="2-4-2">牙刷</el-menu-item>
          <el-menu-item index="2-4-3">牙膏</el-menu-item>
        </el-submenu>
      </el-submenu>
      <!-- disabled禁用标签 -->
      <el-menu-item index="3">联系我们</el-menu-item>
      <el-menu-item index="4">关于我们</el-menu-item>
      <el-menu-item index="5">
        <a href="#" target="_blank">商家登录</a>
      </el-menu-item>
      <el-menu-item index="6" @click.native="$router.push({name:'Cart'})">购物车</el-menu-item>      
      <el-menu-item index="7" @click.native="$router.push({name:'Order'})">我的订单</el-menu-item>         
      <el-menu-item index="7" @click.native="$router.push({name:'Order1'})">我的订单</el-menu-item>
    </el-menu>
    <!-- 轮播图 -->
    <div class="box">
      <el-carousel height="450px">
        <el-carousel-item v-for="item in carouselList" :key="item.id">
          <h1 class="small">{{ item.cardesc }}</h1>
          <el-image
            style="width: 790px; height:340px"
            :src="serverImageUrl+'carousel/'+item.imgpath"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 商品列表 ，每一列显示3个-->
    <div class="goodsLists">
      <el-row :gutter="20">
        <el-col :span="8" v-for="item in goodsList" :key="item.id">
          <div class="item">
            <el-image
              style="width: 350px; height: 350px;"
              :src="serverImageUrl+'goods/'+item.imgpath"
            ></el-image>
            <h3>{{item.name}}</h3>
            <p>{{item.goodsdesc}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { serverApiUrl } from "@/config/apiUrl";
import { goods } from "@/api/goodsManage/list";
import { carouselList } from "@/api/carouselManage/carousel";
export default {
  data() {
    return {
      serverImageUrl: serverApiUrl + "/upload/",
      activeIndex2: "1",
      //轮播图
      carouselList: [],
      // 商品信息
      goodsList: [],
      pageNo: 1,
      pageSize: 9
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      carouselList()
        .then(r => {
          this.carouselList = r;
        })
        .catch(() => {});
      goods({ pageNo: this.pageNo, pageSize: this.pageSize })
        .then(r => {
          this.goodsList = r.list;
        })
        .catch(() => {});
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.box {
  text-align: center;
  padding: 30px;
  background: #3b734f;
}
.goodsLists {
  margin: 30px 10px;
  text-align: center;
}
.box h1 {
  color: #ffffff;
  margin-bottom: 20px;
}
.item {
  height: 500px;
}
</style>
