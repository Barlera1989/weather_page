import { SUBMITTEDDATA } from "../actions"

const defaultState = {
  submittedDataState: ''
}


const submittedData = (state = defaultState, action) => {
  switch (action.type) {
    case SUBMITTEDDATA:
      return {
        ...state,
        submittedDataState: action.submittedData
      }

    default:
      return state
  }
}

export default submittedData