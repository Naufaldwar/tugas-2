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
        ref="input"
      ></textarea>
      <div class="grid grid-cols-2">
        <p>{{ tweet.length }}/10</p>
        <div class="flex justify-self-end gap-2">
          <!-- <div
            class="bg-red-500 mb-4 mt-4 py-2 px-4 rounded-md text-white font-medium hover:cursor-pointer" v-if="isCancel" @click="show"
          >
          <p>Cancel</p>
            
          </div> -->
          <Button
            type="button"
            v-if="isCancel"
            @click="show"
            :isCancel="true"
            class="my-4"
          ></Button>
          <Button
            v-if="countLength > 10 || tweet == ''"
            :isDisable="true"
            class="my-4 disabled:cursor-no-drop"
            :disabled="countLength > 10 || tweet == ''"
          ></Button>
          <Button v-else class="my-4" :isPrimary="true"></Button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  emits: ["tweets", "show"],
  props: { tweetpost: Array, number: Number, isCancel: Boolean },
  components: {
    Button,
  },
  data() {
    return {
      tweet: "",
      length: 0,
    };
  },
  mounted() {
    this.$refs.input.focus();
  },
  computed: {
    countLength() {
      return this.tweet.length;
    },
  },
  methods: {
    pushTweet() {
      this.$emit("tweets", this.tweet, this.number);
      this.$refs.form.reset();
      this.tweet = "";
    },
    show() {
      console.log(this.isCancel);
      this.$emit("show", this.isCancel);
    },
  },
};
</script>
