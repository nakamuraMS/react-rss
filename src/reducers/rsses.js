import {
  ADD_RSS,
  DELETE_RSS,
  EDIT_RSS
} from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    name: 'test_name',
    url: 'http://example.com'
  }
]

export default function rsses(state = initialState, action) {
  switch (action.type) {
    case ADD_RSS:
      let data =[];
      data.push({
        id: state.reduce((maxId, rss) => Math.max(rss.id, maxId), -1) + 1,
        name: action.name,
        url: action.url
      });
      let key = 'rss' + data[0]['id'];
      localStorage.setItem(key, JSON.stringify(data));

      return [
        ...state,
        {
          id: state.reduce((maxId, rss) => Math.max(rss.id, maxId), -1) + 1,
          name: action.name,
          url: action.url
        }
      ]

    case DELETE_RSS:
      return state.filter(rss =>
        rss.id !== action.id
      )

    case EDIT_RSS:
      return state.map(rss =>
        rss.id === action.id ?
          { ...rss, text: action.text } :
          rss
      )

    default:
      return state
  }
}
