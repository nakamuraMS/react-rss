import { connect } from 'react-redux';
import { addRss } from '../actions';
import RssAddComponent from '../components/rssAdd';

export default connect(null, {addRss})(RssAddComponent);