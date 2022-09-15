<script>
import Navbar from "./components/Navbar.vue";
import poto from './assets/nopal.jpg'
import FormTweet from './components/FormTweet.vue'

export default {
  components: {
    Navbar,
    FormTweet,
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
  <Navbar/>
  <FormTweet class="mt-8"/>
</template>

