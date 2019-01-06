import axios from 'axios'
import { API_URL } from './api-config'

export function getBuildingIdentity() {
  return axios.get(`${API_URL}/building`)
}