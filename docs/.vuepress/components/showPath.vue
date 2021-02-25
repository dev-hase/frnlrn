<template>
    <div class="wikiLinkBlockLinks">

        <div v-for="post in posts" v-if="post.path != path">
                <router-link :to="{ path: post.path }">

                        <a> {{ post.title }} </a>

                </router-link>   
        </div>

    </div>
</template>

<script>
export default {
    props: ["path"],
    computed: {
        
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith(this.path))
                .sort((a, b) => (a.frontmatter.order > b.frontmatter.order) ? 1 : -1)
        },      
    }

};  
</script>

<style lang="stylus" scoped>



</style>