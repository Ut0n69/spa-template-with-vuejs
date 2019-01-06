<template>
  <header class="header">
    <h1 class="header__title"><a href="/">Member</a></h1>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
@import '../../../assets/Style/base';

$header-height: 120px;
$header-height-sp: 80px;

.header {
  height: $header-height;
  background-color: #08aeea;
  background-image: linear-gradient(45deg, #08aeea 0%, #2af598 100%);
  margin-bottom: $space-2;

  @include mq() {
    height: $header-height-sp;
  }

  &__title {
    font-size: $font-5;
    line-height: $header-height;
    text-align: center;

    @include mq() {
      font-size: $font-4;
      line-height: $header-height-sp;
    }

    & a {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
