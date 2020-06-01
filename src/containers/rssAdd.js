import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { createRss } from '../actions/index';
import RssAddComponent from '../components/rssAdd';

// const mapStateToProps = state => {
//   return state.game;
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     handleClick: index => {
//       dispatch();
//     },
//     jumpTo: () => {}
//   };
// };

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(RssAddComponent);