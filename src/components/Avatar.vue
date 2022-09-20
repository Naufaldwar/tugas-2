<template>
  <div
    v-if="isSmall == true"
    class="grid justify-items-center content-center w-[40px] h-[40px] border-slate-300 border rounded-full"
  >
    <img
      :src="photo"
      class="w-[30px] h-[30px] rounded-full self-center"
      alt=""
    />
  </div>
  <div v-else>
    <div
      class="w-[48px] h-[48px] border-slate-300 border rounded-full self-center grid"
    >
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
  name: "Avatar",
  props: {
    isSmall: Boolean,
    photo: String,
  },
  
};
</script>
