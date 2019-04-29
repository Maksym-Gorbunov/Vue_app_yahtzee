<template>
  <div id="app">
    
    <!-- Modal -->
    <div class="modal fade" id="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header"> <h4 class="modal-title">Yahtzee</h4> </div>
          <div class="modal-body">
            <p> Result: {{ this.items[items.length-1].poings }} </p>
          </div>
          <div class="modal-footer">
            <button type="reset" class="btn btn-default" id="play_again_btn" @click="playAgain" >Play Again</button>
          </div>
        </div>
      </div>
    </div>  


    <div id="left">
      <div id="left_top">
        <h1>Yahtzee</h1>
      </div>
      <div id="left_main">
        <div v-bind:key="dice.index" v-for="dice in dices" >
          <Dice v-bind:dice="dice" v-on:dice-click="diceClick"/>
        </div>
        <MyCursor />
        <button id='roll_btn' class="btn btn-info" v-on:click="roll">Roll Dice (space)</button>
      </div>
    </div>

    <div id="right" >
      <Table v-bind:items="items" v-on:table-click="tableClick" v-bind:play="this.play"/>
      <div id="info">
        <h5>Maksym Gorbunov</h5>
      </div> 
    </div>

  </div>
</template>




<script>
import Table from './components/Table';
import Dice from './components/Dice';
import MyCursor from './components/MyCursor';
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { constants } from 'crypto';
import { setTimeout } from 'timers';

