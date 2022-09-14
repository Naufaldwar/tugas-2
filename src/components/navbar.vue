<template>
  <div
    class="bg-[#00bd7e] rounded-bl-md rounded-br-md h-14 flex justify-center"
  >
    <div class="w-1/2 flex justify-between items-center">
      <p class="font-medium text-slate-200">Simple Twitter Clone with Vue</p>
      <div class="grid grid-flow-col  ">
        <p class="font-medium text-slate-100 col-span-2" >{{nama}}</p>
        <p class="col-span-2 text-end">@naufal</p>
        <img :src="poto" alt="avatar1" class="max-w-[50px] rounded-full ml-4 row-span-2">
      </div>
    </div>
  </div>
</template>
<script>


export default{inject:['nama','photo'],

data(){
  return{poto:this.photo}
  
}}
    

</script>
