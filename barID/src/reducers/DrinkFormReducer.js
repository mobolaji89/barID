import {
  DRINK_UPDATE,
  DRINK_CREATE,
  DRINK_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  price: 10,
  status: '',
  quantity: 1
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
