<template>
  <div>
      <h1>HelloWorld</h1>
      <h1>{{ wish }}</h1>
      <button @click="dream">click to get</button>
      <slot></slot>
      <slot name="demo"></slot>
  </div>
</template>

<script>
export default {
    name: "HelloWord",
    props: ["wish","wishes"],
    emits: ["carried"],
    setup(props, context) {
        console.log(props)
        console.log(context)
        console.log(context.attrs)
        function dream() {
            context.emit('carried', 6666666666)
        }
        return {
            dream
        }
    }
}
</script>

<style>

</style>
