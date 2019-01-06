/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import Error from './Error.vue'
import store from '@/store'
import { SetMessage } from '@/store/Modules/error/types'

const dummyErrorMessage = 'This is dummy error message.'

storiesOf('Modules', module).add('Error', () => ({
  components: {
    Error
  },
  created() {
    store.commit(new SetMessage(dummyErrorMessage))
  },
  template: '<Error />'
}))
