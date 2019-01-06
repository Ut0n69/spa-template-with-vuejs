<template>
  <div class="MemberCard">
    <h2 class="MemberCard__name">{{ memberList[index].name.first }}&nbsp; {{ memberList[index].name.last }}</h2>
    <img class="MemberCard__image" :src="memberList[index].picture.large" /> <br />
    <Button text="About Me" @click="move" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Base/Button/Button.vue'
import { IMemberState } from '@/store/Modules/member'
import { getMemberList } from './getMemberList'

export default Vue.extend({
  components: {
    Button
  },
  props: {
    index: {
      type: Number
    }
  },
  computed: {
    memberList(): IMemberState {
      return getMemberList()
    }
  },
  methods: {
    move() {
      this.$router.push({
        name: 'detail',
        query: { id: `${this.index}` }
      })
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/Style/base';

$card-width: 300px;

.MemberCard {
  margin: 15px;
  padding: $space-2;
  width: $card-width;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.6);
  &__name {
    font-size: $font-3;
    margin: $space-1;
  }
  &__image {
    width: 100%;
    margin-bottom: $space-2;
  }
}
</style>
