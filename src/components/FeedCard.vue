<template>
    <div class="w-1/2 flex mx-auto ">
        <p v-for="feed in feeds" :key="feed">{{feed.user}}</p>
    </div>

</template>
<script>
    export default{
        props:{
            feeds: Array
        }
    }
</script>
