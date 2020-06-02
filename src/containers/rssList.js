import { connect } from 'react-redux';
import * as RssActions from '../actions'
import { bindActionCreators } from 'redux';
import RssListComponent from '../components/rssList';

const mapStateToProps = state => ({
  rssesCount: state.rsses.length,
  rsses: state.rsses
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(RssActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RssListComponent);