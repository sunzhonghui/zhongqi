<template>
  <div class="box" :style="{background:background}">
    <div class="box_1 flex-row">
      <div class="logo">
        <router-link to="/" class="text_1">Zhongqi</router-link>
      </div>
      <div class="menu">
        <div class="text-wrapper_1">
          <router-link  class="text_4" to="/">首页｜HOME</router-link>
        </div>
        <div class="text-wrapper_1">
          <router-link class="text_4" to="/work">项目｜WORK</router-link>
        </div>
        <div class="text-wrapper_1">
          <router-link class="text_4" to="/article">知识｜ARTICLE</router-link>
        </div>
        <div class="text-wrapper_1">
          <router-link class="text_4" to="/me">关于我｜ME</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyMenu",
  props: {
    background:{
      type:String,
      default: 'rgba(242, 245, 250, 1)'
    }
  }
}
</script>

<style scoped>
.box {
}

.box_1 {
  margin: 0 auto;
  width: 1090px;
  height: 96px;
  justify-content: space-between;
  font-family: DINPro-Regular;
}
.logo {
  margin-left: 35px;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.menu {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.text_1 {
  width: 98px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 24px;
  letter-spacing: 1.600000023841858px;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}


.text-wrapper_1 {
  width: 160px;
  height: 90%;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.text-wrapper_1:hover {
  box-shadow: 0px 0px 8px 0px rgba(227, 232, 242, 0.96);
}

.text_4 {
  color: rgba(23, 53, 103, 1);
  font-size: 16px;
}
</style>
