import BaseModel from './BaseModel'

export default class UserModel extends BaseModel {
  constructor() {
    super(process.env.VUE_APP_API_ENDPOINT + '/user')
  }
}
