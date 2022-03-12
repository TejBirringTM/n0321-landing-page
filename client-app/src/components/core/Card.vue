<template>
  <div class="card bg-gradient">
    <slot />
  </div>
</template>


<script setup>
  import { defineProps, computed } from "vue";
  // const props = {
  //   variant: {
  //     type: String,
  //     default: "luminesce"
  //   }
  // };
  //
  //
</script>


<style scoped lang="scss">
  .card {
    border-radius: 21px;
    @include box-shadow(.13rem);
    font-size: 0.89rem;
  }
</style>
