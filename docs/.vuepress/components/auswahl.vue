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
	grid-template-columns repeat(9, 1fr)
	grid-template-rows auto
	grid-gap .75rem

	@media (max-width 630px)
		display flex
		flex-direction column

</style>