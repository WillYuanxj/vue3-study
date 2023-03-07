<template>
  <div>{{doing}}</div>
</template>

<script>
export default {
  name: 'login',
  setup() {
      let somethingToDo = 'work'
      let doing = 'study'
      function studyWay() {
          console.log(`${doing} is my ${somethingToDo}`)
      }
      return {
          somethingToDo,
          doing,
          studyWay
      }
  }
}
</script>

<style>

</style>
