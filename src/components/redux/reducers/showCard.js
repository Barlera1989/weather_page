import { SHOWCARDTRUE, SHOWCARDFALSE } from "../actions"

const defaultState = {
  showCardState: false
}

const showCard = (state = defaultState, action) => {
  switch (action.type) {
    case SHOWCARDFALSE:
      return {
        ...state,
        showCardState: false
      }
    case SHOWCARDTRUE:
      return {
        ...state,
        showCardState: true
      }
    default:
      return state
  }
}

export default showCard