<template>
  <div class="el-form">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ElForm'
}
</script>
<script setup lang="ts">
import { PropType, provide } from 'vue'
import { Rules } from 'async-validator'
const props = defineProps({
  model: { type: Object, required: true },
  rules: { type: Object as PropType<Rules> }
})
</script>

<style scoped lang="scss">
@import '../styles/mixin.scss';
@include b(form) {
  margin-top: 20px;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
}
</style>
