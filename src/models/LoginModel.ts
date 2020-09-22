import BaseModel from './BaseModel'

export default class LoginModel extends BaseModel {
  constructor() {
    super(process.env.VUE_APP_API_ENDPOINT + '/login')
  }
}
