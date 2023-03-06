import { Notify } from "quasar"
import type { QNotifyUpdateOptions } from "quasar"

const notify = (options: string | QNotifyUpdateOptions) => {
  Notify.create(options)
}

export default notify
