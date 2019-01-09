const actions = {

  renderSelect: async (state, event) => {
    await event.reply('#select', {
      slots: ['Viber', 'SMS', 'RCS']});
  },

  getChannelChoices: async (state, event) => {
    console.log(event.raw)
  
  },


};
module.exports = actions;

