<template lang="html">
    <div>
      <p>Hello, {{ person }}</p>
    </div>
</template>

<script>
  export default {
    name: 'Greeting',
    props: [ 'person' ]
  }
</script>

<style scoped>

</style>
