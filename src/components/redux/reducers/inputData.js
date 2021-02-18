import { INPUTDATA } from "../actions"

const defaultState = {
  inputDataState: ''
}


const inputData = (state = defaultState, action) => {
  switch (action.type) {
    case INPUTDATA:
      return {
        ...state,
        inputDataState: action.inputData
      }

    default:
      return state
  }
}

export default inputData