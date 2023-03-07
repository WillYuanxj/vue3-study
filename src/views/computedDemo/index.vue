<template>
  <div>
      <div>
        姓：<input type="text" v-model="name.familyName"/> <br>
        名：<input type="text" v-model="name.lastName"> <br>
        姓名：{{fullName}}
        </div>
        <div>
        姓：<input type="text" v-model="names.familyName"/> <br>
        名：<input type="text" v-model="names.lastName"> <br>
        姓名：<input type="text" v-model="names.fullName">
        </div>
  </div>

  
</template>

<script>
import { reactive, computed } from 'vue'
export default {
    name: 'computedDemo',
    setup() {
        let name = reactive({
            familyName: '阿',
            lastName: '龙',
        })
        let names = reactive({
            familyName: '阿',
            lastName: '虎',
        })
        let fullName=computed(()=>{
            return name.familyName+'.'+name.lastName
        })
        names.fullName=computed({
            get() {
                return names.familyName+'.'+names.lastName
            },
            set(val) {
                let nameList=val.split('.')
                names.familyName=nameList[0]
                names.lastName=nameList[1]
            }
        })
        return {
            name,
            fullName,
            names
        }
    }
}
</script>

<style>

</style>