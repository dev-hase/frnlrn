<template>

    <section class="wikiLinks">
        <div class="wikiLinkBlock collapsed wikiKata">
            <h2 v-on:click='changeSize'>Kata</h2>
            <showPath path="/kata/" />
        </div>
        <div class="wikiLinkBlock collapsed wikiKumite">
            <h2 v-on:click='changeSize'>Kumite</h2>
            <showPath path="/kumite/" />
        </div>
        <div class="wikiLinkBlock collapsed wikiGrundlagen">
            <h2 v-on:click='changeSize'>Grundlagen</h2>
            <showPath path="/grundlagen/" />
        </div>
        <div class="wikiLinkBlock collapsed wikiPruefung">
            <h2 v-on:click='changeSize'>Prüfungsordnung</h2>    
            <showPath path="/pruefung/" />
        </div>  
    </section>

</template>

<script>
export default {

    methods: {
        changeSize: function() {
          //alert('tach');
          event.target.parentNode.classList.toggle("collapsed");
          //event.target.style.color = 'yellow';
 
        }
    }

};
</script>

<style lang="stylus">

.collapsed > .wikiLinkBlockLinks
    display none

.wikiLinkBlockLinks
    div
        margin 1rem 0
    a
        color #fff
        text-shadow 3px 2px 2px #111
        font-size 1.25rem
        font-family $fontB
        &:hover
            text-decoration none !important
            color $accentColor

.wikiLinks
    display grid
    grid-template-columns 1fr 1fr
    grid-gap 1.5rem
    margin-top 3.5rem

    @media (max-width 620px)
        grid-template-columns 1fr

.wikiGrundlagen
    background-image url('/wiki/grundlagen.jpg')

.wikiKata
    background-image url('/wiki/kata.jpg')

.wikiKumite
    background-image url('/wiki/kumite.jpg')

.wikiPruefung
    background-image url('/wiki/pruefung.jpg')

.wikiLinkBlock
    border 3px solid #333
    padding 0 1.5rem
    border-image-slice 45 38 36 56 
    border-image-width 9px 9px 9px 9px 
    border-image-outset 6px 6px 6px 6px 
    border-image-repeat stretch stretch 
    border-image-source url('/img/frame.png')

    -webkit-border-image-slice 45 38 36 56 
    -webkit-border-image-width 9px 9px 9px 9px
    -webkit-border-image-outset 6px 6px 6px 6px
    -webkit-border-image-repeat stretch stretch 
    -webkit-border-image-source url('/img/frame.png') 
    
    align-self flex-start
    position relative
    z-index 1

    //background url('/wiki/busaganashiBg.jpg')
    background-size cover
    background-repeat no-repeat
    background-color #333
    background-position top


    h2
        cursor pointer
        display flex
        width 100%
        color #fff
        font-size 1.75rem
        text-shadow 3px 2px 2px #111

.collapsed.wikiLinkBlock
    background-size cover !important
    background-blend-mode hue

.wikiLinkBlockLinks
    div
        padding .25rem 0

.wikiLinkBlock::after
    position absolute
    display inline-block
    right 2rem
    top 1.25rem
    content '>'
    transform rotate(90deg)
    font-size 2rem
    font-style normal
    font-weight bold
    transition .2s
    z-index -1
    color #fff
    text-shadow 3px 2px 2px #111

.collapsed.wikiLinkBlock:hover
    background $accentColor
    transition .3s   

.collapsed.wikiLinkBlock::after
    transform rotate(0deg)

</style>