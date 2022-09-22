<template>
  <div
    class="bg-[#00bd7e] rounded-bl-md rounded-br-md h-14 flex justify-center"
  >
    <div class="w-1/2 flex justify-between items-center">
      <p class="font-medium text-slate-200">Simple Twitter Clone with Vue</p>
      <div class="grid grid-flow-col">
        <p class="font-medium text-sm text-slate-100 col-span-2">{{ this.user.nama }}</p>
        <p class="col-span-2 text-end text-sm">{{ this.user.nickname }}</p>
        <div class="row-span-2 ml-2">
          <Avatar :photo="this.user.photo" :isSmall="true" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["user"],
};
</script>
