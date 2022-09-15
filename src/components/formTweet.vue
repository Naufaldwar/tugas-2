<template>
    <div class="flex justify-center">
        <div class="w-1/2 items-center border border-slate-400 rounded-xl h-48 grid justify-center">
            <textarea name="" v-model="tweet" id="" cols="67" rows="3" placeholder="Wite Something" class="border border-slate-400 p-3 mt-5 rounded-md" autofocus></textarea>
            <p>{{length}}/10</p>
            <Button class="justify-self-end mb-8"></Button>
        </div>
    </div>
</template>

<script>

import Button from './button.vue'
export default{
    components:{
        Button,
    },
    data(){
        return{
            tweet:"",
            length:0
        }
    },
    computed:{
        length(){
            return this.tweet.length
        }
    }
}
</script>