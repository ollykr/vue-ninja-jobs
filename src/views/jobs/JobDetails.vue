<template>
<div v-if="job">
 <h1>{{ job.title }}</h1>
    <p>{{ job.details }}</p>
  <!-- $route contains of any info about the current route, including id, etc -->
  <!-- "slug" instead of "id" if this param called "slug" -->
  <!-- "id" comes from data object down below in this file -->
</div>
 <div v-else>
    <p>Loading job details...</p>
  </div> 
</template>

<script>
export default {
    // "id: job.id" param from Jobs.vue I can accept as a prop below
props: ['id'], 
data() {
    return {
      job: null
    }
  },
mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
  }
// If we set props, we don't need to setup data object below   
// data() {
//     return {
//         id: this.$route.params.id
//     }
// }
}
</script>

<style>

</style>