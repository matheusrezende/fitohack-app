import Model from '../helpers/model';

const mapper = {
  _id: '_id',
  title: 'title',
  description: 'description',
  author: 'author',
  createdAt: 'createdAt',
  location: 'location',
  picture: 'picture',
  categories: 'categories',
  timezone: 'timezone',
  address: 'address',
  ending: 'ending',
  favorite: 'favorite',
  favoriteCount: 'favoriteCount',
  beginning: 'beginning',
}

export default new Model(mapper)
