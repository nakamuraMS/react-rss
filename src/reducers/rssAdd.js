import { createRss } from '../actions/index';

const initialState = {
  rss: {
    name: '',
    url: ''
  }
}

export default function Rss(state = initialState, Action) {
  return {
    name: state.rss.name,
    url: state.rss.url,
  }
}
