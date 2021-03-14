<template>
    <div class="fussnote">
     
        <span class="logoDesc">
            <span class="frnlrnfooter">
            <span class="frnlrnFont"><span class="firstLetter">f</span>rn<span class="secondLetter">L</span>rn.de</span>
            </span>
            <span class="fussnoteB">| Wiki für Fahranfänger</span>
        </span>  

    </div>    
</template>

<style lang="stylus" scoped>

.fussnote
    display flex
    align-items center
    justify-content space-around
    margin-top 65vh
    //margin-bottom -1.5rem

    @media (max-width $MQMobile)
        margin-top 75vh

.logoDesc
    margin 0 1.5rem
    font-size 2rem
    pointer-events none
    
    @media (max-width $MQMobile)
        font-size 1.25rem

.frnlrnfooter
    transform skew(358deg, 358deg)
    display inline-block
    color #fff

.frnlrnFont
    display inline-block
    font-family $fontB
    font-weight normal
    line-height 1.5
    margin-left -.5rem !important



.secondLetter
    text-transform capitalize
    //margin-left .2rem
    letter-spacing 0
    font-size 1.5em

.firstLetter
    font-size 2em
    letter-spacing -.15rem
    
.fussnoteB
    text-transform uppercase
    font-weight 300
    color #eee

</style>