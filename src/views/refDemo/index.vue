<template>
  <div>
      <h1>姓名: {{name}}</h1>
      <h1>年龄: {{age}}</h1>
      <h2>职业: {{job.occupation}}</h2>
      <h2>薪资: {{job.salary}}</h2>
      <button @click="say">换个人</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'refDemo',
    setup() {
        let name = ref('王皮球')
        let age = ref(6)
        let job = ref({
            occupation: '程序员',
            salary: '10k'
        })
        console.log(name)
        console.log(age)
        // 方法
        function say() {
            name.value='宋二狗',
            age.value=36
            job.value.occupation='挑粪工'
            job.value.salary='-10k'
        }
        return {
            name,
            age,
            job,
            say
        }
    }
}
</script>

<style>

</style>