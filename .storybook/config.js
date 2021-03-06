/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from '@storybook/vue'
import { checkA11y } from '@storybook/addon-a11y'

addDecorator(checkA11y)

const req = require.context('../src', true, /\.story\.ts$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
