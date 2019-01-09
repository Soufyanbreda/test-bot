import React from 'react'

import style from './style.css'

export const Plugin = ({ slots, onSendData }) => {
  const onChoicesSubmit = (choices) => {
    onSendData({
      type: 'text',
      text: `Selected ${choices.join(', ' )} `,
      data: { choices }
    });
  };
  return (  
      <MultipleChoice choices={slots} onSubmit={onChoicesSubmit} />
  );
};
class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    const { value, checked } = e.target;
    this.setState(({ selected }) => {
      if (checked) {
        selected.push(value);
      } else {
        selected.splice(selected.indexOf(value), 1);
      }
      return selected;
    });
  }
  onSubmit() {
    this.props.onSubmit(this.state.selected);
  }
  render() {
    const { choices } = this.props;
    return (
      <div className="multiple-choice">
      {choices.map((choice, index) => (
        <div className="choice-holder" key={index}>
          <input
               type="checkbox"
               className="checkbox"
               value={choice}
               onClick={this.onChange}/>
          {choice}
        </div>
      ))}
      <button className="button" onClick={this.onSubmit}>
        Confirm
      </button>
    </div>
    );
  }
}

export const Entry = () => null;