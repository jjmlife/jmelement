<template>
  <div class="el-form-item">
    <slot />
    <p v-if="error" class="error">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ElFormItem'
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
const error = ref('')
</script>

<style scoped lang="scss">
@import '../styles/mixin.scss';
@include b(form-item) {
  margin-bottom: 22px;
  label {
    line-height: 1.2;
    margin-bottom: 5px;
    display: inline-block;
  }
  & .el-form-item {
    margin-bottom: 0;
  }
}
.error {
  color: red;
}
</style>
