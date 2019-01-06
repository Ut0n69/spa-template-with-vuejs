<template>
  <div class="MemberList">
    <div class="MemberList__card" v-for="(member, index) in memberList" :key="index"><MemberCard :index="index" /></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MemberCard from '@/components/Modules/Member/MemberCard.vue'
import { IMemberState } from '@/store/Modules/member'
import { mapState } from 'vuex'
import { getMemberList } from './getMemberList'

export default Vue.extend({
  components: {
    MemberCard
  },
  computed: {
    memberList(): IMemberState {
      return getMemberList()
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../../assets/Style/base';

.MemberList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  &__card {
    margin: 0 auto;
  }
}
</style>
