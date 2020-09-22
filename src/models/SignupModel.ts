import BaseModel from './BaseModel'

export default class SignupModel extends BaseModel {
  constructor() {
    super(process.env.VUE_APP_API_ENDPOINT + '/signup')
  }
}
