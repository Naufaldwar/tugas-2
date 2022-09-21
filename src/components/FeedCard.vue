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
            <div v-if="feed.heart">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z"
                  stroke="#00BD7E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div v-else>
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4193 4.40608C23.047 3.54386 22.51 2.76253 21.8386 2.10582C21.1667 1.44715 20.3745 0.923711 19.505 0.563973C18.6035 0.189466 17.6365 -0.00222744 16.6602 1.95269e-05C15.2906 1.95269e-05 13.9544 0.375062 12.7931 1.08348C12.5153 1.25294 12.2514 1.43907 12.0014 1.64187C11.7513 1.43907 11.4874 1.25294 11.2096 1.08348C10.0484 0.375062 8.71211 1.95269e-05 7.34251 1.95269e-05C6.35628 1.95269e-05 5.40062 0.18893 4.49774 0.563973C3.62542 0.925126 2.83921 1.44463 2.16414 2.10582C1.49183 2.76179 0.95477 3.54331 0.5834 4.40608C0.197245 5.3034 0 6.25629 0 7.23696C0 8.16207 0.188911 9.12606 0.563954 10.1067C0.877878 10.9263 1.32793 11.7764 1.903 12.6348C2.81421 13.9933 4.06713 15.4101 5.62287 16.8464C8.20094 19.2272 10.754 20.8719 10.8624 20.9385L11.5208 21.3608C11.8125 21.5469 12.1875 21.5469 12.4792 21.3608L13.1376 20.9385C13.246 20.8691 15.7963 19.2272 18.3771 16.8464C19.9328 15.4101 21.1858 13.9933 22.097 12.6348C22.672 11.7764 23.1249 10.9263 23.436 10.1067C23.8111 9.12606 24 8.16207 24 7.23696C24.0027 6.25629 23.8055 5.3034 23.4193 4.40608V4.40608Z"
                  fill="#00BD7E"
                />
              </svg>
            </div>
          </div>
          <p class="ml-1 text-slate-800">{{ feed.like }}</p>
          <div class="mt-[2px] ml-2 h-7" @click="retweet">
            <svg
              width="25"
              height="19"
              viewBox="0 0 25 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="hover:cursor-pointer"
            >
              <path
                d="M22.6338 7.33333L21.2369 8.49123V4.74185C21.2369 3.45531 20.8488 2.34336 20.0728 1.40602C19.2967 0.468672 18.3654 0 17.2789 0H7.31392C6.2274 0 5.2961 0.468672 4.52001 1.40602C3.74393 2.34336 3.35589 3.45531 3.35589 4.74185C3.35589 5.07268 3.44902 5.34837 3.63528 5.56892C3.82154 5.78947 4.05436 5.89975 4.33375 5.89975C4.64419 5.89975 4.89254 5.78947 5.0788 5.56892C5.26506 5.34837 5.35819 5.07268 5.35819 4.74185C5.35819 4.0802 5.55221 3.51963 5.94025 3.06015C6.32829 2.60067 6.78618 2.37093 7.31392 2.37093H17.2789C17.8066 2.37093 18.2645 2.60067 18.6525 3.06015C19.0406 3.51963 19.2346 4.0802 19.2346 4.74185V8.38095L17.8376 7.16792C17.2478 6.76358 16.7977 6.89223 16.4872 7.55388C16.1147 8.2523 16.2079 8.80368 16.7666 9.20802L20.259 11.7995L23.798 9.20802C24.3257 8.80368 24.4344 8.2523 24.1239 7.55388C23.6583 7.00251 23.1616 6.92899 22.6338 7.33333ZM20.259 12.9574C19.9486 12.9574 19.7002 13.0677 19.514 13.2882C19.3277 13.5088 19.2346 13.7845 19.2346 14.1153C19.2346 14.7769 19.0406 15.3375 18.6525 15.797C18.2645 16.2565 17.8066 16.4862 17.2789 16.4862H7.31392C6.78618 16.4862 6.32829 16.2565 5.94025 15.797C5.55221 15.3375 5.35819 14.7769 5.35819 14.1153V10.4762L6.75514 11.6892C6.81723 11.6892 6.91036 11.7076 7.03453 11.7444C7.1587 11.7811 7.25183 11.7995 7.31392 11.7995C7.56227 11.7995 7.82614 11.6341 8.10553 11.3033C8.47805 10.6048 8.38492 10.0535 7.82614 9.64912L4.33375 7.05764L0.794806 9.64912C0.267068 10.0535 0.158416 10.6048 0.46885 11.3033C0.810328 11.9282 1.27598 12.0568 1.8658 11.6892L3.26276 10.4762V14.1153C3.26276 15.4018 3.6508 16.5138 4.42688 17.4511C5.20297 18.3885 6.13427 18.8571 7.22079 18.8571H17.1857C18.2722 18.8571 19.2035 18.3885 19.9796 17.4511C20.7557 16.5138 21.1438 15.4018 21.1438 14.1153C21.1748 13.7845 21.105 13.5088 20.9342 13.2882C20.7635 13.0677 20.5384 12.9574 20.259 12.9574Z"
                fill="#00BD7E"
              />
            </svg>
          </div>
          <p class="ml-1 text-slate-800">{{ feed.retweet }}</p>
          <div class="ml-2" v-if="feed.delete" @click="deleteFeed(index)">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="hover:cursor-pointer"
            >
              <path
                d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
                fill="#00BD7E"
              />
            </svg>
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
      <FormTweet @tweets="handleComment" :number="index" />
    </div>
    <div v-if="hasChildren" class="flex flex-col-reverse">
      <FeedCard
        v-for="(comment, index) in feed.comments"
        :feed="comment"
        :index="index"
        :key="comment"
        class="px-4 py-2"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "FeedCard",
  emits: ["delete", "comment" ,"deleteComment"],
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
      // console.log(index)
      this.$emit("delete", index);
    },

    toggleReply() {
      this.feed.reply = !this.feed.reply;
    },

    handleComment(tweet, number) {
      this.$emit("comment", tweet, number);
    },

    // handleDeleteComment(index){
    //   console.log(index)
    // }
  },
};
</script>
