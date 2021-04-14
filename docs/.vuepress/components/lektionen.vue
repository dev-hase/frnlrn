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
     
      <router-link :to="'/lektion03'" class="l3">
		<div class="l3w">
      	<span class="l3a">Rechtliche</span>
      	<span class="l3b">Rahmen-</span>
      	<span class="l3c">bedingungen</span>
        </div>
      </router-link>  
     
      <router-link :to="'/lektion04'" class="l4">
 		<div class="l4w">
      	<span class="l4a">Straßen-</span>
      	<span class="l4b">verkehrs-</span>
      	<span class="l4c">system</span>
      	<span class="l4d">& seine Nutzung</span>
        </div>       
      </router-link>  
     
      <router-link :to="'/lektion05'" class="l5">
        <div class="l5w">
      	<span class="l5a">Vorfahrt &</span>
      	<span class="l5b">Verkehrs-</span>
      	<span class="l5c">regelungen</span>
        </div>     
      </router-link>  
     
      <router-link :to="'/lektion06'" class="l6">
        <div class="l6w">
      	<span class="l6a">Verkehrs-</span>
      	<span class="l6b">zeichen &</span>
      	<span class="l6c">Verkehrs-</span>
      	<span class="l6d">einrichtungen</span>
      	<span class="l6e">sowie</span>
      	<span class="l6f">Bahnübergänge</span>
        </div>   
      </router-link>  
     
      <router-link :to="'/lektion07'" class="l7">
        <div class="l7w">
      	<span class="l7a">Andere</span>
      	<span class="l7b">Teilnehmer</span>
      	<span class="l7c">im Straßenverkehr</span>
        </div>  
      </router-link>  
     
      <router-link :to="'/lektion08'" class="l8">
        <div class="l8w">
      	<span class="l8a">Geschwindigkeit,</span>
      	<span class="l8b">Abstand &</span>
      	<span class="l8c">umweltschonende</span>
      	<span class="l8d">Fahrweise</span>
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