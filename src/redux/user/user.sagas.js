import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
    auth,
    createUserProfileDocument,
    getCurrentUser,
    googleProvider,
} from '../../utils/firebase.utils';

import {
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    signUpFailure,
    signUpSuccess,
} from './user.actions';
import userActionTypes from './user.types';

function* getSnapshotFromUserAuth(userAuth, ...additionalData) {
    try {
        const userRef = yield call(
            createUserProfileDocument,
            userAuth,
            ...additionalData
        );
        const userSnapshot = yield userRef.get();
        yield put(
            signInSuccess({
                id: userSnapshot.id,
                ...userSnapshot.data(),
            })
        );
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signInWithGoogle() {
    try {
        // pulling off user obj from userRef
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signUp({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );
        yield put(signUpSuccess({ user, displayName }));
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onCheckUserSession),
        call(onSignOutStart),
    ]);
}
