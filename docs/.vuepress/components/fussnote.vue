<template>
    <div class="fussnote">
     
        <span class="logoDesc">
            <span class="frnlrnFont">frn</span>
            <span class="frnlrnFont">lrn.de</span>
             | 
            <span class="fussnoteB">Wiki für Fahranfänger</span>
        </span>   

    </div>    
</template>

<style lang="stylus" scoped>

.fussnote
    display flex
    align-items center
    justify-content space-around
    margin-top 3.5rem
    margin-bottom -1.5rem

.logoDesc
    margin 0 1.5rem
    font-size 1rem
    @media (max-width $MQMobileNarrow)
        display none

.frnlrnFont
    display inline-block
    font-family $fontB
    font-weight normal
    line-height 1.5

.frnlrnFont:nth-of-type(2)::first-letter
    text-transform capitalize
    margin-left -.4rem
    letter-spacing 0
    font-size 1.5em

.frnlrnFont::first-letter
    font-size 2em
    letter-spacing -.15rem
    
.fussnoteB
    text-transform uppercase
    font-weight 300

</style>