import { UPDATE_SEARCH_KEYWORD, UiReducerState, UiActions } from '../../types'

const initState: UiReducerState = {
  searchKeyWord: '',
}

export default function uiReducer(
  state: UiReducerState = initState,
  action: UiActions
): UiReducerState {
  switch (action.type) {
  case UPDATE_SEARCH_KEYWORD: {
    return {
      ...state,
      searchKeyWord: action.payload,
    }
  }

  default:
    return state
  }
}
