import BaseModel from './BaseModel'

export default class PostModel extends BaseModel {
  constructor() {
    super(process.env.VUE_APP_API_ENDPOINT + '/post')
  }
}
