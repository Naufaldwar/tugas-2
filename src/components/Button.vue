<template>
  <button
    v-if="isPrimary"
    class="bg-[#00bd7e] rounded-md font-medium text-white px-5 py-2"
  >
    Tweet
  </button>
  <button
    v-else-if="isDisable"
    class="bg-[#7fb9a6] rounded-md font-medium text-white px-5 py-2"
  >
    Tweet
  </button>
  <button
    v-else-if="isCancel"
    class="bg-[#e9364e] rounded-md font-medium text-white px-5 py-2"
  >
    Cancel
  </button>
</template>

<script>
export default {
  props: {
    isPrimary: Boolean,
    isDisable: Boolean,
    isCancel: Boolean,
  },
};
</script>
