<template>
  <div>
      <h1>性别：{{name}}</h1>
      <h1>年龄：{{age}}</h1>
      <h2>职业： {{job.occupation}} 薪资：{{job.salary}}</h2>
      <h2>爱好： {{hobby[0]}},{{hobby[1]}},{{hobby[2]}}</h2>
      <button @click="say">一键升级</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
    name: 'reactiveDemo',
    setup() {
        let name = ref('夏大鸟')
        let age = ref(16)
        let job = reactive({
            occupation:'IT女' ,
            salary:'15k'
        })
        let hobby = reactive(['干饭','打蛋仔','恋爱脑'])
        console.log(name,age)
        function say() {
            age.value = 18
            job.salary='250k'
            hobby[2]='认干爹'
        }
        return {
            name,
            age,
            job,
            say,
            hobby
        }
    }
}
</script>

<style>

</style>