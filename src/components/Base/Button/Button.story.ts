/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import Button from './Button.vue'

storiesOf('Base', module).add('Button', () => ({
  components: {
    Button
  },
  template: '<Button text="Click" />'
}))
