<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>Seite nicht gefunden!</h1>
      <img src="/img/404.jpg" alt="404" />
      <blockquote>{{ getMsg() }}</blockquote>
      
      <RouterLink to="/">
        zurück zur Startseite
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `Wie bin ich hierhin gekommen?!?`,
  `Diesen Link gibt's leider nicht...`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
