<template>

    <full-page>
      <div class="section">
        <slot />
        Section 1
      </div>
      <div class="section">
        Section 2
        <div class="slide">
                <h3>Slide 2.1</h3>
            </div>
            <div class="slide">
                <h3>Slide 2.2</h3>
            </div>
            <div class="slide">
                <h3>Slide 2.3</h3>
        </div>
      </div>
      <div class="section">
        Section 3
      </div>
    </full-page>

</template>

<script>  
export default {
    props: ["infoImg", "secondImg"],

    computed: {
        isSecondImg: function () {
            if (this.secondImg) return true
            else return false
        },
        
    }    

};  
</script>


<style lang="stylus" scoped>

.section
    background red

</style>