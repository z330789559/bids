<template>
<span class="type-it"></span>
</template>
<script setup>
import TypeIt from 'typeit'
import { ref, onMounted } from 'vue'
const props = defineProps({speed: {
      type: Number,
      default: 1000,
    },
    className: {
      type: String,
      default: 'type-it',
    },
    cursor: {
      type: Boolean,
      default: true,
    }})


   const mounted =function(){
       
    }

    onMounted(mounted)
</script>
<style>

</style>