<template>
  <div class="table-responsive" id="my_table_box">
    <table id='my_table' class="table table-dark table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">combinations</th>
          <th scope="col">poings</th>
          <th scope="col">max</th>
          <th scope="col">story</th>
        </tr>
      </thead>
      <tbody v-for="item in items" v-bind:key="item.index">
        <TableItem v-bind:item="item" v-on:table-click="$emit('table-click', item)" v-bind:play="play"/>
      </tbody>
    </table>
  </div>
</template>

<script>
  import TableItem from './TableItem.vue';

  export default {
    name: "Table",
    props: ["items", "play"],
    components: {TableItem}
  }
</script>

<style scoped>
/* #my_table{
  border: 3px solid white;
  
} */

  .table{
    width: 100%;
    font-size: 12px;
  }
  .table td, .table th{
    padding: 0.5em;
  }
  th{
    text-align: center;
  }
  /* #my_table thead{
    width: 100%;
  } */
/* #my_table td:last-child {
    width: 100%!important;
} */
</style>


