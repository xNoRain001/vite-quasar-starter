import type { AxiosRequestConfig } from "axios"

export interface IRequestConfig extends AxiosRequestConfig {
  showLoading?: boolean,
  // TODO: add notify options
  // showNotify?: boolean,
  // errorMessage?: string,
  // successMessage?: string,
}
