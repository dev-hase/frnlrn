<template>


  <div :class="'item ' + itemSize + ' ' + isClass">
    <slot />
  </div>

</template>


<script>  
export default {
    props: ["itemSize", "itemClass"],

    computed: {
        isClass: function () {
            if (this.itemClass) return this.itemClass
            else return ''
       },
        
    }    

};  

</script>


<style lang="stylus">

.item
	display inline-block
	padding 1rem
	border-radius .25rem
	background-color #444
	color #efefef
	border-top-right-radius .25rem
	border-bottom-right-radius .75rem
	border-top-left-radius .5rem
	border 3px solid #444
	

	h2
		font-family $fontC
		color #efefef
		font-size 7vh
		text-shadow 2px 2px 3px #333

	ul li 
		color #333
		background-color #efefef
		opacity .75
		display inline-block
		padding .2rem .5rem
		border-radius .2rem
		font-weight bolder
		text-transform uppercase

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