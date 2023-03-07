import { call } from 'redux-saga';
import api from '../../../services/api';

function* addToReserve() {
  const response = yield call(api.get, `trips/${id}`);
}
