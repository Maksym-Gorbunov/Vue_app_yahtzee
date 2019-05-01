<template>
  <div class="story">
    <!-- {{this.story}} -->
    <div v-for="(number,index) in story" :key="index">
      <span>{{number}}</span>
      <img :src="getImgUrl(number)" :alt="number+'.svg'">
    </div>
  </div>
</template>


<script>
import dice1 from "@/assets/dices_svg/1dice.svg";
import dice2 from "@/assets/dices_svg/2dice.svg";
import dice3 from "@/assets/dices_svg/3dice.svg";
import dice4 from "@/assets/dices_svg/4dice.svg";
import dice5 from "@/assets/dices_svg/5dice.svg";
import dice6 from "@/assets/dices_svg/6dice.svg";
export default {
  name: "Story",
  props: ["story", "dice", "id"],
  methods: {
    /* Get image by dice number */
    getImgUrl(img) {
      switch (img) {
        case 1:
          return dice1;
        case 2:
          return dice2;
        case 3:
          return dice3;
        case 4:
          return dice4;
        case 5:
          return dice5;
        case 6:
          return dice6;
        default:
          return;
      }
    }
  }
};
</script>


<style scoped>
.story {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1%;
}
img {
  display: block;
  max-width: 2em;
  transition: 1s;
}
span {
  display: none;
}
</style>


