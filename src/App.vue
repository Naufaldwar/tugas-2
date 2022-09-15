<script>
import Navbar from "./components/navbar.vue";
import poto from './assets/nopal.jpg'
import FormTweet from './components/formTweet.vue'

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

