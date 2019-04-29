<template>
  <div @click="$emit('dice-click', dice)" >
    <!-- <img :src="getImgUrl(this.dice.value)" :alt="this.dice.value+'.png'" v-bind:id="'dice'+this.dice.id" > -->
    <img :src="getImgUrl(this.dice.value)" :alt="this.dice.value+'.svg'" v-bind:id="'dice'+this.dice.id" >
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
/* Version 1 */
// import dice1 from '../assets/dices/1dice.png'
// import dice2 from '../assets/dices/2dice.png'
// import dice3 from '../assets/dices/3dice.png'
// import dice4 from '../assets/dices/4dice.png'
// import dice5 from '../assets/dices/5dice.png'
// import dice6 from '../assets/dices/6dice.png'

/* Version 2 */
// import dice1 from '../assets/dices_svg/1dice.svg'
// import dice2 from '../assets/dices_svg/2dice.svg'
// import dice3 from '../assets/dices_svg/3dice.svg'
// import dice4 from '../assets/dices_svg/4dice.svg'
// import dice5 from '../assets/dices_svg/5dice.svg'
// import dice6 from '../assets/dices_svg/6dice.svg'

/* Versiuon 3 */
import dice1 from '@/assets/dices_svg/1dice.svg'
import dice2 from '@/assets/dices_svg/2dice.svg'
import dice3 from '@/assets/dices_svg/3dice.svg'
import dice4 from '@/assets/dices_svg/4dice.svg'
import dice5 from '@/assets/dices_svg/5dice.svg'
import dice6 from '@/assets/dices_svg/6dice.svg'


export default {
  name: "Dice",
  props: ["dice", "id"],
  data(){
    return {
      clicked_dice: this.dice.value
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
      return this.dice.value
    },
    bindDiceWidth(){
      let element = document.getElementById('dice'+this.dice.id)
      let board = document.getElementById('left')
      element.width = board.clientWidth / 12
      element.height = board.clientWidth / 12
      $(window).resize(function(e) {
        element.width = board.clientWidth / 12
        element.height = board.clientWidth / 12
      });
    }
  
    
  },
  computed: mapGetters(["allTodos"]),
  mounted() {
    let element = document.getElementById('dice'+this.dice.id)
    let index = this.dice.id - 1
    let elementData = [index, element]
    this.$store.commit('setElement', elementData)
    let board = document.getElementById('left')
    
    this.bindDiceWidth()
    
    }
  }
</script>

<style scoped>
img{
    position: absolute;
    max-width: 70px;
    max-height: 70px;
    /* width: 9vw;
    height: 9vw; */
    margin: 0%;
    padding: 0;
    transform: translate(-50%, -50%);
    transition: 0.4s;
  }
</style>


