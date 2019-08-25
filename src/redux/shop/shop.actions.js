import {
    convertCollectionsSnapshopToMap,
    firestore,
} from '../../utils/firebase.utils';
import { ShopActionTypes } from './shop.types';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
        .get()
        .then(async snapshot => {
            const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionFailure(error.message)));
};
