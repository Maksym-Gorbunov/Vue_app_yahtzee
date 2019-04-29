<template>
  <tr >
    <td :class="{total: item.combination === 'total score',
                      sum: item.combination === 'sum' || item.combination === 'bonus'}">
      {{ item.combination }} 
    </td>
    <td :class="{total: item.combination === 'total score',
                      sum: item.combination === 'sum' || item.combination === 'bonus', 
                      used: item.used, 
                      clickable: item.clickable, 
                      possible: play && !item.used && item.combination!=='total score' && item.combination!=='sum' 
                        && item.combination!=='bonus'}" 
        v-bind="showPoings()" 
        @click="$emit('table-click', item)" 
        class='text_center'>
      {{ currentPoings }}
    </td>
    <td :class="{total: item.combination === 'total score',
                      sum: item.combination === 'sum' || item.combination === 'bonus',}" class='text_center'>
      <!-- ({{item.poings}} of {{item.possible}}) -->
      {{item.poings}}/{{item.max}}
    </td>

    <td :class="{total: item.combination === 'total score',
                      sum: item.combination === 'sum' || item.combination === 'bonus'}">
      {{item.story}}
    </td>
  </tr>
</template>

<script>
  export default {
    name: "TableItem",  
    props: ["item", "play"],  
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
    cursor: default;
    min-width: 6em;
    text-transform: capitalize;
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
  }
  .sum{
    text-transform: uppercase;
    background-color: blue;
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
</style>


