<template>
	<div class="container" >
		<img :src="require(`@/assets/${imgPath}`)">	
		<span class="transparent"></span>
		<span class="text-block">{{ textName }}</span>
	</div>
</template>

<script>
  export default {
    name: "MenuBox",
    props: {
	  textName : String,
	  imgPath : String,
	},
  };
</script>

<style scoped>
  .container {
		overflow: hidden;
		display: flex;
		text-align: center;
		position: relative;
		border-bottom-left-radius: 4em;
		box-shadow: 0px 15px 15px -0.4em grey;
		height: 100%;
	}
	.container img {
		width: 100%;
		/* max-height: initial; */
	}
	.transparent {
		background: #FFFFFF;
		height: 100%;
		width: 100%;
		opacity: 0.65;
		position: absolute;
	}
	.container .text-block {
		position: absolute;
		display: flex;
		left: 10%;
		text-align: center;
		align-items: center;
		
		/* text style */
		color:rgb(65, 75, 75);
		font-weight: bold;
		font-size: 1.5em;
	}
</style>
