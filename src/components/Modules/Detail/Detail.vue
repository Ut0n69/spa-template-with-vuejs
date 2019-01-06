<template>
  <div class="Detail" v-if="memberData">
    <img class="Detail__image" :src="memberData.picture.large" />
    <p class="Detail__text">Name - {{ memberData.name.first }}&nbsp;{{ memberData.name.last }}</p>
    <p class="Detail__text">Age - {{ memberData.dob.age }}</p>
    <p class="Detail__text">Gender - {{ memberData.gender }}</p>
    <p class="Detail__text">Phone - {{ memberData.phone }}</p>
    <p class="Detail__text">Email - {{ memberData.email }}</p>
    <p class="Detail__text">City - {{ memberData.location.city }}</p>
    <Button class="Detail__button" text="Back To Home" @click="move" />
  </div>
  <div class="Detail" v-else>
    <p class="Detail__text">😩</p>
    <p class="Detail__text">ID: {{ $route.query.id }} is Not Found.</p>
    <Button text="Back To Home" @click="move" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Base/Button/Button.vue'
import { IMember } from '@/store/Modules/member'
import { getMemberDetail } from './getMemberDetail'

export default Vue.extend({
  components: {
    Button
  },
  computed: {
    memberData(): IMember {
      return getMemberDetail(Number(this.$route.query.id))
    }
  },
  methods: {
    move() {
      this.$router.push('/')
    }
  },
  beforeRouteEnter(to, from, next) {
    to.query.id ? next() : next('/')
  }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/Style/base';

.Detail {
  padding: 30px;
  margin: 30px auto;
  border-radius: 10px;
  max-width: 700px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.6);
  text-align: center;
  @include mq() {
    margin: 30px;
  }
  &__text {
    font-size: $font-4;
  }
  &__button {
    margin-top: $space-2;
  }
  &__image {
    border-radius: 50%;
  }
}
</style>
