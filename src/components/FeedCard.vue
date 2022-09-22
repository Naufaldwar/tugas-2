<template>
  <div class="bg-slate-200 grid rounded-lg py-4 px-4">
    <div class="flex shadow-md rounded-md bg-slate-100 p-2">
      <div>
        <Avatar :photo="feed.photo" :isSmall="feed.isSmall" />
      </div>
      <div class="grid ml-4 grid-flow-row">
        <div class="flex gap-2">
          <p class="row-span-3 font-medium text-slate-800">{{ feed.user }}</p>
          <p
            class="row-span-2 text-sm self-center text-green-600 hover:cursor-pointer"
          >
            {{ feed.usernick }}
          </p>
        </div>
        <p class="col-span-2 text-slate-600">{{ feed.tweet }}</p>
        <div class="mt-3 flex">
          <div class="flex hover:cursor-pointer" @click="toggle">
            <div>
              <Icon :show_heart="feed.heart" :isHeart="true"/>
            </div>
          </div>
          <p class="ml-1 text-slate-800">{{ feed.like }}</p>
          <div class="mt-[2px] ml-2 h-7" @click="retweet">
            <Icon :isRetweet="true"/>
          </div>
          <p class="ml-1 text-slate-800">{{ feed.retweet }}</p>
          <div class="ml-2" v-if="feed.delete" @click="deleteFeed(index)">
            <Icon :isDelete="true"/>
          </div>
        </div>
      </div>
    </div>

    <button
      class="w-full h-8 shadow-md bg-slate-100 flex justify-start text-xs mt-4 pl-2 text-slate-500 rounded-md"
      v-show="feed.reply"
      @click="toggleReply"
    >
      <span class="self-center">Reply</span>
    </button>

    <div
      v-show="feed.reply == false"
      class="bg-slate-100 rounded-lg p-4 mt-4 shadow-md w-full justify-self-center"
    >
      <FormTweet
        @tweets="handleComment"
        @show="toggleReply"
        :isCancel="true"
        :number="this.index"
      />
    </div>
    <div v-if="hasChildren" class="flex flex-col-reverse">
      <FeedCard
        v-for="(comment, index) in feed.comments"
        :feed="comment"
        :index="index"
        @delete="handleDeleteComment(this.index, index)"
        :key="comment"
        class="px-4 py-2"
      />
    </div>
  </div>
</template>
<script>
import Icon from "./Icon.vue";
export default {
  components: { Icon },
  name: "FeedCard",
  emits: ["delete", "comment", "deleteComment"],
  props: { feed: Object, index: Number },
  computed: {
    hasChildren() {
      const { comments } = this.feed;
      return comments && comments.length > 0;
    },
  },
  methods: {
    toggle() {
      this.feed.heart = !this.feed.heart;

      if (this.feed.heart == false) {
        this.feed.like++;
      } else {
        this.feed.like--;
      }
    },
    retweet() {
      this.feed.retweet++;
    },

    deleteFeed(index) {
      this.$emit("delete", index);
    },

    toggleReply() {
      this.feed.reply = !this.feed.reply;
    },

    handleComment(tweet, number) {
      this.$emit("comment", tweet, number);
    },

    handleDeleteComment(number, index) {
      console.log(index);
      this.$emit("deleteComment", number, index);
    },
  },
};
</script>
