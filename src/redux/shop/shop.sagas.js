import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
    convertCollectionsSnapshopToMap,
    firestore,
} from '../../utils/firebase.utils';
import {
    fetchCollectionFailure,
    fetchCollectionsSuccess,
} from './shop.actions';
import { ShopActionTypes } from './shop.types';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshopToMap,
            snapshot
        );
        // put is the saga effect equivalent to dispatch
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}
