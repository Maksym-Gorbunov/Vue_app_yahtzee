<template>
  <div id="app">
    <!-- Modal, shows on game finish -->
    <div class="modal fade" id="modal" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Yahtzee</h4>
          </div>
          <div class="modal-body">
            <p>Result: {{ this.items[items.length-1].poings }}</p>
          </div>
          <div class="modal-footer">
            <button
              type="reset"
              class="btn btn-default"
              id="play_again_btn"
              @click="playAgain"
            >Play Again</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Play side of screen -->
    <div id="left">
      <div id="left_top">
        <h1>Yahtzee</h1>
        <div id="try" :class="{visible: this.try != 0}">{{this.try}}/3</div>
      </div>
      <div id="left_main">
        <div v-bind:key="dice.index" v-for="dice in dices">
          <Dice v-bind:dice="dice" v-on:dice-click="diceClick"/>
        </div>
        <MyCursor/>
        <button id="roll_btn" class="btn btn-info" v-on:click="roll">Roll Dice (space)</button>
      </div>
    </div>

    <!-- Table side of screen -->
    <div id="right">
      <Table v-bind:items="items" v-on:table-click="tableClick" v-bind:play="this.play"/>
      <div id="info">
        <h5>
          Maksym Gorbunov
          <a
            href="http://www.yahtzee.org.uk/rules.html"
            target="_blank"
            id="info_icon"
          >
            <i class="fas fa-info-circle"></i>
          </a>
        </h5>
      </div>
    </div>
  </div>
</template>


<script>
import Table from "./components/Table";
import Dice from "./components/Dice";
import MyCursor from "./components/MyCursor";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { constants } from "crypto";
import { setTimeout } from "timers";

