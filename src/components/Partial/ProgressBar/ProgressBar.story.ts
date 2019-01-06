/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import ProgressBar from './ProgressBar.vue'

storiesOf('Partial', module).add('ProgressBar', () => ({
  components: {
    ProgressBar
  },
  template: '<ProgressBar />'
}))
