<template>
  <tr >
    <!-- Combinations -->
    <td :class="{total: item.combination === 'total score',
                      sum: item.combination === 'sum' || item.combination === 'bonus'}">
      {{ item.combination }} 
    </td>

    <!-- Poings -->
    <td :class="{total: item.combination === 'total score',
                      sum: item.combination === 'sum' || item.combination === 'bonus', 
                      used: item.used, 
                      clickable: item.clickable, 
                      possible: play && !item.used && item.combination!=='total score' && item.combination!=='sum' 
                        && item.combination!=='bonus',
                      selected: item.selected == true  }" 
        v-bind="showPoings()" 
        @click="$emit('table-click', item)" 
        class='text_center' >
      {{ currentPoings }}
    </td>

    <!-- Taken poings / Max possible poings -->
    <td :class="{total: item.combination === 'total score',
                      sum: item.combination === 'sum' || item.combination === 'bonus',}" class='text_center'>
      {{item.poings}}/{{item.max}}
    </td>

    <!-- Story -->
    <td :class="{total: item.combination === 'total score',
                      sum: item.combination === 'sum' || item.combination === 'bonus'}" class="story_td">
      <!-- {{item.story}} -->
      <Story v-bind:story="item.story"/>
    </td>
  </tr>
</template>

<script>
  import Story from './Story.vue';

  export default {
    name: "TableItem",  
    props: ["item", "play"],
    components: {Story},  
    data(){
      return {currentPoings: 0} 
    },  
    methods: {
      showPoings(){
        if(this.item.poings == 0){
          this.currentPoings = this.item.possible;
        } else{
          this.currentPoings = this.item.poings;

        }
      }
    },  
    created(){
      this.showPoings();
    }
  }
</script>

<style scoped>
  td{
    /* border: 5px solid transparent !important; */
    cursor: default;
    min-width: 6em;
    text-transform: capitalize;
  }
  tr{
    border: 5px solid transparent !important;
    
  }
  .table{
    font-size: 12px;
    
  }
  .table td, .table th{
    padding: 0.5em;
    /* cursor: default; */
  }
  .total{
    text-transform: uppercase;
    background-color: green;
    text-align: center;
    vertical-align: middle;
  }
  .sum{
    text-transform: uppercase;
    background-color: #17A2B8;
  }
  .used{
    color: white;
    opacity: 0.8;
    cursor: default !important;
  }
  .clickable{
    cursor: pointer;
    /* color: blue; */
  }
  .possible{
    color: red;
    /* opacity: 1; */
  }
  .text_center{
    text-align: center;
  }
  .selected{
    border-color: yellow;

    /* background-color: aqua; */
  }
  
  .story_td{
    /* opacity: 0.3; */
    padding: 0 !important;
    vertical-align: middle;
  }
</style>


