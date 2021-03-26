<template>
    <div id="lektionen">
     
      <router-link :to="'/lektion01'" class="l1">
      	<div class="l1w">
      	<span class="l1a">Persönliche</span>
      	<span class="l1b">Voraussetzungen</span>
        </div>
      </router-link>  
     
      <router-link :to="'/lektion02'" class="l2">
      	<div class="l2w">
        <span class="l2a">Risikofaktor</span> 
        <span class="l2b">Mensch</span>
        </div>
      </router-link>  
     
      <router-link :to="'/lektion03'" id="l3">
		<div id="l3w">
      	<span id="l3a">Rechtliche</span>
      	<span id="l3b">Rahmen-</span>
      	<span id="l3c">bedingungen</span>
        </div>
      </router-link>  
     
      <router-link :to="'/lektion04'" id="l4">
 		<div id="l4w">
      	<span id="l4a">Straßen-</span>
      	<span id="l4b">verkehrs-</span>
      	<span id="l4c">system</span>
      	<span id="l4d">& seine Nutzung</span>
        </div>       
      </router-link>  
     
      <router-link :to="'/lektion05'" id="l5">
        <div id="l5w">
      	<span id="l5a">Vorfahrt &</span>
      	<span id="l5b">Verkehrs-</span>
      	<span id="l5c">regelungen</span>
        </div>     
      </router-link>  
     
      <router-link :to="'/lektion06'" id="l6">
        <div id="l6w">
      	<span id="l6a">Verkehrs-</span>
      	<span id="l6b">zeichen &</span>
      	<span id="l6c">Verkehrs-</span>
      	<span id="l6d">einrichtungen</span>
      	<span id="l6e">sowie</span>
      	<span id="l6f">Bahnübergänge</span>
        </div>   
      </router-link>  
     
      <router-link :to="'/lektion07'" id="l7">
        <div id="l7w">
      	<span id="l7a">Andere</span>
      	<span id="l7b">Teilnehmer</span>
      	<span id="l7c">im Straßenverkehr</span>
        </div>  
      </router-link>  
     
      <router-link :to="'/lektion08'" id="l8">
        <div id="l8w">
      	<span id="l8a">Geschwindigkeit,</span>
      	<span id="l8b">Abstand &</span>
      	<span id="l8c">umweltschonende</span>
      	<span id="l8d">Fahrweise</span>
        </div>   
      </router-link>  
     
      <router-link :to="'/lektion09'" id="l9">
        <div id="l9w">
      	<span id="l9a">Verkehrs-</span>
      	<span id="l9b">verhalten ...bei</span> 
      	<span id="l9c">Fahrmanövern,</span>
      	<span id="l9d">Verkehrs-</span>
      	<span id="l9e">beobachtung</span>
        </div>  
      </router-link>  
     
      <router-link :to="'/lektion10'" id="l10">
        <div id="l10w">
      	<span id="l10a">Ruhender</span>
      	<span id="l10b">Verkehr</span>
        </div>  
      </router-link>  
     
      <router-link :to="'/lektion11'" id="l11">
           
        <div id="l11w">
      	<span id="l11a">Verhalten in</span>
      	<span id="l11b">besonderen Situationen,</span>
      	<span id="l11c">Folgen von</span>
      	<span id="l11d">Verstößen gegen</span>
      	<span id="l11e">Verkehrsvorschriften</span>
        </div>  
      </router-link>  
     
      <router-link :to="'/lektion12'" id="l12">
        <div id="l12w">
      	<span id="l12a">Lebenslanges</span>
      	<span id="l12b">Lernen</span>
        </div>  
      </router-link>  

    </div>    
</template>

<script>

</script>

<style lang="stylus">

#lektionen

	display grid
	grid-template-columns 1fr 1fr
	grid-gap 4vw
	font-family $fontB

	@media (max-width $MQMobile)
		grid-template-columns 1fr
		//word-break keep-all
		//white-space nowrap


	@media (min-width 1200px)
		grid-template-columns 1fr 1fr 1fr

	a 
		display flex
		justify-content center
		flex-direction column
		align-items center
		word-break keep-all
		white-space nowrap
		transition .3s
		overflow hidden
		//padding .5rem
		min-height 40vh
		//min-width 28vw
		border-bottom-left-radius 1.75rem
		border-bottom-right-radius .25rem
		border-top-right-radius .5rem
		border 3px solid lighten($accentColor, 30%)
		//box-shadow 1px 1px 4px #777

		font-size 3.25em

		@media (max-width $MQMobile)
			//min-height 15rem

	a:hover
		filter brightness(130%)
		transition .2s


