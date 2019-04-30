<template>
  <div>
    <div id="my_cursor"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "MyCursor",
  methods: {
    
  },
  computed: mapGetters(["dices"])
  
  }
</script>

<style scoped>
#my_cursor{
  display: none;
  position: absolute;
  top: 84%;
  left: 15%;
  margin: 0;
  padding: 0;  
  /* width: 9vh; */
  height: 1vh;
  background: #ccc;
  /* transform: translate(-50%, -50%); */
  transition: 0.2s;
}
</style>


