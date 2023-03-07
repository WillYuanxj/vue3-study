<template>
  <div>

  </div>
</template>

<script>
import {reactive, onMounted, onBeforeUnmounted, onBeforeMount} from 'vue'
export default ()=>{
    let point = reactive({
        x: 0,
        y: 0
    })
    function savePoint(event) {
        ponit.x = event.pageX
        ponit.y = event.pageY
        console.log(event.pageX, event.pageY)
    }

    onMounted(() => {
        window.addEventListener('click', savePoint)
    })

    onBeforeMount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}
// 调用
// import useMousePosition from './hooks/useMousePosition'
// let point - useMousePosition
</script>

<style>

</style>