export default {
  value: 'App',
  components: {
    Table, Dice, MyCursor
  },
  data(){
    return {
      play: false,    
      game: false,
      round: 0,
      roll_count: 0,
      rollBtn: '',
      sum_counter: 0,
      bonus_for_sum: 35,
      bonus_for_sum_required: 63,
      bonus_for_sum_allowed: true,
      cursor: '',
      current: '',
      space_btn: true,
      pressed: false,
      cursor_top_set: false
    }
  },
  


  methods: {
    keyboard(){
      var that  = this,
        space = 32,
        left  = 37,
        right = 39,
        upp   = 38,
        down  = 40
      $('body').bind('keydown', function(e) {
        switch(e.keyCode){
          case space: 
            if(that.space_btn && !that.pressed){
              that.pressed = true
              //that.roll();
              that.rollBtn.classList.add('btn_active')
              setTimeout(() => {
                that.rollBtn.classList.remove('btn_active')
              } ,150)
              that.rollBtn.click() 
            }
            break;
          case left: that.leftArrow(that); break;
          case right: that.rightArrow(that); break;
          case upp: that.uppArrow(that); break;
          case down: that.downArrow(that); break;
          default: break;
        }
      });
    },
    keyUnpressed(){
      var that  = this,
        space = 32
      $('body').bind('keyup', function(e) {
        if(e.keyCode === space){
          that.pressed = false  
        }
      });
    },
    uppArrow(that){
      if(that.current.place === 'home'){
        that.diceClick(that.current)
      }
    },
    downArrow(that){
      if(that.current.place === 'board'){
        that.diceClick(that.current)
      }
    },
    rightArrow(that){
      switch(that.current.id){
        case 1: 
          that.current = that.dices[1]
          that.cursor.style.left = that.current.element.style.left 
          break;
        case 2: 
          that.current = that.dices[2]
          that.cursor.style.left = that.current.element.style.left 
          break;
        case 3: 
          that.current = that.dices[3]
          that.cursor.style.left = that.current.element.style.left 
          break;
        case 4: 
          that.current = that.dices[4]
          that.cursor.style.left = that.current.element.style.left 
          break;
        case 5: break;
        default: break;
      }
    },
    leftArrow(that){
      switch(that.current.id){
        case 1: break;
        case 2: 
          that.current = that.dices[0]
          that.cursor.style.left = that.current.element.style.left 
          break;
        case 3: 
          that.current = that.dices[1]
          that.cursor.style.left = that.current.element.style.left 
          break;
        case 4: 
          that.current = that.dices[2]
          that.cursor.style.left = that.current.element.style.left 
          break;
        case 5:
          that.current = that.dices[3]
          that.cursor.style.left = that.current.element.style.left 
          break;
        default: break;
      }
    },
    createCursor(){
      this.cursor = document.getElementById('my_cursor')
      this.cursor.style.display = 'block'
      this.bindCursorWidth()
    },



    /* ----------------------------- GAME ----------------------------- */
    playAgain(){
      window.location.reload(true); 
    },
    roll(){
      // this.test()
      this.play = true
      if(this.roll_count == 0){
        this.game = true
        for(let i=0; i<5; i++){
          this.dices[i].place = 'board' 
        }
        this.total_dices_on_board = 5
      }
      this.createCursor()
      this.randomize()
      this.mixDicePosition()
      this.roll_count++
      this.matchCombinations()
      if(this.roll_count > 200){
      // if(this.roll_count > 2){
        this.rollBtn.disabled = true
        this.space_btn = false
        this.roll_count = 0
      }
    },
    tableClick(item){
      if(this.game){
        if(item.clickable && !item.used){
          item.poings = item.possible
          this.total(item.poings)
          if(item.combination == 'ones' || item.combination == 'twos' || item.combination == 'threes'
            || item.combination == 'fours' || item.combination == 'fives' || item.combination == 'sixes'){
            this.sum(item.poings)
          }
          this.round ++
          item.used = true
          this.startPosition()
          this.resetDiceValue()
          this.roll_count = 0;
          this.clearPoings()
          this.total_dices_on_board = 0
          this.game = false
          this.rollBtn.disabled = false
          this.cursor.style.display = 'none'
          this.cursor.style.left = this.dices[0].element.style.left
          this.current = this.dices[0]
          this.space_btn = true
          if(this.round >= 13){
          // if(this.round >= 2){
            console.log('finish')
            $('#modal').modal({backdrop: 'static', keyboard: false}, 'show')
            $('#left').css({'filter': 'blur(2px)'}) 
            $('#right').css({'filter': 'blur(2px)'}) 
          }
        }
      }
    },    
    diceClick(dice){
      if(this.game){
        this.current = dice
        this.cursor.style.left = dice.element.style.left
        if(dice.place == 'home'){
          dice.element.style.top = dice.top_board
          dice.element.style.transform = 'rotate(' + dice.rotated + 'deg)'
          dice.place = 'board'
          this.total_dices_on_board++
        } 
        else{
          dice.top_board = dice.element.style.top
          dice.element.style.top = dice.top_home
          dice.element.style.transform = 'rotate(0deg)'
          dice.place = 'home'
          this.total_dices_on_board--
        }
        if(this.boardEmpty()){
          this.rollBtn.disabled = true
          this.space_btn = false
        } else{
          this.rollBtn.disabled = false
          this.space_btn = true
        }
      }
    },
    boardEmpty(){
      for(let dice of this.dices){
        if(dice.place === 'board'){
          return false
        }
      }
      return true
    },
    sum(poings){
      this.items[6].poings += poings
      if(this.items[6].poings > this.bonus_for_sum_required && this.bonus_for_sum_allowed){
        this.items[7].poings += this.bonus_for_sum
        this.items[this.items.length-1].poings += this.bonus_for_sum
        this.bonus_for_sum_allowed = false
      }
    },
    total(poings){
      this.items[this.items.length-1].poings += poings
    },
    resetDiceValue(){
      for(let i=0; i<5; i++){
        this.dices[i].value = i+1
      }
    },


    /* ----------------------------- COMBINATIONS ----------------------------- */
    matchCombinations(){
      this.clearPoings()
      let roll_result = []
      for(let dice of this.dices){
        roll_result.push(dice.value)
      }
      let counted_result = this.countHowManyOfEachDice(roll_result)
      for(let item of this.items){
        switch(item.combination){
          case 'ones':   item.possible = counted_result[0]; break;
          case 'twos':   item.possible = counted_result[1] * 2; break;
          case 'threes': item.possible = counted_result[2] * 3; break;
          case 'fours':  item.possible = counted_result[3] * 4; break;
          case 'fives':  item.possible = counted_result[4] * 5; break;
          case 'sixes':  item.possible = counted_result[5] * 6; break;
          case 'three of kind': this.threeOfKind(counted_result, roll_result, item); break;
          case 'four of kind': this.fourOfKind(counted_result, roll_result, item); break;
          case 'full house': this.fullHouse(counted_result, item); break;
          case 'small straight': this.smallStraight(roll_result, item); break;
          case 'large straight': this.largeStraight(roll_result, item); break;
          case 'chance': this.chance(roll_result, item); break;
          case 'yahtzee': this.yahtzee(roll_result, item); break;
          default: break;
        }  
      }
    },

    yahtzee(roll_result, item){
      let result = true
      for(let i=0; i<4; i++){
        if(roll_result[i] != roll_result[i+1]){
          result = false
        }
      }
      if(result){
        item.possible = 50
      }  
    },

    chance(roll_result, item){
      let result = 0
      for(let number of roll_result){
        result += number
      }
      item.possible = result
    },

    smallStraight(roll_result, item){
      let temp = roll_result.slice(0)
      let sorted = temp
      sorted.sort()
      let result1 = true
      let result2 = true
      for(let i=0; i<3; i++){
        if(sorted[i] != sorted[i+1]-1){
          result1 = false
        }
      }
      for(let i=1; i<4; i++){
        if(sorted[i] != sorted[i+1]-1){
          result2 = false
        }
      }
      if(result1 || result2){
        item.possible = 30
      }  
    },

    largeStraight(roll_result, item){
      let temp = roll_result.slice(0)
      let sorted = temp
      sorted.sort()
      let result = true
      for(let i=0; i<4; i++){
        if(sorted[i] != sorted[i+1]-1){
          result = false
        }
      }
      if(result){
        item.possible = 40
      }  
    },

    fullHouse(counted_result, item){
      let threeExist = false
      let twoExist = false
      for(let number of counted_result){
        if(number == 2){
          twoExist = true
        }    
          if(number == 3){
          threeExist = true
        }
      }  
      if(twoExist && threeExist){
        item.possible = 25
      }
    },

    fourOfKind(counted_result, roll_result, item){
      for(let number of counted_result){
        if(number >= 4){
          item.possible = roll_result.reduce((a, b) => a + b, 0);              }
      }
    },

    threeOfKind(counted_result, roll_result, item){
      for(let number of counted_result){
        if(number >= 3){
          item.possible = roll_result.reduce((a, b) => a + b, 0);              }
      }
    },

    countHowManyOfEachDice(A){
      let result = []
      for(let i=0; i<6; i++){
        result.push(A.filter(x => x === i+1).length)
      }
      return result
    },

    clearPoings(){
      for(let item of this.items){
        item.possible = 0
      }  
    },

    test(){
      this.dices[0].value = 3 
      this.dices[1].value = 3 
      this.dices[2].value = 3 
      this.dices[3].value = 3 
      this.dices[4].value = 3 
    },

    randomize(){
      for(let dice of this.dices){
        if(dice.place == 'board'){
          dice.value = Math.floor(Math.random() * 6) + 1 
        }
      }
    },

    mixDicePosition(){
      for(let i=0; i<5; i++){
        if(this.dices[i].place == 'board' ){
          this.dices[i].element.style.top = (35 - Math.floor(Math.random() * 20) + 1) + '%'
          // this.dices[i].element.style.top = 50 + '%'
          this.dices[i].rotated = Math.floor(Math.random() * 180)
          this.dices[i].element.style.transform = 'rotate(' + this.dices[i].rotated + 'deg)' 
        }
      }
    },

    startPosition(){
      for(let i=0; i<5; i++){
        this.dices[i].element.style.top = this.dices[i].top_home
        this.dices[i].element.style.left = 17*(i+1)+'%'
        this.dices[i].element.style.transform = 'rotate(0deg)' 
      }
    },

    initializeHtmlDices(){
      for(let i=1; i<=5; i++){
        this.dices[i-1].element = document.getElementById(`dice${i}`)
      }
    },
    bindCursorWidth(){
      let that = this
      this.cursor.style.width = that.dices[0].element.clientWidth+'px';
      // if(!this.cursor_top_set){
      //   let top_temp = this.dices[0].element.offsetTop + 1.2*this.dices[0].element.clientHeight + 'px';
      //   let top_copy = top_temp
      //   this.cursor.style.top = top_copy
      //   this.cursor_top_set = true
      // }
      $(window).resize(function(e) {
        let my_cursor = document.getElementById('my_cursor')
        my_cursor.style.width = that.dices[0].element.clientWidth+'px';
      });
    },
    setInfoSize(){
      let rightHeight = document.getElementById('right').clientHeight
      let tableHeight = document.getElementById('my_table').clientHeight
      let infoHeight = document.getElementById('info').clientHeight
      let info = document.getElementById('info')
      console.log('right '+ rightHeight)
      console.log('table '+ tableHeight)
      console.log('info '+ infoHeight)
      let height = rightHeight - tableHeight - 2
      console.log('height '+ height)
      info.style.height =  height + 'px' 
      console.log('info '+ infoHeight)
    
    }
  },
  
  created() {
    this.$store.commit('initDices')
  },
  
  mounted(){
    this.rollBtn = document.getElementById('roll_btn')
    this.$store.commit('sendHome')
    this.keyboard()
    this.keyUnpressed()
    this.current = this.dices[0]
    this.setInfoSize()
  },
  
  computed: {
    ...mapGetters(["dices", "items", "my_cursor"])
  }
}
</script>



