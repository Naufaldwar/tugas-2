<template>
  <div class="flex justify-center">
    
      <form @submit.prevent="pushTweet()" ref="form" class="grid w-full">
        <textarea
          name=""
          v-model="tweet"
          id=""
          
          rows="3"
          placeholder="Wite Something"
          class="border border-slate-400 p-3 mt-5 rounded-md"
          autofocus
        ></textarea>
        <div class=" grid grid-cols-2"><p>{{ tweet.length }}/10</p> <Button
          class="justify-self-end mb-4 mt-4 disabled:cursor-no-drop"
          :disabled="countLength > 10 || tweet==''"
        ></Button></div>
       
      </form>
      
    </div>
  
</template>

<script>
import Button from "./Button.vue";
export default {
  emits: ["tweets"],
  props:{tweetpost:Array,number:Number},
  components: {
    Button,
  },
  data() {
    return {
      tweet: "",
      length: 0,
    };
  },
  computed: {
    countLength() {
      return this.tweet.length;
    },
  },
  methods: {
    pushTweet() {
      this.$emit("tweets", this.tweet,this.number);
      this.$refs.form.reset()
      this.tweet=""
      
    },
  },
};
</script>
