<template>
    <div>
        <h1>当前数字为:{{num}}</h1>
        <button @click="num++">点击数字+1</button>
        <h1>当前姓名： {{names.familyName}}</h1>
        <h1>当前年龄： {{names.age}}</h1>
        <h1>当前薪水： {{names.job.salary}}</h1>
        <button @click="names.familyName+='!'">点击加！</button>
        <button @click="names.age+=1">点击加1</button>
        <button @click="names.job.salary+=1000">点击薪水加1000</button>
    </div>
</template>

<script>
import { watch, ref, reactive } from 'vue'
export default {
    name:'watchDemo',
    setup() {
        let num=ref('0')
        // 要是监听多个数据应该怎么办呢？其实可以用多个watch去进行监听，当然这不是最好的方法，最好的办法其实是监视数组
        watch (num, (newVal, oldVal) => {
            console.log(`当前数字增加了，${newVal},${oldVal}`)
        })
        let names = reactive({
            familyName: '鹿',
            age: 23,
            job: {
                salary: 3000
            }
        })
        watch(names, (newVal, oldVal) => {
            console.log(`names changed`,newVal,oldVal)
        }, {deep: false})
        return {
            num,
            names
        }
    }
}
</script>

<style>

</style>