<template>
  <div>
    <router-link to='/uploads' >Upload</router-link>
    <router-link to='/musics'>Music</router-link>
    <router-link to='/images'>Image</router-link>
    <router-link to='/videos'>Video</router-link>
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