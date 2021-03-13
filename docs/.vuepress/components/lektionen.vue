<template>
    <div id="lektionen">
     
      <router-link :to="'/lektion01'" id="l1">
      	<div id="l1w">
      	<span id="l1a">Persönliche</span>
      	<span id="l1b">Voraussetzungen</span>
      	</div>
      </router-link>  
     
      <router-link :to="'/lektion02'" id="l2">
      	<div id="l2w">
        <span id="l2a">Risikofaktor</span> 
        <span id="l2b">Mensch</span>
        </div>
      </router-link>  
     
      <router-link :to="'/lektion03'">
        Rechtliche Rahmenbedingungen
      </router-link>  
     
      <router-link :to="'/lektion04'">
        Straßenverkehrssystem und seine Nutzung
      </router-link>  
     
      <router-link :to="'/lektion05'">
        Vorfahrt und Verkehrsregelungen
      </router-link>  
     
      <router-link :to="'/lektion06'">
        Verkehrszeichen und Verkehrseinrichtungen sowie Bahnübergänge
      </router-link>  
     
      <router-link :to="'/lektion07'">
        Andere Teilnehmer im Straßenverkehr
      </router-link>  
     
      <router-link :to="'/lektion08'">
        Geschwindigkeit, Abstand und umweltschonende Fahrweise
      </router-link>  
     
      <router-link :to="'/lektion09'">
        Verkehrsverhalten bei Fahrmanövern, Verkehrsbeobachtung
      </router-link>  
     
      <router-link :to="'/lektion10'">
        Ruhender Verkehr
      </router-link>  
     
      <router-link :to="'/lektion11'">
        Verhalten in besonderen Situationen, Folgen von Verstößen gegen Verkehrsvorschriften
      </router-link>  
     
      <router-link :to="'/lektion12'">
        Lebenslanges Lernen
      </router-link>  

    </div>    
</template>

<style lang="stylus" scoped>

#lektionen

	display grid
	grid-template-columns 1fr 1fr
	grid-gap 1.5rem
	font-family $fontB

	span
		display inline-block
		padding-left 8vw

	a 
		height 15rem
		//border 5px solid $accentColor
		display flex
		justify-content center
		flex-direction column
		transition .3s
		overflow hidden

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
	transform rotateX(20deg) scale(1.2) rotateY(5deg) rotateZ(0deg) translate3d(0px, 0px, 0px) skew(-12deg, -13deg)

#l1a
	font-size 6vw
	letter-spacing -3px
	transform rotate(3 deg)
	font-family $fontA
	font-weight 300

#l1b
	font-size 4.5vw

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

#l2a
	font-size 5.75vw
	margin-bottom -2rem
	text-decoration underline

#l2b
	font-size 10vw
	text-decoration none
	color #e53512


</style>