<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #app {
    display: grid;
    grid-template-columns: 4fr 2fr; 
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  #left{
    background-color: #fff;
    height: 100vh;
  }
  #right{
    background-color: rgb(204, 141, 141);
    height: 100vh;
    border-left: 2px solid white;
      
  }
  #left_top{
    height: 15%;
    background-color: green;
    padding: 2em;
  }
  #left_top{
    color: white;
    text-align: center;
  }
  #left_top h1{
    letter-spacing: 0.5em;    
  }
  #left_main{
    height: 85%;
    background-color: green;
    position: relative;
  }
  #roll_btn{
    position: absolute;
    bottom: 5%;
    left:50%;
    transform: translateX(-50%);
    /* background-color: #138496;  hover*/
    /* border-color: #117a8b;  hover*/
  
  }
  #roll_btn:active{
    /* color:#ccc;  */
    color:red; 
  }
  .btn_active{
    color:red!important; 
    background-color: #117a8b!important;
    border-color: #10707f!important;
    border: 1px solid transparent!important;
    /* padding: .375rem .75rem!important;
    font-size: 1rem!important;
    line-height: 1.5!important; */
    /* border-radius: .25rem!important; */
    transition: 0.15s!important;
    /* transition-timing-function: ease-in-out!important; */
  }
  .btn:focus,.btn:active, .btn:target, .btn-info:focus,.btn-info:active, .btn-info:target  {
    outline: none !important;
    box-shadow: none !important;
  }
  #my_table{
    /* width: 100%;
    border: 2px solid red;
    display: block;
    margin: auto 0 !important; */
    border-bottom: 2px solid white;
    margin-bottom: 0;
  }

    #my_table td:last-child {
      width: 100%!important;
    }
#info{
  /* display: block; */
  /* height: 100%; */
  background: #ccc;
}
#info h5{
  color: #3E444A;
  padding-top: 8%;
  /* border: 1px solid red; */
  /* line-height: 100%; */
  text-align: center;
  letter-spacing: 0.1em;
  /* margin: auto 0; */
  /* display: block; */
  
}



  @media only screen and (max-width: 800px) {
    body{
      line-height: 0.4;
    }
    #app {
      /* display: grid; */
      grid-template-columns: none; 
      /* grid-template-columns: 4fr 2fr;  */
      height: none;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.4;
    }
#right{
  border-left: none;
  border-top: 2px solid white;
}    


}





</style>