// -------------------------------------------

#l3
	position relative
	background #2c7761
	
	font-weight bolder
	text-shadow 3px 3px 5px #333
	background-image url(/img/l03.jpg)


#l3:after
	content '03'
	top 0
	left 0
	position absolute
	padding .5rem
	background $accentColor
	color #00495a

	
	font-size 2rem
	text-shadow none
	filter drop-shadow(1px 2px 5px #555)

#l3w
	display flex
	justify-content center
	flex-direction column
	transform rotate(-6deg)
	padding .5rem


#l3a
	text-transform uppercase
	font-family $fontA 
	color $primaryColor
	background #431d54
	margin-left 1.5rem
	margin-bottom -.5rem
	padding 0 1rem
	transform rotate(5deg)

	@media (orientation: portrait)
		font-size 5.1vh
	@media (orientation: landscape)
		font-size 7.2vh

#l3b, #l3c

	text-decoration none
	color #ddd
	font-family $fontB

	padding .5rem
	margin-left .52rem


	@media (orientation: portrait)
		font-size 9vh
	@media (orientation: landscape)
		font-size 12vh 

#l3b
	margin-top 1.3rem

#l3c
	font-size 8vh
	margin-top -1.75rem

	@media (orientation: portrait)
		font-size 6vh
	@media (orientation: landscape)
		font-size 8vh 

// -------------------------------------------

#l4
	position relative
	background #e2cc5d
	background-image url(/img/l04.jpg)
	background-size cover
	color #79f2d5
	font-weight bolder
	

#l4:after
	content '04'
	top 0
	left 0
	position absolute
	padding .5rem
	background $accentColor
	color #00495a
	font-family $fontA 
	font-size 2rem
	text-shadow none
	filter drop-shadow(1px 2px 5px #555)

#l4w
	display flex
	justify-content center
	align-items center
	flex-direction column
	transform rotate(3deg)

#l4a
	transform rotate(-1deg)

#l4a, #l4b, #l4c

	margin-bottom 1rem
	color #701358
	font-family $fontC
	letter-spacing .1rem

#l4a

	@media (orientation: portrait)
		font-size 8vh
	@media (orientation: landscape)
		font-size 11.5vh 


#l4b

	margin-top -2rem
	@media (orientation: portrait)
		font-size 7.7vh
	@media (orientation: landscape)
		font-size 10.75vh 


#l4c

	margin-top -3rem
	@media (orientation: portrait)
		font-size 10.5vh
	@media (orientation: landscape)
		font-size 14.75vh 


#l4d

	text-decoration none
	color #ffe83f
	text-shadow 3px 3px 5px #333
	margin-bottom 2rem

	background #701358
	padding .5rem .25rem
	transform rotate(-4.5deg)

	@media (orientation: portrait)
		font-size 4vh
	@media (orientation: landscape)
		font-size 6vh 


// -------------------------------------------

#l5
	position relative
	background #1e8976
	color #79f2d5
	font-weight bolder
	background-image url(/img/l05.jpg)

#l5:after
	content '05'
	top 0
	left 0
	position absolute
	padding .5rem
	background $accentColor
	color #00495a
	font-size 2rem	 
	text-shadow none


#l5w
	display flex
	justify-content center
	flex-direction column
	

#l5a

	margin-bottom 2rem
	transform rotate(-3deg)
	font-family $fontB
	text-shadow 3px 4px 2px #555

	@media (orientation: portrait)
		font-size 7vh
	@media (orientation: landscape)
		font-size 10.3vh 

#l5b, #l5c
	font-family $fontA
	background #74229e
	font-weight 300
	text-transform uppercase
	font-style italic
	padding .25rem 0
	color #f0c5c5
	border 3px dashed #f0c5c5

	letter-spacing -.2rem
	margin .3rem
	@media (orientation: portrait)
		font-size 7vh
	@media (orientation: landscape)
		font-size 9.4vh 

#l5c

	@media (orientation: portrait)
		font-size 5.5vh
	@media (orientation: landscape)
		font-size 7.5vh 

// -------------------------------------------

#l6
	position relative
	background #212b29
	color #cfe8e6
	font-weight bolder
	background-image url(/img/l06.jpg)

#l6:after
	content '06'
	top 0
	left 0
	position absolute
	padding .5rem
	background $accentColor
	color #00495a
	font-family $fontA 
	font-size 2rem
	text-shadow none
	filter drop-shadow(1px 2px 5px #555)

#l6w
	display flex
	justify-content center
	flex-direction column
	align-items center
	transform rotate(3deg)

#l6a
	background #888
	margin-bottom -.5rem
	font-family $fontA
	text-transform uppercase
	@media (orientation: portrait)
		font-size 3vh
	@media (orientation: landscape)
		font-size 4vh 
#l6b
	font-family $fontC
	@media (orientation: portrait)
		font-size 8vh
	@media (orientation: landscape)
		font-size 12vh 

#l6c
	background #888

	font-family $fontA
	text-transform uppercase
	@media (orientation: portrait)
		font-size 3vh
	@media (orientation: landscape)
		font-size 4vh 
#l6d
	font-family $fontC
	@media (orientation: portrait)
		font-size 6vh
	@media (orientation: landscape)
		font-size 9vh 
#l6e
	background #888
	font-family $fontA
	text-transform uppercase
	transform rotate(-3deg)
	@media (orientation: portrait)
		font-size 1.6vh
	@media (orientation: landscape)
		font-size 2vh 
#l6f

	color #ffb700
	z-index 3
	font-family $fontA
	background #1a1a40
	letter-spacing -.1rem
	text-transform uppercase
	transform rotate(-3deg)
	padding 0 .4rem
	@media (orientation: portrait)
		font-size 3vh
	@media (orientation: landscape)
		font-size 5.3vh 

// -------------------------------------------

#l7
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333
	background-image url(/img/l07.jpg)

#l7:after
	content '07'
	top 0
	left 0
	position absolute
	padding .5rem
	background $accentColor
	color #00495a
	font-family $fontA 
	font-size 2rem
	text-shadow none
	filter drop-shadow(1px 2px 5px #555)

#l7w
	display flex
	justify-content center
	flex-direction column
	transform rotate(3deg)

#l7a
	font-family $fontC
	text-transform uppercase
	margin-bottom -.5rem
	text-decoration underline
	letter-spacing .5rem
	color #1aed95
	@media (orientation: portrait)
		font-size 9vh
	@media (orientation: landscape)
		font-size 14vh 

#l7b
	font-family $fontB
	text-decoration none
	color #d11359
	@media (orientation: portrait)
		font-size 7.1vh
	@media (orientation: landscape)
		font-size 11.5vh 

	transform rotate(-3deg)

#l7c
	font-family $fontA
	text-decoration none
	color #222
	margin-top -.75rem
	transform rotate(-3deg)
	background #d11359
	text-shadow none
	padding .1rem .5rem
	margin-left .5rem
	@media (orientation: portrait)
		font-size 2.8vh
	@media (orientation: landscape)
		font-size 4.8vh 

// -------------------------------------------

#l8
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333
	background-image url(/img/l08.jpg)

#l8:after
	content '08'
	top 0
	left 0
	position absolute
	padding .5rem
	background $accentColor
	color #00495a
	font-family $fontA 
	font-size 2rem
	text-shadow none
	filter drop-shadow(1px 2px 5px #555)

#l8w
	display flex
	justify-content center
	flex-direction column
	//transform rotate(3deg)

#l8a
	color #fdff6e
	margin-top 2rem
	margin-left 1rem
	font-style italic
	text-decoration underline
	font-family $fontC
	@media (orientation: portrait)
		font-size 4.4vh
	@media (orientation: landscape)
		font-size 6.8vh

#l8b
	text-decoration none
	color #6efff5
	margin-top 1.4rem
	margin-bottom 1.5rem
	@media (orientation: portrait)
		font-size 7.6vh
	@media (orientation: landscape)
		font-size 11.5vh

#l8c
	color #6eff97
	letter-spacing -.1rem
	margin-left .5rem
	margin-bottom -1.5rem
	text-transform uppercase
	font-family $fontA
	background #444
	padding .4rem
	transform rotate(1deg)
	@media (orientation: portrait)
		font-size 2.9vh
	@media (orientation: landscape)
		font-size 4.5vh

#l8d
	color #6eff97
	font-family $fontC
	text-decoration none
	z-index 3
	@media (orientation: portrait)
		font-size 7.8vh
	@media (orientation: landscape)
		font-size 11.5vh

// -------------------------------------------

#l9
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333
	background-image url(/img/l09.jpg)

#l9:after
	content '09'
	top 0
	left 0
	position absolute
	padding .5rem
	background $accentColor
	color #00495a
	font-family $fontA 
	font-size 2rem
	text-shadow none
	filter drop-shadow(1px 2px 5px #555)

#l9w
	display flex
	justify-content center
	flex-direction column


#l9a
	color #ff6a67

	@media (orientation: portrait)
		font-size 4.3vh
	@media (orientation: landscape)
		font-size 6vh
		margin-top 2rem

#l9b
	text-align right
	color #ff6a67

	transform rotate(1deg)
	margin-top -.75rem
	@media (orientation: portrait)
		font-size 4.3vh
	@media (orientation: landscape)
		font-size 6vh

#l9c
	color #67ff7b
	font-style italic
	font-family $fontC
	letter-spacing .2rem
	text-decoration overline
	background #2e1c36
	opacity .75

	margin-top 2.25rem
	margin-bottom 2.5rem
	transform rotate(-2deg) skewX(-10deg)
	@media (orientation: portrait)
		font-size 4.5vh
	@media (orientation: landscape)
		font-size 6.7vh

#l9d
	color #fdff67
	text-align center
	background darken(#6bad60, 40%)
	border-radius 1rem
	margin-bottom -.2rem
	font-family $fontC
	text-transform lowercase
	transform skewX(5deg)
	@media (orientation: portrait)
		font-size 3.5vh
	@media (orientation: landscape)
		font-size 4.5vh
#l9e
	color #fdff67
	padding 1rem
	background darken(#6bad60, 40%)
	border-radius 1rem
	text-transform uppercase
	text-align center
	transform skewX(-9deg)
	font-family $fontC
	@media (orientation: portrait)
		font-size 4.5vh
	@media (orientation: landscape)
		font-size 6.5vh
		margin-bottom 2rem


// -------------------------------------------

#l10
	position relative
	background #212b29
	
	font-weight bolder
	text-shadow 3px 3px 5px #333
	background-image url(/img/l10.jpg)

#l10:after
	content '10'
	top 0
	left 0
	position absolute
	padding .5rem
	background $accentColor
	color #00495a
	font-family $fontA 
	font-size 2rem
	text-shadow none
	filter drop-shadow(1px 2px 5px #555)

#l10w
	display flex
	justify-content center
	flex-direction column
	transform rotate(3deg)

#l10a
	color lighten(#58002e, 22%)
	margin-bottom 2rem
	text-decoration underline
	@media (orientation: portrait)
		font-size 7.25vh
	@media (orientation: landscape)
		font-size 10.5vh
		margin-bottom 2rem

#l10b
	color lighten(#58002e, 30%)
	text-decoration none
	font-family $fontC
	letter-spacing .2rem
	margin-top -2rem
	@media (orientation: portrait)
		font-size 8.7vh
	@media (orientation: landscape)
		font-size 11.5vh
		margin-bottom 2rem

// -------------------------------------------

#l11
	position relative
	background #bbb
	color #444
	font-weight bolder
	font-size 2vh
	text-align center
	//text-shadow 3px 3px 5px #333

#l11:after
	content '11'
	top 0
	left 0
	position absolute
	padding .5rem
	background $accentColor
	color #00495a
	font-family $fontA 
	font-size 2rem
	text-shadow none
	//filter drop-shadow(1px 2px 5px #555)

#l11w
	display flex
	justify-content center
	flex-direction column
	transform rotate(3deg)

#l11a

	margin-bottom 2rem
	text-decoration underline

#l11b

	text-decoration none
	color #e53512

// -------------------------------------------

#l12
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333
	background-image url(/img/l12.jpg)

#l12:after
	content '12'
	top 0
	left 0
	position absolute
	padding .5rem
	background $accentColor
	color #00495a
	font-family $fontA 
	font-size 2rem
	text-shadow none
	filter drop-shadow(1px 2px 5px #555)

#l12w
	display flex
	justify-content center
	flex-direction column
	transform rotate(3deg)

#l12a
	color lighten(#e2bc03, 22%)
	margin-bottom 2rem
	text-decoration underline
	margin-top 2rem
	@media (orientation: portrait)
		font-size 7.25vh
	@media (orientation: landscape)
		font-size 10.5vh
		margin-bottom 2rem

#l12b
	color lighten(#71e203, 30%)
	text-decoration none
	font-family $fontC
	letter-spacing .2rem
	transform rotate(-2deg) skewX(3deg)
	margin-top -2rem
	@media (orientation: portrait)
		font-size 8.7vh
	@media (orientation: landscape)
		font-size 18.5vh
		margin-bottom 2rem

</style>