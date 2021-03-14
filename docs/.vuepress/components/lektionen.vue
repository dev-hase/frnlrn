<template>
    <div id="lektionen">
     
      <router-link :to="'/lektion01'" id="l1">
      	<div id="l1w">
      	<span class="slabtext" id="l1a">Persönliche</span>
      	<span class="slabtext" id="l1b">Voraussetzungen</span>
        </div>
      </router-link>  
     
      <router-link :to="'/lektion02'" id="l2">
      	<div id="l2w">
        <span class="slabtext" id="l2a">Risikofaktor</span> 
        <span class="slabtext" id="l2b">Mensch</span>
        </div>
      </router-link>  
     
      <router-link :to="'/lektion03'" id="l3">
		<div id="l3w">
      	<span class="slabtext" id="l3a">Rechtliche</span>
      	<span class="slabtext" id="l3b">Rahmenbedingungen</span>
        </div>
      </router-link>  
     
      <router-link :to="'/lektion04'" id="l4">
 		<div id="l4w">
      	<span class="slabtext" id="l4a">Straßenverkehrssystem</span>
      	<span class="slabtext" id="l4b">& seine Nutzung</span>
        </div>       
      </router-link>  
     
      <router-link :to="'/lektion05'" id="l5">
        <div id="l5w">
      	<span class="slabtext" id="l5a">Vorfahrt &</span>
      	<span class="slabtext" id="l5b">Verkehrsregelungen</span>
        </div>     
      </router-link>  
     
      <router-link :to="'/lektion06'" id="l6">
        <div id="l6w">
      	<span class="slabtext" id="l6a">Verkehrszeichen &</span>
      	<span class="slabtext" id="l6b">Verkehrseinrichtungen</span>
      	<span class="slabtext" id="l6c">+ Bahnübergänge</span>
        </div>   
      </router-link>  
     
      <router-link :to="'/lektion07'" id="l7">
        <div id="l7w">
      	<span class="slabtext" id="l7a">Andere Teilnehmer</span>
      	<span class="slabtext" id="l7b">im Straßenverkehr</span>
        </div>  
      </router-link>  
     
      <router-link :to="'/lektion08'" id="l8">
        <div id="l8w">
      	<span class="slabtext" id="l8a">Geschwindigkeit,</span>
      	<span class="slabtext" id="l8b">Abstand &</span>
      	<span class="slabtext" id="l8c">umweltschonende Fahrweise</span>
        </div>   
      </router-link>  
     
      <router-link :to="'/lektion09'" id="l9">
        <div id="l9w">
      	<span class="slabtext" id="l9a">Verkehrsverhalten</span>
      	<span class="slabtext" id="l9b">...bei Fahrmanövern,</span>
      	<span class="slabtext" id="l9c">Verkehrsbeobachtung</span>
        </div>  
      </router-link>  
     
      <router-link :to="'/lektion10'" id="l10">
        <div id="l10w">
      	<span class="slabtext" id="l10a">Ruhender</span>
      	<span class="slabtext" id="l10b">Verkehr</span>
        </div>  
      </router-link>  
     
      <router-link :to="'/lektion11'" id="l11">
           
        <div id="l11w">
      	<span class="slabtext" id="l11a">Verhalten in</span>
      	<span class="slabtext" id="l11b">besonderen Situationen,</span>
      	<span class="slabtext" id="l11c">Folgen von</span>
      	<span class="slabtext" id="l11d">Verstößen gegen</span>
      	<span class="slabtext" id="l11e">Verkehrsvorschriften</span>
        </div>  
      </router-link>  
     
      <router-link :to="'/lektion12'" id="l12">
        <div id="l12w">
      	<span class="slabtext" id="l12a">Lebenslanges</span>
      	<span class="slabtext" id="l12b">Lernen</span>
        </div>  
      </router-link>  

    </div>    
</template>

<script>

import VanillaSlab from 'vanilla-slab';

export default {
  mounted() {
    var mySlab = new VanillaSlab;
	mySlab.init({
	  selector: '.slabtext',
	});

  }
};
</script>

<style lang="stylus" scoped>

#lektionen

	display grid
	grid-template-columns 1fr 1fr
	grid-gap 1.5rem
	font-family $fontB

	@media (max-width $MQMobile)
		grid-template-columns 1fr
		word-wrap no-wrap

	@media (min-width 1200px)
		grid-template-columns 1fr 1fr 1fr
		grid-gap 3vw

	span
		font-size 3rem

	a 
		display flex
		justify-content center
		flex-direction column
		transition .3s
		overflow hidden
		padding 2rem

		@media (max-width $MQMobile)
			min-height 15rem

	a:hover
		filter brightness(120%)
		transition .2s

// -------------------------------------------

#l1
	position relative
	background #492742
	color #eddd63
	font-weight bolder
	text-shadow 3px 3px 5px #333
	line-height 2

#l1:after
	content '01'
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

#l1w
	display flex
	justify-content center
	flex-direction column
	transform rotateX(20deg) scale(1.2) rotateY(5deg) rotateZ(0deg) translate3d(0px, 0px, 0px) skew(-12deg, -13deg)

#l1a

	letter-spacing -3px
	transform rotate(3 deg)
	font-family $fontA
	font-weight 300

#l1b
	

// -------------------------------------------

#l2
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333

#l2:after
	content '02'
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

#l2w
	display flex
	justify-content center
	flex-direction column

#l2a

	margin-bottom -2rem
	text-decoration underline

#l2b

	text-decoration none
	color #e53512

// -------------------------------------------

#l3
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333

#l3:after
	content '03'
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

#l3w
	display flex
	justify-content center
	flex-direction column
	transform rotate(3deg)

#l3a

	margin-bottom 2rem
	text-decoration underline

#l3b

	text-decoration none
	color #e53512

// -------------------------------------------

#l4
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333

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
	flex-direction column
	transform rotate(3deg)

#l4a

	margin-bottom 2rem
	text-decoration underline

#l4b

	text-decoration none
	color #e53512


// -------------------------------------------

#l5
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333

#l5:after
	content '05'
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

#l5w
	display flex
	justify-content center
	flex-direction column
	transform rotate(3deg)

#l5a

	margin-bottom 2rem
	text-decoration underline

#l5b

	text-decoration none
	color #e53512

// -------------------------------------------

#l6
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333

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
	transform rotate(3deg)

#l6a

	margin-bottom 2rem
	text-decoration underline

#l6b

	text-decoration none
	color #e53512

// -------------------------------------------

#l7
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333

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

	margin-bottom 2rem
	text-decoration underline

#l7b

	text-decoration none
	color #e53512

// -------------------------------------------

#l8
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333

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
	transform rotate(3deg)

#l8a

	margin-bottom 2rem
	text-decoration underline

#l8b

	text-decoration none
	color #e53512

// -------------------------------------------

#l9
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333

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
	transform rotate(3deg)

#l9a

	margin-bottom 2rem
	text-decoration underline

#l9b

	text-decoration none
	color #e53512

// -------------------------------------------

#l10
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333

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

	margin-bottom 2rem
	text-decoration underline

#l10b

	text-decoration none
	color #e53512

// -------------------------------------------

#l11
	position relative
	background #212b29
	color #79f2d5
	font-weight bolder
	text-shadow 3px 3px 5px #333

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
	filter drop-shadow(1px 2px 5px #555)

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

	margin-bottom 2rem
	text-decoration underline

#l12b

	text-decoration none
	color #e53512

</style>