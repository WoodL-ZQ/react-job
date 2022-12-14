import { LOGIN_INFO } from './actionType'

const defaultStore = {
  name: '--',
  sex: 1
}

export const LoginInfoReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case LOGIN_INFO:
      return { ...state, ...action.data }
    default:
      return state
  }
}
