<template>
  <div class="w-1/2 grid mx-auto">
    <div v-for="feed in feeds" :key="feed" class="bg-slate-300 my-4">
      <p>{{ feed.user }}</p>
      <p>{{feed.tweet}}</p>
      <p>{{feed.usernick}}</p>
     
    </div>
  </div>
</template>
<script>
export default {
  props: {
    feeds: Array,
  },
};
</script>
