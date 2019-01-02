const actions = {

  renderSelect: async (state, event) => {
      await event.reply('#select', state);
  },

};
module.exports = actions;

