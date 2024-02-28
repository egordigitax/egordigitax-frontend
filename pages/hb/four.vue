<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "four"
})
</script>

<template>
  <div class="content">
    <div class="question">
      <div class="text">How do you estimate your nutrition?</div>
      <nuxt-link to="/hb/five" class="weight-input in-button"><button class="weight-input in-button">Balanced and healthy</button></nuxt-link>
      <nuxt-link to="/hb/five" class="weight-input in-button"><button class="weight-input in-button">Rather healthy with occasional cheat meals</button></nuxt-link>
      <nuxt-link to="/hb/five" class="weight-input in-button"><button class="weight-input in-button">50/50</button></nuxt-link>
      <nuxt-link to="/hb/five" class="weight-input in-button"><button class="weight-input in-button">Unhealthy</button></nuxt-link>
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
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1.4em;
  letter-spacing: .04rem;
  margin-top: 100px;
  color: #11695B;
}
.question{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px
}
.weight-input{
  font-family: 'Inter', sans-serif;
  font-size: 1em;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
  background-color: #c9c9c9;
  width: 80%;
}
.in-button{
  font-family: 'Inter', sans-serif;
  width: 80%;
  text-align: left;
  padding-left: 10px;
  background-color: #11695B;
  font-weight: 111;
  font-size: 0.8em;
  color: #f6f6f6;
}
.weight-input::placeholder {
  text-align: center;
  color: #a1a1a1
}
button {
  font-weight: 200;
}
</style>