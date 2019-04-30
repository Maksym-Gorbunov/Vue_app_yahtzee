<template>
  <div class="story">
      <!-- {{this.story}} -->
    <div v-for="(number,index) in story" :key="index" >
      <span>{{number}}</span>
      <img :src="getImgUrl(number)" :alt="number+'.svg'">
    </div>

  </div>
  
</template>

<script>
// import { mapGetters, mapActions } from "vuex"
import dice1 from '@/assets/dices_svg/1dice.svg'
import dice2 from '@/assets/dices_svg/2dice.svg'
import dice3 from '@/assets/dices_svg/3dice.svg'
import dice4 from '@/assets/dices_svg/4dice.svg'
import dice5 from '@/assets/dices_svg/5dice.svg'
import dice6 from '@/assets/dices_svg/6dice.svg'


export default {
  name: "Story",
  props: ["story", "dice", "id"],
  data(){
    return {
      // clicked_dice: this.dice.value
    }
  },
  methods: {
    getImgUrl(img) {
      switch(img){
        case 1: return dice1
        case 2: return dice2
        case 3: return dice3
        case 4: return dice4
        case 5: return dice5
        case 6: return dice6
        default: return
      }
    },
    test(){
      // console.log(this.dice.value)
      // return this.dice.value
    },
    // bindDiceWidth(){
    //   let element = document.getElementById('dice'+this.dice.id)
    //   let board = document.getElementById('left')
    //   element.width = board.clientWidth / 12
    //   element.height = board.clientWidth / 12
    //   $(window).resize(function(e) {
    //     element.width = board.clientWidth / 12
    //     element.height = board.clientWidth / 12
    //   });
    // }
  
    
  },
  // computed: mapGetters(["allTodos"]),
  mounted() {
    // let element = document.getElementById('dice'+this.dice.id)
    // let index = this.dice.id - 1
    // let elementData = [index, element]
    // this.$store.commit('setElement', elementData)
    // let board = document.getElementById('left')
    
    // this.bindDiceWidth()
    
    }
  }
</script>

<style scoped>
.story{
  width: 80%;
  /* height: 100%; */

  margin: 0 auto;
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  /* grid-auto-rows: 2em; */
  grid-gap: 1%;
}



img{
  display:block;
    /* display: inline-block; */
    /* position: absolute; */
    max-width: 2em;
    /* max-height: 90%; */
    /* width: 9vw;
    height: 9vw; */
    /* margin: 0%; */
    /* padding: 0; */
    /* transform: translate(-50%, -50%); */
    transition: 1s;
  }
  span{
    display: none;
  }

  /* @media only screen and (max-width: 800px) {
  img{
    display: none;
  }    
  span{
    display: inline;
  } */


/* } */
</style>


