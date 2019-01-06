<template>
  <div class="Member"><MemberList /></div>
</template>

<script lang="ts">
import Vue from 'vue'
import MemberList from '@/components/Modules/Member/MemberList.vue'

export default Vue.extend({
  components: {
    MemberList
  }
})
</script>
