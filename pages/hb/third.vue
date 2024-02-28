<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "third"
})
</script>

<template>
  <div class="content">
    <div class="question">
      <div class="text">Perfect! We’ve just set a goal. Let’s clarify some more things so that I help you achieve it more efficiently.</div>
      <nuxt-link to="/hb/four" class="weight-input in-button"><button class="weight-input in-button">Next!</button></nuxt-link>
    </div>
    <div class="img-cont">
      <img src="https://sun9-78.userapi.com/impg/U67Fp6Z-OK96-0F3HkVk9WXAMoOx0wu0KKslBQ/drJSS7ATDWo.jpg?size=604x602&quality=95&sign=2633d960b32b1868202e1eb0656f0998&type=album" alt="">
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Russo+One&display=swap');

*:focus {
  outline: none;
}

input {
  text-align: center;
}

.content{
  width: 100vw;
  height: 100vh;
  background-color: white !important;
  display: flex;
  flex-direction: column;
}
.text{
  font-family: 'Inter', sans-serif;
  width: 80%;
  text-align: center;
  font-weight: 600;
  font-size: 1.2em;
  letter-spacing: .04rem;
  margin-top: 100px;
  color: #11695B;
  margin-bottom: 15px;
}
.question{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px
}
.weight-input{
  font-family: 'Inter', sans-serif;
  font-size: 1.4em;
  height: 40px;
  border-radius: 10px;
  background-color: #c9c9c9;
  width: 80%;
}
.in-button{
  background-color: #11695B;
  text-align: center;
  color: white;
  width: 80%;
  font-size: 0.8em;
  font-weight: 200;
}
.weight-input::placeholder {
  text-align: center;
  color: #a1a1a1
}
</style>