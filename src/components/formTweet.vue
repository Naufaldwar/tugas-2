<template>
    <div class="flex justify-center">
        <div class="w-1/2 items-center border border-slate-400 rounded-xl h-44 grid justify-center">
            <textarea name="" id="" cols="67" rows="3" placeholder="Wite Something" class="border border-slate-400 p-3 mt-2 rounded-md" autofocus></textarea>
            <Button class="justify-self-end"></Button>
        </div>
    </div>
</template>

<script>

import Button from './button.vue'
export default{
    components:{
        Button,
    }
}
</script>