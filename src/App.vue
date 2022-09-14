<script>
import Navbar from "./components/navbar.vue";
import poto from './assets/nopal.jpg'

export default {
  components: {
    Navbar,
  },
  data(){
    return{
      nama:'Naufal Dwi Ariananto',
      photo:poto,
      nickname:'@nopaldwar'
    }
    
  },
  provide(){
    return{
      nama: this.nama,
      photo: this.photo,
      nick: this.nickname
    }
  }
};
</script>

<template>
  
    <Navbar />
  
</template>

