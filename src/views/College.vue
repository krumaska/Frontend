<template>
  <div>
    <Header title="어떤 대학인가요?"></Header>
    <div :key="idx" v-for="(list, idx) in list">
        <router-link :to="{ name: 'Info', params: { id: list } }">
            <MenuBox :class="'box_'+(idx+1)" imgPath="gigan.jpg" :textName="list"></MenuBox>
        </router-link>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import MenuBox from "../components/MenuBox";
export default {
  name: "College",
  data :function(){
      return {
          list:['융합산업대학원','공학대학','소프트웨어융합대학','약학대학','과학기술융합대학','국제문화대학','언론정보대학','경상대학','디자인대학','예체능대학','부총장실','교무처','학생처','사회교육원','국제교육원','창의인재원','총학생회']
      };
  },
  components: {
    Header,
    MenuBox
  }
  
}
</script>
<style scoped>
.box_1 {
  z-index: 17;
  line-height: 13em;
}
.box_2 {
  top: -40px; z-index: 16;
  line-height: 16em;
}
.box_3 {
  top: -80px; z-index: 15; 
  line-height: 16em;
}
.box_4 {
  top: -120px; z-index: 14;
  line-height: 16em;
}
.box_5 {
  top: -160px;  z-index: 13;
  line-height: 16em;
}
.box_6 {
  top: -200px; z-index: 12; 
  line-height: 16em;
}
.box_7 {
  top: -240px; z-index: 11;
  line-height: 16em;
}
.box_8 {
  top: -260px; z-index: 10;
  line-height: 16em;
}
.box_9 {
  top: -300px; z-index: 9; 
  line-height: 16em;
}
.box_10 {
  top: -340px; z-index: 8;
  line-height: 16em;
}
.box_11 {
  top: -360px; z-index: 7;
  line-height: 16em;
}
.box_12 {
  top: -400px; z-index: 6; 
  line-height: 16em;
}
.box_13 {
  top: -440px; z-index: 5;
  line-height: 16em;
}
.box_14 {
  top: -480px; z-index: 4;
  line-height: 16em;
}
.box_15 {
  top: -520px; z-index: 3; 
  line-height: 16em;
}
.box_16 {
  top: -560px; z-index: 2;
  line-height: 16em;
}
.box_17 {
  top: -600px; z-index: 1;
  line-height: 16em;
}
</style>