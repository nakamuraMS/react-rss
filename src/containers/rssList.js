import { connect } from 'react-redux';
import RssListComponent from '../components/rssList';

const mapStateToProps = () => ({
  rssesCount: JSON.parse(localStorage.getItem('rss')) ? JSON.parse(localStorage.getItem('rss')).length.length : 0,
  rsses: JSON.parse(localStorage.getItem('rss'))
})

export default connect(mapStateToProps, null)(RssListComponent);