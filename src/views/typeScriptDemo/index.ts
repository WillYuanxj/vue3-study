import {ref} from 'vue'
// Boolean
let flag:boolean=false;
flag = true

// 数字类型
let num:number=123

// 字符串类型
let str:string="good guy"

// 数组类型
let arr:number[]=[1,2,3]
let arr2:string[]=['1', '2', '3']
// 定义联合类型数组，与上面相同
let arr3:(number | string)[]
let arr4:any[]
// 第二种使用泛型
let arr5:Array<string>
// 数组对象，要限制内容格式
let arr6:{name:string,age:number}[]
type Man={name:string,age:number}
const arr7:Man[] = [
    {name:'kris', age: 11}
]
let arr8:[number,string]=[123, 'zhangsan']
enum Status {
    One,
    Two,
    Three
}

let a:any=120
    a='123'
//  一般定义方法
function fn():void{
    // do something
    console.log(123)
}
// 有返回值
function fn2():number{
    return 123
}
// 接口
interface Men {
  name: string;
  age: number;
  job ?:string;
}
const man={name:'lisi',age:30}
const fn1=(man:Men)=> {
    if (man.name) {
        console.log(man.name)
    }else if (man.age) {
        console.log(man.age)
    }else if (man.job) {
        console.log(man.job)
    }
}
let num1=ref<number|string>('999')
function fn3():string{
    return '123'
}


