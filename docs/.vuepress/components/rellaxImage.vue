<template>
    <figure class="rellaxImage">
        <img v-rellax="{ speed: 1 }" class="rellaxBgImage" :src="imgBg" ></img>
        <img v-rellax="{ speed: -3 }" class="rellaxFrontImage" :src="imgFront" ></img>

    </figure>    
</template>

<script>  
export default {
    props: ["imgBg", "imgFront"],
    mounted() {
    },

    computed: {
        startAt: function () {
            if (this.start) return this.start.replace (/^/,'&start=')
            else return ''
        },
        
    }

};  
</script>

<style lang="stylus" scoped>   

.rellaxImage
    position relative

    overflow hidden
    height 80vh
    box-sizing border-box
    margin -.05rem
    background #333
    border 4px solid #333

    border-image-slice 45 38 36 56 
    border-image-width 5px 5px 5px 5px
    border-image-outset 3px 3px 3px 3px
    border-image-repeat stretch stretch 
    border-image-source url('/img/frame.png')

    -webkit-border-image-slice 45 38 36 56 
    -webkit-border-image-width 5px 5px 5px 5px 
    -webkit-border-image-outset 3px 3px 3px 3px
    -webkit-border-image-repeat stretch stretch 
    -webkit-border-image-source url('/img/frame.png') 


    @media (max-width 820px)
        height 50vh

    .rellaxBgImage
        position absolute
        top -2rem
        left 0
        width 100%
        height 120%
        object-fit cover
        border none

    .rellaxFrontImage
        position absolute
        bottom -1rem
        left 0
        width 100%
        max-height 95%
        object-fit contain
        border none

        

</style>
