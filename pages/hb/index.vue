<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "index"
})
</script>

<template>
<div class="content">
  <div class="title-text">Let’s make your <br>
    special plan!</div>
  <div class="img-cont">
    <img src="https://sun9-78.userapi.com/impg/U67Fp6Z-OK96-0F3HkVk9WXAMoOx0wu0KKslBQ/drJSS7ATDWo.jpg?size=604x602&quality=95&sign=2633d960b32b1868202e1eb0656f0998&type=album" alt="">
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Russo+One&display=swap');


.content{
  width: 100vw;
  height: 100vh;
  background-color: white !important;
  display: flex;
  flex-direction: column;
}
.title-text{
  font-family: 'Inter', sans-serif;
  width: 100%;
  height: 200px;
  text-align: center;
  font-weight: 600;
  font-size: 2.2em;
  letter-spacing: .04rem;
  margin-top: 100px;
  color: #11695B;
}
</style>