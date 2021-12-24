<template>
  <h1>Job Details page</h1>
  <!-- $route contains of any info about the current route, including id, etc -->
  <!-- "slug" instead of "id" if this param called "slug" -->
  <!-- "id" comes from data object down below in this file -->
  <p>The Job id is {{ id }}</p>
</template>

<script>
export default {
data() {
    return {
        id: this.$route.params.id
    }
}
}
</script>

<style>

</style>