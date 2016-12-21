import {
  DRINK_UPDATE,
  DRINK_CREATE,
  DRINK_SAVE_SUCCESS
} from '../actions/types';
var array = ['https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?dpr=1&auto=format&fit=crop&w=1500&h=947&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1481833761820-0509d3217039?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1482112048165-dd23f81c367d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?dpr=1&auto=format&fit=crop&w=1500&h=991&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1415638485326-f4a83d547c07?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1421622548261-c45bfe178854?dpr=1&auto=format&fit=crop&w=1500&h=1002&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1421622548261-c45bfe178854?dpr=1&auto=format&fit=crop&w=1500&h=1002&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1436911540429-4a6e2c0f1601?dpr=1&auto=format&fit=crop&w=1500&h=1041&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?dpr=1&auto=format&fit=crop&w=1500&h=2254&q=80&cs=tinysrgb&crop=', 'https://images.unsplash.com/photo-1444728399417-08d2aa39e6f4?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='];
const image_url = array[(Math.floor(Math.random() * 9) + 1)];

const INITIAL_STATE = {
  name: '',
  price: '',
  status: '',
  amount: '',
  imageURL: image_url
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DRINK_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DRINK_CREATE:
      return INITIAL_STATE;
    case DRINK_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
