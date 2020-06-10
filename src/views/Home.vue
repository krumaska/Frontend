<template>
  <div>
    <Header title="무엇을 찾으시나요?"></Header>
    <router-link :to="{ name: 'Info', params: { id: '교내 기관 안내' } }">
			<MenuBox class="first_box" imgPath="gigan.jpg" textName="교내 기관 안내" ></MenuBox>
		</router-link>
		<router-link :to="{ name: 'Info', params: { id: '학교 주변' } }">
      <MenuBox class="second_box" imgPath="gubean.jpg" textName="학교 주변"></MenuBox>
		</router-link>
		<div OnClick="location.href ='https://hybus.app/#/'">
      <MenuBox class="third_box" imgPath="hybus.jpg" textName="학교 셔틀"></MenuBox>
		</div>
  </div>
</template>

<script>
import Header from "../components/Header";
import MenuBox from "../components/MenuBox";
export default {
  name: "Home",
  components: {
    Header,
    MenuBox
  }
};
</script>
<style scoped>
.first_box {
  z-index: 3;
  line-height: 13em;
}
.second_box {
  top: -40px; z-index: 2;
  line-height: 16em;
}
.third_box {
  top: -80px; z-index: 1; 
  line-height: 16em;
}
</style>