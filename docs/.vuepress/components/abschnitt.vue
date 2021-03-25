<template>

  <section class="abschnitt">
    <slot />
  </section>

</template>


<script>  
export default {
    props: ["infoImg", "secondImg"],

    computed: {
        
    }    

};  

</script>


<style lang="stylus" scoped>


.abschnitt
    scroll-snap-align start
    height calc(100vh - 3.6rem)
    padding 2rem


</style>