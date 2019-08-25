import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import Collection from './Collection';

const mapStateToProps = createStructuredSelector({
    // we used a function so we can invert its result
    isLoading: state => !selectIsCollectionsLoaded(state),
});

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection);

export default CollectionContainer;
