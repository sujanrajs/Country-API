import { UPDATE_SEARCH_KEYWORD, SetSearchKeywordAction } from '../../types'

export function setSearchKeyword(keyword: string): SetSearchKeywordAction {
  return {
    type: UPDATE_SEARCH_KEYWORD,
    payload: keyword,
  }
}
