<template>
    <section class="auswahl">
      <slot />
    </section>
</template>

<script>  

export default {
    mounted() {

    }   

};  

</script>

<style lang="stylus">

.auswahl
	display grid
	grid-auto-flow dense
	grid-template-columns repeat(4, 1fr)
	grid-template-rows auto
	grid-gap .75rem

	@media (min-width 1200px)
		grid-template-columns repeat(5, 1fr)

	@media (max-width 630px)
		display flex
		flex-direction column

</style>