<template>

  <div :class="'item ' + itemSize ">
    <slot />
  </div>

</template>


<script>  
export default {
    props: ["itemSize"],

    computed: {
        
    }    

};  

</script>


<style lang="stylus">

.item
	padding 1rem
	border-radius .25rem
	background-color white
	border-top-right-radius .25rem
	border-bottom-right-radius .75rem
	border-top-left-radius .5rem
	border 3px solid #444
	background-image url(/img/paper.png)

	h2
		//font-family $fontC

.i-xl
	grid-column-end span 9
	grid-row-end span 9


.i-l
	grid-column-end span 6
	grid-row-end span 6

.i-m
	grid-column-end span 3
	grid-row-end span 5

.i-sm
	grid-column-end span 2
	grid-row-end span 2


</style>