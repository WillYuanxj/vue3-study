<template>
  <div>
      <hello-world wish="travel" wishes="richirich" @carried="carried">
          <h3>实现插槽1</h3>
          <template v-slot:demo>
              <h4>实现插槽2</h4>
          </template>
      </hello-world>
      
  </div>
</template>

<script>
import helloWorld from './components/helloWorld.vue'
export default {
    name: 'slotdemo',
    components: {
        helloWorld
    },
    setup() {
        function carried(value) {
            alert(`NewBee, all come true!!!!${value}`)
        }
        return {
            carried
        }
    }
}
</script>

<style>

</style>
