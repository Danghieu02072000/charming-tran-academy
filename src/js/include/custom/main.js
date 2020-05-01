import { pipe } from '../lib/utils'
import { ready } from '../lib/dom'

import carousel from './carousel'
import sidebar from './sidebar'
import menuMobile from './menu-mobile'
import custom from './custom'

ready(pipe(
  custom,
  menuMobile,
  sidebar,
  carousel
))
