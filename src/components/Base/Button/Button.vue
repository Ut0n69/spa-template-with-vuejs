<template>
  <button class="button" @click="handleClick">
    <div class="button__text">{{ text }}</div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick(): void {
      this.$emit('click')
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/Style/base';

.button {
  width: 200px;
  height: 50px;
  background-color: #08aeea;
  background-image: linear-gradient(45deg, #08aeea 0%, #2af598 100%);
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  border: 0;

  &__text {
    color: #fff;
    font-size: $font-2;
  }
}
</style>
