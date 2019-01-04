const actions = {

  renderSelect: async (state, event) => {
      await event.reply('#select', { slots: ['Option #1', 'Option #2'] });
  },

};
module.exports = actions;

