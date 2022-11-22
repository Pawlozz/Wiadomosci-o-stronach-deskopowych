<template lang="html">
  <div id="background"></div>
</template>
<script>
export default {};
</script>
<style lang="scss">
#background {
  width: 100vw;
  height: 100vh;
  background: url('../assets/back.jpg');
  z-index: -1000;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
