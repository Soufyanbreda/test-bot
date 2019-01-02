/**
 * Description of the action goes here
 * @param  {String} params.name=value Description of the parameter goes here
 * @param  {Number} [params.age] Optional parameter
 */
async function yourCustomAction(state, event, params) {
  return state
}

renderSelect: async (state, event) => {
  await event.reply('#select', state);
},

module.exports = { yourCustomAction, renderSelect }
