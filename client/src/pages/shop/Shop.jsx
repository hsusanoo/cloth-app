import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ErrorBoundary from '../../components/error-boundry/ErrorBoundary';
import Spinner from '../../components/with-spinner/Spinner';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// HOCs
const CollectionsOverviewContainer = lazy(() =>
    import('../../components/collection/CollectionsOverview.container')
);
const CollectionContainer = lazy(() =>
    import('../collection/Collection.container')
);

const Shop = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div>
            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Route
                        exact
                        path={`${match.path}`}
                        component={CollectionsOverviewContainer}
                    />
                    <Route
                        path={`${match.path}/:collectionId`}
                        component={CollectionContainer}
                    />
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(
    null,
    mapDispatchToProps
)(Shop);
