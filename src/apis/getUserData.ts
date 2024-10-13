import { baseUrl } from "../constants/APIConfig"
import { requestAPI } from "../lib/api"

export const getUserData = (accountAddress) =>
  requestAPI({
    url: `${baseUrl}addresses/${accountAddress}`,
  })
