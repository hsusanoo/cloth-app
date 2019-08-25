import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsFetchingCollections } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetchingCollections,
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

// compose is equivalent to the statement below
//
// const collectionsOverviewContainer = connect(mapStateToProps)(
//     WithSpinner(CollectionsOverview)
// );

export default CollectionsOverviewContainer;
