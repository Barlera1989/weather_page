import { SHOWLOADINGTRUE, SHOWLOADINGFALSE } from "../actions"

const defaultState = {
  showLoadingState: false
}

const showLoading = (state = defaultState, action) => {
  switch (action.type) {
    case SHOWLOADINGFALSE:
      return {
        ...state,
        showLoadingState: false
      }
    case SHOWLOADINGTRUE:
      return {
        ...state,
        showLoadingState: true
      }
    default:
      return state
  }
}

export default showLoading