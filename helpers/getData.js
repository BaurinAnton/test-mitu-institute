const selectFields = require('./selectFields')

const getData = async ({ query, select, populate = null } = {}) => {
  const data = await strapi
    .query(query)
    .model.find({ published_at: { $ne: null } }, select)
    .populate(populate)

  const output = select
    ? data.map(program => selectFields({ obj: program, select }))
    : data

  return output
}

module.exports = getData
