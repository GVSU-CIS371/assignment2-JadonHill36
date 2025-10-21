<template>
  <div class="syrup" :style="{ height: dynamicHeights.syrup, backgroundColor: syrupColor }"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { currentSyrup, COLORS, dynamicHeights } from "../stores/beverage";

// Compute syrup color based on selection
const syrupColor = computed(() => COLORS[currentSyrup.value] || 'transparent');
</script>

<style lang="scss" scoped>
.syrup {
  transform: none;
  position: relative;
  width: 100%;
  transition: all 0.7s ease-in-out;
  animation: none !important;
  z-index: 200;
}
</style>
