<template>
  <div>
    <router-link to='/files'>File</router-link>
    <center>
      <router-view></router-view>
    </center>
  </div>
</template>

<script>
export default {
  name:'App',
  data() {
    return {

    };
  },

}
</script>