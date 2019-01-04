const Renderer = {
  
    select: data => ({
      text: 'Select option',
      type: '@botpress/multiselect',
      data: { slots: data.slots }
    }),
  
 
  };
  module.exports = Renderer;
