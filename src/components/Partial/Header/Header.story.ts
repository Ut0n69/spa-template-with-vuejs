/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import Header from './Header.vue'

storiesOf('Partial', module).add('Hedaer', () => ({
  components: {
    Header
  },
  template: '<Header />'
}))
