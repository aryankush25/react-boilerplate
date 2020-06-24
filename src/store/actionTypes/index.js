import { createAsyncActions, createSyncActions } from './helper';
import asyncActions from './asyncActions';
import syncActions from './syncActions';

const asyncConstants = createAsyncActions(...asyncActions);
const syncConstants = createSyncActions(...syncActions);

const actionsTypes = {
  ...asyncConstants,
  ...syncConstants
};

export default actionsTypes;
