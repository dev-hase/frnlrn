<template>
    <div class="video-box">
        <div class="youtube" :id="videoid" :data-params="combineParams" :data-desc="youtubeDesc" style="width:640px;height:360px;"></div>
    </div>    
</template>

<script>  
export default {
    props: ["videoid", "start", "end", "mute", "desc"],
    mounted() {
        let YTScript = document.createElement('script')
        YTScript.setAttribute('src', '/YouTube.js')
        document.head.appendChild(YTScript)
    },
    computed: {
        startAt: function () {
            if (this.start) return this.start.replace (/^/,'&start=')
            else return ''
        },
        endAt: function () {
            if (this.end) return this.end.replace (/^/,'&end=')
            else return ''
        },
        muteState: function () {
            if (this.mute) return this.mute.replace (/^/,'&mute=')
            else return ''
        },
        combineParams: function () {
            let myParams = this.muteState + this.startAt + this.endAt
            return myParams
        },
        youtubeDesc: function () {
            if (this.desc) return this.desc
            else return ''
        },
        
    }

};  
</script>

<style lang="stylus" scoped>
        
    .video-box        
        //filter grayscale(37%) sepia(10%) contrast(95%) brightness(97%)
        cursor pointer
        min-width 100%
        margin 2.75rem 0
        
        div
            min-width 100%
            max-width 100%
            background-size cover
            background-position center

    .theme-default-content:not(.newSection) > .video-box:first-of-type
        margin-top .75rem !important


    .youtube:before
        content ''
        position absolute
        display inline-block
        min-width 100%
        width 100%
        max-widht 100%
        height 100%
        opacity .97
        background-image url('/img/video.svg')
        background-repeat no-repeat
        background-position center
        background-color rgba(188,122,122,.85)
        box-sizing border-box
        overflow hidden


    .youtube:after
        content attr(data-desc)
        color #fff
        top 0
        left 0
        right 0
        font-size .8rem
        font-weight bold
        margin .25rem
        position absolute
        display inline
        min-width 75%
        padding .25rem
        background none

    @media (min-width $MQNarrow)
        .youtube:after
            font-size 1.25rem


    .youtube 
        width 100%
        max-width 100% !important
        position relative
        background-color #111
        background-blend-mode luminosity

    .youtube, iframe, .youtube:before 
        max-height 40vh !important  

        @media (min-width 800px)
            height 40vh !important


    .youtube:before
        background-size 12.5% !important
        @media (max-width 400px)
            background-size 10vh !important


    .youtube:after
        
        max-width 70%
        min-width 70% !important

    .video-box 
        border 3px solid transparent
        box-sizing border-box
        margin 1.5rem 0 !important

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

        background-color #333

    @media (min-width 1200px)
        .video-box 
            max-width 75% !important

        iframe
            min-height 35vh

    @media (max-width 1200px)

        iframe
            min-height 50vh       


</style>
