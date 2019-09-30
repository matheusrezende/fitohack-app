import Model from '../helpers/model';

const mapper = {
  _id: '_id',
  title: 'title',
  picture: 'picture',
  createdAt: 'createdAt',
}

export default new Model(mapper)
