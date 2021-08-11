import { PayloadAction } from '@reduxjs/toolkit';
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { homePageActions } from '.';

function getFromLocalStorage() {
  let items = localStorage.getItem('list');
  if (!items) {
    localStorage.setItem('list', JSON.stringify([]));
    items = JSON.stringify([]);
  }
  items = JSON.parse(items);
  return items;
}
function* doGetAllItems() {
  let items = yield getFromLocalStorage();
  return yield put(homePageActions.itemsFetched(items));
}
function* doUpdateItem({ payload }: PayloadAction<any>) {
  let items = yield getFromLocalStorage();

  let ind = items.findIndex(a => a.id === payload.item.id);
  if (ind >= 0) items[ind] = { ...payload.item };
  else items.push({ ...payload.item });
  localStorage.setItem('list', JSON.stringify(items));
  return yield put(homePageActions.itemUpdated(payload.item));
}

export function* homePageSaga() {
  yield takeLatest(homePageActions.getAllItems.type, doGetAllItems);
  yield takeLatest(homePageActions.updateItem.type, doUpdateItem);
}
