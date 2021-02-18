import { SHOWERRORTRUE, SHOWERRORFALSE } from "../actions"

const defaultState = {
  showErrorState: false
}

const showError = (state = defaultState, action) => {
  switch (action.type) {
    case SHOWERRORFALSE:
      return {
        ...state,
        showErrorState: false
      }
    case SHOWERRORTRUE:
      return {
        ...state,
        showErrorState: true
      }
    default:
      return state
  }
}

export default showError