export default {
  value: "App",
  components: {
    Table,
    Dice,
    MyCursor
  },

  /* Local data for temp calculating, all table and dice data in vuex main.js */
  data() {
    return {
      play: false,
      game: false,
      round: 0,
      roll_count: 0,
      rollBtn: "",
      sum_counter: 0,
      bonus_for_sum: 35,
      bonus_for_sum_required: 63,
      bonus_for_sum_allowed: true,
      bonus_for_second_yahtzee: 100,
      bonus_for_second_yahtzee_allowed: true,
      cursor: "",
      current: "",
      space_btn: true,
      pressed: false,
      cursor_top_set: false,
      cursor_on_table: false,
      selected_item: "",
      try: 0,
      story: []
    };
  },

  methods: {
    /* Unselect table item, keyboard */
    unselectItem() {
      if (this.selected_item !== "") {
        this.selected_item.selected = false;
      }
      this.selected_item = "";
      this.cursor.style.opacity = 1;
      this.cursor_on_table = false;
    },
    /* Click on table when space is pressed */
    rollOnTableWithKey() {
      this.tableClick(this.selected_item);
    },
    /* Go down on table when down arrow is pressed */
    downOnTable() {
      if (this.selected_item.id < 15) {
        if (this.selected_item.id == 5 || this.selected_item.id == 14) {
          if (this.selected_item.id == 5) {
            this.selected_item = this.items[8];
            this.selected_item.selected = true;
            this.items[5].selected = false;
          }
          if (this.selected_item.id == 14) {
            this.selected_item = this.items[0];
            this.selected_item.selected = true;
            this.items[14].selected = false;
          }
        } else {
          this.selected_item = this.items[this.selected_item.id + 1];
          this.selected_item.selected = true;
          this.items[this.selected_item.id - 1].selected = false;
        }
      }
    },
    /* Go upp on table when upp arrow is pressed */
    uppOnTable() {
      if (this.selected_item.id >= 0) {
        if (this.selected_item.id == 8 || this.selected_item.id == 0) {
          if (this.selected_item.id == 8) {
            this.selected_item = this.items[5];
            this.selected_item.selected = true;
            this.items[8].selected = false;
          }
          if (this.selected_item.id == 0) {
            this.selected_item = this.items[14];
            this.selected_item.selected = true;
            this.items[0].selected = false;
          }
        } else {
          this.selected_item = this.items[this.selected_item.id - 1];
          this.selected_item.selected = true;
          this.items[this.selected_item.id + 1].selected = false;
        }
      }
    },
    /* Go on table from dices with right arrow */
    goToTable() {
      this.cursor_on_table = true;
      this.selected_item = this.items[0];
      this.selected_item.selected = true;
      this.cursor.style.opacity = 0.2;
    },
    /* Go from table with left arrow */
    goFromTable() {
      if (this.selected_item !== "") {
        this.cursor_on_table = false;
        this.selected_item.selected = false;
        this.selected_item = "";
        this.cursor.style.opacity = 1;
      }
    },
    /* Play with keyboard, [left, right, upp, down, space] */
    keyboard() {
      var that = this,
        space = 32,
        left = 37,
        right = 39,
        upp = 38,
        down = 40;
      $("body").bind("keydown", function(e) {
        switch (e.keyCode) {
          case space:
            if (that.space_btn && !that.pressed) {
              if (that.cursor_on_table == true) {
                that.rollOnTableWithKey();
                break;
              } else {
                that.pressed = true;
                that.rollBtn.classList.add("btn_active");
                setTimeout(() => {
                  that.rollBtn.classList.remove("btn_active");
                }, 150);
                that.rollBtn.click();
                break;
              }
            }
          case left:
            if (that.cursor_on_table == true) {
              that.goFromTable();
              break;
            } else {
              that.leftArrow(that);
              break;
            }
          case right:
            if (that.cursor_on_table == true) {
              break;
            } else {
              that.rightArrow(that);
              break;
            }
          case upp:
            if (that.cursor_on_table == true) {
              that.uppOnTable();
              break;
            } else {
              that.uppArrow(that);
              break;
            }
          case down:
            if (that.cursor_on_table == true) {
              that.downOnTable();
              break;
            } else {
              that.downArrow(that);
              break;
            }
          default:
            break;
        }
      });
    },
    /* Remove multiple action if space hold to much time */
    keyUnpressed() {
      var that = this,
        space = 32;
      $("body").bind("keyup", function(e) {
        if (e.keyCode === space) {
          that.pressed = false;
        }
      });
    },
    /* Go upp on table, or send dice on board when upp arrow is pressed */
    uppArrow(that) {
      if (that.current.place === "home") {
        that.diceClick(that.current);
      }
    },
    /* Go down on table, or send dice home when down arrow is pressed */
    downArrow(that) {
      if (that.current.place === "board") {
        that.diceClick(that.current);
      }
    },
    /* Go to next dice or to table if current dice is last, when right arrow is pressed */
    rightArrow(that) {
      if (that.cursor !== "") {
        switch (that.current.id) {
          case 1:
            that.current = that.dices[1];
            that.cursor.style.left = that.current.element.style.left;
            break;
          case 2:
            that.current = that.dices[2];
            that.cursor.style.left = that.current.element.style.left;
            break;
          case 3:
            that.current = that.dices[3];
            that.cursor.style.left = that.current.element.style.left;
            break;
          case 4:
            that.current = that.dices[4];
            that.cursor.style.left = that.current.element.style.left;
            break;
          case 5:
            this.goToTable();
            break;
          default:
            break;
        }
      }
    },
    /* Go to previous dice or from table if cursor on table, when right arrow is pressed */
    leftArrow(that) {
      switch (that.current.id) {
        case 1:
          break;
        case 2:
          that.current = that.dices[0];
          that.cursor.style.left = that.current.element.style.left;
          break;
        case 3:
          that.current = that.dices[1];
          that.cursor.style.left = that.current.element.style.left;
          break;
        case 4:
          that.current = that.dices[2];
          that.cursor.style.left = that.current.element.style.left;
          break;
        case 5:
          that.current = that.dices[3];
          that.cursor.style.left = that.current.element.style.left;
          break;
        default:
          break;
      }
    },
    /* Create cursor for keyboard play */
    createCursor() {
      this.cursor = document.getElementById("my_cursor");
      this.cursor.style.display = "block";
      this.bindCursorWidth();
    },

    /* ----------------------------- GAME ----------------------------- */
    /* Reload page and reinit all data, not the best way but pretty good for removing all possible js bugs from old data */
    playAgain() {
      window.location.reload(true);
    },
    /* Roll, you have 3 try */
    roll() {
      this.try++;
      this.play = true;
      if (this.roll_count == 0) {
        this.game = true;
        for (let i = 0; i < 5; i++) {
          this.dices[i].place = "board";
        }
        this.total_dices_on_board = 5;
      }
      this.createCursor();
      this.randomize();
      this.mixDicePosition();
      this.roll_count++;
      this.matchCombinations();
      if (this.roll_count > 2) {
        this.rollBtn.disabled = true;
        this.space_btn = false;
        this.roll_count = 0;
      }
      this.unselectItem();
    },
    /* Action on table click */
    tableClick(item) {
      if (this.game) {
        if (item.clickable && !item.used) {
          item.poings = item.possible;
          this.total(item.poings);
          if (
            item.combination == "ones" ||
            item.combination == "twos" ||
            item.combination == "threes" ||
            item.combination == "fours" ||
            item.combination == "fives" ||
            item.combination == "sixes"
          ) {
            this.sum(item.poings);
          }
          this.round++;
          item.used = true;
          this.startPosition();
          this.resetDiceValue();
          this.roll_count = 0;
          this.clearPoings();
          this.total_dices_on_board = 0;
          this.game = false;
          this.rollBtn.disabled = false;
          this.cursor.style.display = "none";
          this.cursor.style.left = this.dices[0].element.style.left;
          this.current = this.dices[0];
          this.space_btn = true;
          if (this.round >= 13) {
            console.log("finish");
            $("#modal").modal({ backdrop: "static", keyboard: false }, "show");
            $("#left").css({ filter: "blur(2px)" });
            $("#right").css({ filter: "blur(2px)" });
          }
          if (this.selected_item !== "") {
            this.selected_item.selected = false;
          }
          if (item !== "") {
            item.selected = false;
          }
          this.selected_item = "";
          this.cursor.style.opacity = 1;
          this.cursor_on_table = false;

          this.try = 0;
          item.story = this.story;
        }
      }
    },
    /* Action on dice click */
    diceClick(dice) {
      if (this.game) {
        this.unselectItem();
        this.current = dice;
        this.cursor.style.left = dice.element.style.left;
        if (dice.place == "home") {
          dice.element.style.top = dice.top_board;
          dice.element.style.transform = "rotate(" + dice.rotated + "deg)";
          dice.place = "board";
          this.total_dices_on_board++;
        } else {
          dice.top_board = dice.element.style.top;
          dice.element.style.top = dice.top_home;
          dice.element.style.transform = "rotate(0deg)";
          dice.place = "home";
          this.total_dices_on_board--;
        }
        if (this.boardEmpty()) {
          this.rollBtn.disabled = true;
          this.space_btn = false;
        } else {
          this.rollBtn.disabled = false;
          this.space_btn = true;
        }
      }
    },
    /* Check if any of dices on the board */
    boardEmpty() {
      for (let dice of this.dices) {
        if (dice.place === "board") {
          return false;
        }
      }
      return true;
    },
    /* Calculate sum of all simple combinations, from ones' to 'sixes' */
    sum(poings) {
      this.items[6].poings += poings;
      if (
        this.items[6].poings > this.bonus_for_sum_required &&
        this.bonus_for_sum_allowed
      ) {
        this.items[7].poings += this.bonus_for_sum;
        this.items[this.items.length - 1].poings += this.bonus_for_sum;
        this.bonus_for_sum_allowed = false;
      }
    },
    /* Calculate total poings */
    total(poings) {
      this.items[this.items.length - 1].poings += poings;
    },
    /* Reset dice value */
    resetDiceValue() {
      for (let i = 0; i < 5; i++) {
        this.dices[i].value = i + 1;
      }
    },

    /* ----------------------------- COMBINATIONS ----------------------------- */
    /* Math all possible combinations for not used item in the table and calculate possible poings */
    matchCombinations() {
      this.clearPoings();
      let roll_result = [];
      for (let dice of this.dices) {
        roll_result.push(dice.value);
      }
      this.story = roll_result.slice(0);
      let counted_result = this.countHowManyOfEachDice(roll_result);
      for (let item of this.items) {
        switch (item.combination) {
          case "ones":
            item.possible = counted_result[0];
            break;
          case "twos":
            item.possible = counted_result[1] * 2;
            break;
          case "threes":
            item.possible = counted_result[2] * 3;
            break;
          case "fours":
            item.possible = counted_result[3] * 4;
            break;
          case "fives":
            item.possible = counted_result[4] * 5;
            break;
          case "sixes":
            item.possible = counted_result[5] * 6;
            break;
          case "three of kind":
            this.threeOfKind(counted_result, roll_result, item);
            break;
          case "four of kind":
            this.fourOfKind(counted_result, roll_result, item);
            break;
          case "full house":
            this.fullHouse(counted_result, item);
            break;
          case "small straight":
            this.smallStraight(roll_result, item);
            break;
          case "large straight":
            this.largeStraight(roll_result, item);
            break;
          case "chance":
            this.chance(roll_result, item);
            break;
          case "yahtzee":
            this.yahtzee(roll_result, item);
            break;
          default:
            break;
        }
      }
    },
    /* Calculate 'yahtzee' combination, +50p, if second time +100p to bonus */
    yahtzee(roll_result, item) {
      let result = true;
      for (let i = 0; i < 4; i++) {
        if (roll_result[i] != roll_result[i + 1]) {
          result = false;
        }
      }
      if (result) {
        item.possible = 50;
        this.yahtzeeBonus(item);
      }
    },
    /* Calculate 'yahtzee' bonus, +100p */
    yahtzeeBonus(item) {
      if (this.bonus_for_second_yahtzee_allowed && item.poings == 50) {
        this.items[7].poings += this.bonus_for_second_yahtzee;
        this.items[
          this.items.length - 1
        ].poings += this.bonus_for_second_yahtzee;
        this.bonus_for_second_yahtzee_allowed = false;
      }
    },
    /* Calculate sum of all current dices */
    chance(roll_result, item) {
      let result = 0;
      for (let number of roll_result) {
        result += number;
      }
      item.possible = result;
    },
    /* Calculate 'smallStraight' combination, +30p */
    smallStraight(roll_result, item) {
      let temp = roll_result.slice(0);
      let sorted = temp;
      sorted.sort();
      let result1 = true;
      let result2 = true;
      for (let i = 0; i < 3; i++) {
        if (sorted[i] != sorted[i + 1] - 1) {
          result1 = false;
        }
      }
      for (let i = 1; i < 4; i++) {
        if (sorted[i] != sorted[i + 1] - 1) {
          result2 = false;
        }
      }
      if (result1 || result2) {
        item.possible = 30;
      }
    },
    /* Calculate 'largeStraight' combination, +40p */
    largeStraight(roll_result, item) {
      let temp = roll_result.slice(0);
      let sorted = temp;
      sorted.sort();
      let result = true;
      for (let i = 0; i < 4; i++) {
        if (sorted[i] != sorted[i + 1] - 1) {
          result = false;
        }
      }
      if (result) {
        item.possible = 40;
      }
    },
    /* Calculate 'fullHouse' combination, +25p */
    fullHouse(counted_result, item) {
      let threeExist = false;
      let twoExist = false;
      for (let number of counted_result) {
        if (number == 2) {
          twoExist = true;
        }
        if (number == 3) {
          threeExist = true;
        }
      }
      if (twoExist && threeExist) {
        item.possible = 25;
      }
    },
    /* Calculate 'fourOfKind' combination */
    fourOfKind(counted_result, roll_result, item) {
      for (let number of counted_result) {
        if (number >= 4) {
          item.possible = roll_result.reduce((a, b) => a + b, 0);
        }
      }
    },
    /* Calculate 'threeOfKind' combination */
    threeOfKind(counted_result, roll_result, item) {
      for (let number of counted_result) {
        if (number >= 3) {
          item.possible = roll_result.reduce((a, b) => a + b, 0);
        }
      }
    },
    /* Calculate how many dice has the same value */
    countHowManyOfEachDice(A) {
      let result = [];
      for (let i = 0; i < 6; i++) {
        result.push(A.filter(x => x === i + 1).length);
      }
      return result;
    },
    /* Clear dice value */
    clearPoings() {
      for (let item of this.items) {
        item.possible = 0;
      }
    },
    /* Test method, call in roll() first line and comment out randomize(), test your combination */
    test() {
      this.dices[0].value = 3;
      this.dices[1].value = 3;
      this.dices[2].value = 3;
      this.dices[3].value = 3;
      this.dices[4].value = 3;
    },
    /* Randomize dice value on roll */
    randomize() {
      for (let dice of this.dices) {
        if (dice.place == "board") {
          dice.value = Math.floor(Math.random() * 6) + 1;
        }
      }
    },
    /* Randomize dice position on board */
    mixDicePosition() {
      for (let i = 0; i < 5; i++) {
        if (this.dices[i].place == "board") {
          this.dices[i].element.style.top =
            35 - Math.floor(Math.random() * 20) + 1 + "%";
          this.dices[i].rotated = Math.floor(Math.random() * 180);
          this.dices[i].element.style.transform =
            "rotate(" + this.dices[i].rotated + "deg)";
        }
      }
    },
    /* Home positions for dices */
    startPosition() {
      for (let i = 0; i < 5; i++) {
        this.dices[i].element.style.top = this.dices[i].top_home;
        this.dices[i].element.style.left = 15 * (i + 1) + "%";
        // this.dices[i].element.style.left = 17*(i+1)+'%'
        this.dices[i].element.style.transform = "rotate(0deg)";
      }
    },
    /* Initial dices */
    initializeHtmlDices() {
      for (let i = 1; i <= 5; i++) {
        this.dices[i - 1].element = document.getElementById(`dice${i}`);
      }
    },
    /* Bind cursor to dise, keyboard */
    bindCursorWidth() {
      let that = this;
      this.cursor.style.width = that.dices[0].element.clientWidth + "px";
      $(window).resize(function(e) {
        let my_cursor = document.getElementById("my_cursor");
        my_cursor.style.width = that.dices[0].element.clientWidth + "px";
      });
    }
  },

  created() {
    this.$store.commit("initDices");
  },
  mounted() {
    this.rollBtn = document.getElementById("roll_btn");
    this.$store.commit("sendHome");
    this.keyboard();
    this.keyUnpressed();
    this.current = this.dices[0];
  },
  computed: {
    ...mapGetters(["dices", "items", "my_cursor"])
  }
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
#left {
  background-color: #fff;
  height: 100vh;
}
#right {
  display: flex;
  flex-direction: column;
  background-color: rgb(204, 141, 141);
  height: 100vh;
  border-left: 2px solid white;
}
#left_top {
  height: 15%;
  background-color: green;
  padding: 2em;
  color: white;
  text-align: center;
  position: relative;
}
#left_top h1 {
  letter-spacing: 0.5em;
}
#left_main {
  height: 85%;
  background-color: green;
  position: relative;
}
#roll_btn {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
}
#roll_btn:active {
  color: red;
}
.btn_active {
  color: red !important;
  background-color: #117a8b !important;
  border-color: #10707f !important;
  border: 1px solid transparent !important;
  transition: 0.15s !important;
}
.btn:focus,
.btn:active,
.btn:target,
.btn-info:focus,
.btn-info:active,
.btn-info:target {
  outline: none !important;
  box-shadow: none !important;
}
#my_table {
  border-bottom: 2px solid white;
  margin-bottom: 0;
  border-collapse: separate;
}

#my_table td:last-child {
  width: 100% !important;
}
#info {
  background: #ccc;
  flex-grow: 1;
}
#info h5 {
  color: #3e444a;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 85%;
  letter-spacing: 0.1em;
}
#info_icon {
  margin-left: 15%;
}
#try {
  width: 3em;
  height: 3em;
  vertical-align: middle;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0);
  opacity: 0;
  z-index: 1;
  text-align: center;
  padding-top: 1em;
  color: white;
  background: #17a2b8;
  border-radius: 50%;
  line-height: 1em;
  transition: 1s;
}
.visible {
  opacity: 1 !important;
}

@media only screen and (max-width: 800px) {
  body {
    line-height: 0.4;
  }
  #app {
    grid-template-columns: none;
    height: none;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  #right {
    border-left: none;
  }
}
</style>
