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
	box-shadow 1px 2px 2px #222
	
	min-height 20rem
	padding 2rem
	@media (max-width 800px)
		min-height 35vh

	h2
		font-family $fontC
		color #ffffa0
		background-color $accentColor
		display inline-block
		padding 0.25rem .5rem
		font-size 3.5rem

		letter-spacing .2rem
		//text-decoration underline
		//mix-blend-mode hard-light
		text-shadow -3px -2px 0 #333, 2px -2px 0 #333, -3px 2px 0 #00495a, 2px 2px 0 #00495a, 3px 2px 7px #00495a
		filter drop-shadow(3px 2px 2px #333)
		transform rotate(-1.2deg)
		margin-bottom 6rem

		@media (orientation: portrait)
			font-size 5vw

		@media (orientation: portrait) and (max-width 640px)
			font-size 9vw
			margin-bottom 2rem

		@media (orientation: landscape)
			font-size 6.9vh 	
				


	ul li 

		color #efefef
		background-color #444
		display inline-block
		min-width 50%
		padding .2rem .5rem
		border-radius .2rem
		font-weight bolder
		text-transform uppercase
		mix-blend-mode hard-light
		font-size 1.15rem



.i-xl
	grid-column-end span 5
	grid-row-end span 4
	@media (max-width 1200px)
		grid-column-end span 4

.i-l
	grid-column-end span 3
	grid-row-end span 3
	@media (max-width 1200px)
		grid-column-end span 4

.i-m
	grid-column-end span 2
	grid-row-end span 2
	@media (min-width 1200px)
		grid-column-end span 2.5

.i-sm
	grid-column-end span 2
	grid-row-end span 1
	@media (max-width 1200px)
		grid-column-end span 2


</style>