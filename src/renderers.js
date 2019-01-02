const Renderer = {
  
    select: data => ({
      text: 'Select option',
      type: '@botpress/multi-select',
      data: { slots: data.slots }
    }),
  
 
  };
  module.exports = Renderer;