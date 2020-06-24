import _ from 'lodash';

export const isNilOrEmpty = (value) =>
  _.isNil(value) || _.isEmpty(value) || _.isNull(value) || _.isNaN(value);

export const isPresent = (value) => !isNilOrEmpty(value);
