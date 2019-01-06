<template>
  <div class="Error">
    <h1 class="Error__title">Error</h1>
    <p class="Error__text">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getErrorMessage } from './getErrorMessage'

export default Vue.extend({
  computed: {
    errorMessage(): string {
      return getErrorMessage()
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/Style/base';

.Error {
  margin: 15px;
  padding: $space-2;
  border-radius: 10px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.6);

  &__title {
    color: #f32424;
    font-size: $font-4;
  }
  &__text {
    font-size: $font-2;
  }
}
</style>
