/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import MemberCard from './MemberCard.vue'
import store from '@/store'
import { FetchMember } from '@/store/Modules/member/types'

const dummyData = {
  gender: 'female',
  name: { title: 'miss', first: 'amparo', last: 'guerrero' },
  location: {
    street: '1920 calle de ferraz',
    city: 'jerez de la frontera',
    state: 'galicia',
    postcode: 88549,
    coordinates: { latitude: '-16.6484', longitude: '116.9645' },
    timezone: { offset: '+6:00', description: 'Almaty, Dhaka, Colombo' }
  },
  email: 'amparo.guerrero@example.com',
  login: {
    uuid: '061c376a-db42-4c89-a5de-f9f91f5c0eae',
    username: 'tinyzebra661',
    password: 'stoned',
    salt: 'RsjXFMMu',
    md5: '6e61b6a66bb11eebcead4f5c623dd3e5',
    sha1: 'ec8d45f4bef0634865a3f763ce82030590519ad0',
    sha256: '84760cae6f418e1559708bbca54d1d6fc4c13c57ed7cbd07ca2d4778ee4df7da'
  },
  dob: { date: '1995-08-21T23:28:50Z', age: 23 },
  registered: { date: '2011-08-25T02:26:47Z', age: 7 },
  phone: '993-709-697',
  cell: '634-027-309',
  id: { name: 'DNI', value: '89536085-D' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/11.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/11.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/11.jpg'
  },
  nat: 'ES'
}
storiesOf('Modules/Member', module).add('Card', () => ({
  components: {
    MemberCard
  },
  created() {
    if (!store.state.member.list.length) {
      store.commit(new FetchMember(dummyData))
    }
  },
  template: '<MemberCard :index="0" />'
}))
