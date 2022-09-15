<template>
  <div v-if="isSmall == true" class="flex">
    <img :src="photo" class="w-[30px] h-[30px] rounded-full self-center" alt="" />
  </div>
  <div v-else><img :src="photo" class="h-20" alt="" /></div>
  
</template>

<script>
export default {
  inject: ["photo"],
  props: {
    isSmall: Boolean,
  },
};
</script>
