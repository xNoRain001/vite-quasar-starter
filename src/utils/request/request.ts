import instance from "./instance"
import starterConfig from '../../../starter.config'
import type { IRequestConfig } from "./types"

const showLoading = starterConfig?.request?.loading?.hide ? false : true

const requestConfig: IRequestConfig = { showLoading }

const request = {
  async get (
    url: string | IRequestConfig, 
    params?: Record<string, any>, 
    config: IRequestConfig = requestConfig
  ) {
    const data = typeof url === 'string'
      ? await instance.get(url, { ...requestConfig, params, ...config })
      : await instance({ ...config, ...url })

    return data
  },

  async post (
    url: string | IRequestConfig, 
    data?: any,
    config: IRequestConfig = requestConfig
  ) {
    const _data = typeof url === 'string'
      ? await instance.post(url, data, { ...requestConfig, ...config })
      : await instance({ ...config, ...url })

    return _data
  }
}

export default request
