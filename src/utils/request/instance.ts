import axios from "axios"
import loading from "../loading"
import type { AxiosError } from "axios"
import type { IRequestConfig } from "./types"

const formEnctype = 'application/x-www-form-urlencoded'

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000 * 60,
  withCredentials: true,
  headers: { 'Content-type': formEnctype },
  transformRequest: (data, headers) => {
    if (headers['Content-Type'] === formEnctype) {
      return JSON.stringify(data)
    }

    return data
  }
})

instance.interceptors.request.use((config: IRequestConfig) => {
  const { showLoading } = config

  if (showLoading) {
    loading.show()
  }

  return config
}, (error: AxiosError) => {
  const { showLoading } =  error.request as IRequestConfig

  if (showLoading) {
    loading.hide()
  }
  
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  const { config: { showLoading } }: { config: IRequestConfig } = response

  if (showLoading) {
    loading.hide()
  }

  return response.data
}, (error: AxiosError) => {
  const { showLoading } = error.config as IRequestConfig
  
  if (showLoading) {
    loading.hide()
  }
  
  throw error
})

export default instance
