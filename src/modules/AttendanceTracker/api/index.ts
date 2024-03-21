import axios from 'axios'
import { IRequestMethods, IRequestTemplateParams } from '../../../shared/types'
import { absencesNormalization } from '../utils/normalization.ts'
import { API_BASE_URL } from '../../../shared/constants'
import { INewAttendanceStatus } from '../types'

const axiosInstance = axios.create({ baseURL: API_BASE_URL })

const requestTemplate = async ({
  url,
  method,
  payload
}: IRequestTemplateParams) => {
  try {
    const res = await axiosInstance[method](url, payload)
    return res.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getLessons = () =>
  requestTemplate({ url: 'Column', method: IRequestMethods.get })
export const getSchoolboys = () =>
  requestTemplate({ url: 'Schoolboy', method: IRequestMethods.get })

export const getAbsences = async () => {
  const res = await requestTemplate({
    url: 'Rate',
    method: IRequestMethods.get
  })
  if (res) return absencesNormalization(res)
}

export const postAttendanceStatus = (payload: INewAttendanceStatus) =>
  requestTemplate({
    url: `${!payload.Title ? 'Un' : ''}Rate`,
    method: IRequestMethods.post,
    payload
  })
