

<template>
  <div class="one">
    <h1>第一层</h1>
    <div class="two">
      <h1>第二层</h1>
      <div class="three">
        <h1>第三层</h1>
        <!-- <teleport to="body">
            <div class="four">
              <div class="five"></div>
            </div>
        </teleport> -->
         <teleport to=".one">
            <div class="four">
              <div class="five"></div>
            </div>
        </teleport>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'App',
  setup(){
    return {}
  }
}
</script>

<style lang="less">
.one{
  width: 100%;
  background-color: blue;
  .two{
    margin: 20px;
    background-color: aqua;
    .three{
      margin: 20px;
      background-color: aliceblue;
    }
  }
}
.four{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  .five{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 300px;
    left: 50%;
    background-color:#f60;
  }
}
</style>
