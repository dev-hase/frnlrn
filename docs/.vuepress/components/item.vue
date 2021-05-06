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
	min-height 50vh
	

	h2
		font-family $fontC
		color #efefef
		font-size 7vh
		letter-spacing .2rem
		text-decoration underline
		mix-blend-mode luminosity
		text-shadow -3px -2px 0 #333, 2px -2px 0 #333, -3px 2px 0 #00495a, 2px 2px 0 #00495a, 3px 2px 7px #00495a
		@media (max-width $MQMobile)
			font-size 4.75vh

	ul li 

		color #efefef
		background-color #444
		display inline-block
		min-width 50%
		padding .2rem .5rem
		border-radius .2rem
		font-weight bolder
		text-transform uppercase
		mix-blend-mode luminosity
		font-size 1.15rem



.i-xl
	grid-column-end span 5
	grid-row-end span 4
	@media (max-width 1200px)
		grid-column-end span 4
		grid-column-end span 4

.i-l
	grid-column-end span 3
	grid-row-end span 3
	@media (max-width 1200px)
		grid-column-end span 4
		grid-column-end span 4

.i-m
	grid-column-end span 2
	grid-row-end span 2
	@media (max-width 1200px)
		grid-column-end span 2
		grid-column-end span 4

.i-sm
	grid-column-end span 2
	grid-row-end span 1
	@media (max-width 1200px)
		grid-column-end span 2
		grid-column-end span 2


</style>