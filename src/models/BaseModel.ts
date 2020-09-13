import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import qs from 'qs'

export default abstract class BaseModel {
  static jsonHeaders() {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }
  static stringify = (query = {}) => qs.stringify(query, { indices: false })

  protected axios = axios.create({
    headers: BaseModel.jsonHeaders(),
  })

  protected constructor(baseURL: string) {
    this.axios = axios.create({ baseURL, headers: BaseModel.jsonHeaders() })
  }

  public async get(
    id: string | number,
    query = {},
    config: AxiosRequestConfig = {}
  ) {
    return this.axios
      .get(`/${id}?${BaseModel.stringify(query)}`, config)
      .then(this.postFetch.bind(this))
      .catch(this.postError.bind(this))
  }

  public async getList(params = {}, config: AxiosRequestConfig = {}) {
    return this.axios
      .get(``, { params, ...config })
      .then(this.postFetch.bind(this))
      .catch(this.postError.bind(this))
  }

  public async post(data = {}, config: AxiosRequestConfig = {}) {
    return this.axios
      .post(``, data, config)
      .then(this.postFetch.bind(this))
      .catch(this.postError.bind(this))
  }

  public async patch(
    id: string | number,
    data = {},
    config: AxiosRequestConfig = {}
  ) {
    return this.axios
      .patch(`/${id}`, data, config)
      .then(this.postFetch.bind(this))
      .catch(this.postError.bind(this))
  }

  public async delete(id: string | number, config: AxiosRequestConfig = {}) {
    return this.axios
      .delete(``, { data: { id } })
      .then(this.postFetch.bind(this))
      .catch(this.postError.bind(this))
  }

  protected postFetch(response = { data: {} }) {
    return Promise.resolve({ data: this.deserialize(response.data) })
  }

  protected postError(error: AxiosError) {
    console.log('post error')
    console.log(error)
  }

  protected deserialize(json = {}): any {
    return Object.assign({}, json)
  }
}
