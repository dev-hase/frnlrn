<template>
  <div>
    <full-page :options="options">
      <slot />
    </full-page>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        options: {
          paddingTop: '3.6rem'
        },
      }
    },
  }
</script>