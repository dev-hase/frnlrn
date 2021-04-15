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
     
      <router-link :to="'/lektion09'" class="l9">
        <div class="l9w">
      	<span class="l9a">Verkehrs-</span>
      	<span class="l9b">verhalten ...bei</span> 
      	<span class="l9c">Fahrmanövern,</span>
      	<span class="l9d">Verkehrs-</span>
      	<span class="l9e">beobachtung</span>
        </div>  
      </router-link>  
     
      <router-link :to="'/lektion10'" class="l10">
        <div class="l10w">
      	<span class="l10a">Ruhender</span>
      	<span class="l10b">Verkehr</span>
        </div>  
      </router-link>  
     
      <router-link :to="'/lektion11'" class="l11">
           
        <div class="l11w">
      	<span class="l11a">Verhalten in</span>
      	<span class="l11b">besonderen Situationen,</span>
      	<span class="l11c">Folgen von</span>
      	<span class="l11d">Verstößen gegen</span>
      	<span class="l11e">Verkehrsvorschriften</span>
        </div>  
      </router-link>  
     
      <router-link :to="'/lektion12'" class="l12">
        <div class="l12w">
      	<span class="l12a">Lebenslanges</span>
      	<span class="l12b">Lernen</span>
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





</style>