import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

// make a new object - take all the properties from my 
// existing state object - throw them into object
// then define the property email - give it a value of 
// action.payload - toss it on top of whatever properties are on that state obj
// when you write a reducer you need to 
// produce a new object