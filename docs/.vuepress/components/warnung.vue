<template>
      <div>


      </div>  
</template>

<script>
export default {
	props: ["nachricht", "nTitel", "nTyp"],
    mounted() {
        //this.$alert(this.nachricht, this.nTitel, 'warning');
        this.$fire({
		  title: this.nTitel,
		  html: this.nachricht,
		  type: this.nTyp,
		  background: '#efefef',
		  confirmButtonColor: '#8cce82',
		})
    },

};
</script>

<style lang="stylus">


</style>