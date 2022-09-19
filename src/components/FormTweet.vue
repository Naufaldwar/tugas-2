<template>
  
    
      <form @submit.prevent="pushTweet()" ref="form" class="grid">
        <textarea
          name=""
          v-model="tweet"
          id=""
          rows="3"
          placeholder="Wite Something"
          class="border border-slate-400 p-3 rounded-md"
          autofocus
        ></textarea>
        <div class=" grid"><p>{{ tweet.length }}/10</p> <Button
          class="justify-self-end mb-8  disabled:cursor-no-drop"
          :disabled="countLength > 10 || tweet==''"
        ></Button></div>
      </form>
    
</template>

<script>
import Button from "./Button.vue";
export default {
  emits: ["tweets"],
  props:{tweetpost:Array},
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
      this.$emit("tweets", this.tweet);
      this.$refs.form.reset()
      this.tweet=""
      
    },
  },
};
</script>
