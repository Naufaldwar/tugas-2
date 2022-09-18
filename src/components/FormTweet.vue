<template>
  <div class="flex justify-center">
    <div
      class="items-center border border-slate-400 rounded-xl pl-4 pr-4 h-48 grid justify-center"
    >
      <form @submit.prevent="pushTweet()" ref="form" class="grid">
        <textarea
          name=""
          v-model="tweet"
          id=""
          cols="63"
          rows="3"
          placeholder="Wite Something"
          class="border border-slate-400 p-3 mt-5 rounded-md"
          autofocus
        ></textarea>
        <div class=" grid grid-cols-2"><p>{{ tweet.length }}/10</p> <Button
          class="justify-self-end mb-8 mt-4 disabled:cursor-no-drop"
          :disabled="countLength > 10 || tweet==''"
        ></Button></div>
       
      </form>
      
    </div>
  </div>
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
