import Model from '../helpers/model';

const mapper = {
  _id: '_id',
  email: 'email',
  username: 'username',
  picture: 'picture',
  verified: 'verified?',
}

export default new Model(mapper)
