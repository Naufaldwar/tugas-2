<template>
  <div class="w-1/2 flex flex-col-reverse mx-auto">
    <div
      v-for="feed in feeds"
      :key="feed"
      class="bg-slate-200 my-2 p-6 grid rounded-lg"
    >
      <div class="flex">
        <div>
          <Avatar :photo="feed.photo" />
        </div>
        <div class="grid ml-4 grid-flow-row">
          <div class="flex gap-2">
            <p class="row-span-3 font-medium text-slate-800">{{ feed.user }}</p>
            <p class="row-span-2 text-sm self-center text-green-600 hover:cursor-pointer">
              {{ feed.usernick }}
            </p>
          </div>
          <p class="col-span-2 text-slate-600">{{ feed.tweet }}</p>
        </div>
      </div>

      <button class="w-full h-8 bg-slate-100 flex justify-start text-xs mt-4 pl-2 text-slate-400 rounded-md"><span class="self-center">Reply</span></button>
    </div>
  </div>
</template>
<script>
import Avatar from "./Avatar.vue";
export default {
  components: { Avatar },
  props: {
    feeds: Array,
  },
  inject: ["nama", "photo", "nick", "tweet"],
};
</script>
