<template>
  <div class="froth" :style="{ height: dynamicHeights.creamer }">
    <template v-if="currentCreamer !== 'No Creamer'">
      <div
        v-for="i in 5"
        :key="i"
        class="foam"
        :style="{ backgroundColor: foamColor }"
      ></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { currentCreamer, COLORS, dynamicHeights } from "../stores/beverage"

// Foam color matches selected creamer
const foamColor = computed(() => COLORS[currentCreamer.value] || '#e4e0d2')
</script>

<style lang="scss" scoped>
.froth {
  background-color: var(--mug-color);
  overflow: visible;
  transform: none;
  position: relative;
  width: 100%;
  transition: all 0.7s ease-in-out;
  animation: none;
  z-index: 100; /* below syrup */
}

.foam {
  display: block;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  position: absolute;
  z-index: 110; /* above base but below syrup */
}

.foam:nth-child(1) { top: 0px; left: -3px; }
.foam:nth-child(2) { top: 0px; left: 55px; }
.foam:nth-child(3) { width: 30px; height: 30px; border-radius: 40px; top: 3px; left: 30px; }
.foam:nth-child(4) { width: 30px; height: 30px; border-radius: 45px; top: 5px; right: -2px; }
.foam:nth-child(5) { top: 2px; right: 10px; }
</style>
