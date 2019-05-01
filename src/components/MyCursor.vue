<template>
  <div>
    <div id="my_cursor"></div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MyCursor",
  computed: mapGetters(["dices"])
};
</script>


<style scoped>
#my_cursor {
  display: none;
  position: absolute;
  top: 84%;
  left: 15%;
  margin: 0;
  padding: 0;
  height: 1vh;
  background: #ccc;
  transition: 0.2s;
}
</style>


