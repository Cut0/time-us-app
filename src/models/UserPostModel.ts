import BaseModel from './BaseModel'

export default class UserPostModel extends BaseModel {
  constructor(uid: number | string) {
    super(process.env.VUE_APP_API_ENDPOINT + '/user' + `${uid}` + '/post')
  }
}
