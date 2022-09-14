<template>
  <div
    class="bg-[#00bd7e] rounded-bl-md rounded-br-md h-14 flex justify-center"
  >
    <div class="w-1/2 flex justify-between items-center">
      <p class="font-medium text-slate-200">Simple Twitter Clone with Vue</p>
      <div class="grid grid-flow-col">
        <p class="font-medium text-sm text-slate-100 col-span-2">{{ nama }}</p>
        <p class="col-span-2 text-end text-sm">{{ nick }}</p>
        <div class="row-span-2 border w-[40px] h-[40px] rounded-full ml-2 flex justify-center self-center">
          <img
            :src="poto"
            alt="avatar1"
            class="w-[30px] h-[30px] rounded-full self-center"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["nama", "photo", "nick"],

  data() {
    return { poto: this.photo };
  },
};
</script>
