const actions = {

  renderSelect: async (state, event) => {
    await event.reply('#select', {
      slots: ['Viber', 'SMS', 'RCS'], 
      onSendData: (data) => {
          console.log(`${data.value} selected: ${data.selected}`);
      }
  });
  console.log(event.data)
  },

};
module.exports = actions;

