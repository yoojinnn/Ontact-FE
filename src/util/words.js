import _ from 'lodash';

export const deduplicateArray = (array) => {
  return _.uniqBy(array, 'text');
};

export const removeOneWords = (array) => {
  return array.filter((value) => value.text.length > 1);
};
