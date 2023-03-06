import { Loading } from 'quasar'
import type { QLoadingShowOptions } from 'quasar'

const loading = {
  show (options?: QLoadingShowOptions) {
    Loading.show(options)
  },

  hide () {
    Loading.hide()
  }
}

export default loading
