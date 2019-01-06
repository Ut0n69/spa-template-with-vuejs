<template>
  <div id="app">
    <Header />
    <ProgressBar v-if="isShowProgressBar" />
    <div class="container">
      <template v-if="error.hasError">
        <Error />
      </template>
      <template v-else>
        <transition mode="out-in" name="slideQuad"><router-view /></transition>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Partial/Header/Header.vue'
import Error from '@/components/Modules/Error/Error.vue'
import { MemberApiClient } from '@/network/api/Member'
import { FETCH_MEMBER_COUNT } from '@/utils/utils'
import { IErrorState } from '@/store/Modules/error'
import ProgressBar from '@/components/Partial/ProgressBar/ProgressBar.vue'
import { StartProcess, EndProcess } from '@/store/Modules/progressBar/types'
import { IProgressBarState } from '@/store/Modules/progressBar/state'

export default Vue.extend({
  components: {
    Header,
    ProgressBar,
    Error
  },
  computed: {
    error(): IErrorState {
      return this.$store.state.error
    },
    isShowProgressBar(): IProgressBarState {
      return this.$store.state.progressBar.processing
    }
  },
  created() {
    this.fetchMemberList()
    const timer = setInterval(() => {
      if (this.$store.state.member.list.length === 3) {
        clearInterval(timer)
        this.$store.commit(new EndProcess())
      }
    }, 200)
  },
  methods: {
    fetchMemberList() {
      this.$store.commit(new StartProcess())
      for (let i = 0; i < FETCH_MEMBER_COUNT; i++) {
        MemberApiClient.shared.fetchMember()
      }
    }
  }
})
</script>

<style lang="scss">
@import './assets/Style/reset';
@import './assets/Style/base';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.container {
  margin: 0 auto;
  max-width: 1000px;
}
</style>
