import auth from './auth';
import customer from './customer';
import search from './search';
import photocopy from './photocopy';
import photocopysearch from './photocopysearch';
import moneytransfer from './moneytransfer';
import delivery from './delivery';
import events from './events';
import debts from './debts';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth:auth,
    customer:customer,
    search:search,
    photocopy:photocopy,
    photocopysearch:photocopysearch,
    moneytransfer:moneytransfer,
    delivery:delivery,
    events:events,
    debts:debts,
});

export default rootReducer;
