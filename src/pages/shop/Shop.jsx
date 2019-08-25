import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// HOCs
import CollectionsOverviewContainer from '../../components/collection/CollectionsOverview.container';
import CollectionContainer from '../collection/Collection.container';

class Shop extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        const { match } = this.props;
        return (
            <div>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionContainer}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(
    null,
    mapDispatchToProps
)(Shop);
