<template>
  <div v-if="isSmall == true" class="flex">
    <img
      :src="photos"
      class="w-[30px] h-[30px] rounded-full self-center"
      alt=""
    />
  </div>
  <div v-else>
    <div class="w-[48px] h-[48px] border-white border rounded-full self-center grid">
      <img
        :src="photo"
        class="w-[40px] h-[40px] rounded-full self-center flex justify-self-center"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  inject: ["photos"],
  props: {
    isSmall: Boolean,
    photo: String,
  },
};
</script>
