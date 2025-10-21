<template>
  <div class="baseBeverage" :style="{ height: dynamicHeights.base, backgroundColor: baseColor }"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { currentBase, COLORS, dynamicHeights } from "../stores/beverage"

// Base color follows selected beverage
const baseColor = computed(() => COLORS[currentBase.value] || '#6F4E37')
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  bottom: 0;
  transition: all 0.7s ease-in-out;
  z-index: 300;
  border-radius: 0 0 2.2em 2.2em;
}
</style>
