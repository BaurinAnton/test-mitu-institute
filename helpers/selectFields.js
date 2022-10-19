const selectFields = ({ obj, select }) =>
  select.split(' ').reduce((acc, cur) => ({ ...acc, [cur]: obj[cur] }), {})

module.exports = selectFields
